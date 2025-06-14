import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { inviteTeamMember, listTeamMembers, removeTeamMember } from '@/integrations/supabase/team';
import { useAuth } from '@/contexts/AuthContext';

const roles = ['admin', 'manager', 'user'];

export const TeamManagementPanel = ({ teamId }: { teamId: string }) => {
  const { user } = useAuth();
  const [members, setMembers] = useState<any[]>([]);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMembers = async () => {
    setLoading(true);
    const { data, error } = await listTeamMembers(teamId);
    if (error) setError(error.message);
    else setMembers(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchMembers();
    // eslint-disable-next-line
  }, [teamId]);

  const handleInvite = async () => {
    setLoading(true);
    setError(null);
    const { error } = await inviteTeamMember(teamId, email, role, user?.id);
    if (error) setError(error.message);
    else {
      setEmail('');
      setRole('user');
      fetchMembers();
    }
    setLoading(false);
  };

  const handleRemove = async (id: string) => {
    setLoading(true);
    setError(null);
    const { error } = await removeTeamMember(id);
    if (error) setError(error.message);
    else fetchMembers();
    setLoading(false);
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-xl w-full">
      <h2 className="font-bold text-lg mb-4">Team Members</h2>
      <div className="mb-4 flex gap-2">
        <Input
          placeholder="Invite by email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-1/2"
        />
        <select value={role} onChange={e => setRole(e.target.value)} className="border rounded p-2">
          {roles.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <Button onClick={handleInvite} disabled={loading || !email}>Invite</Button>
      </div>
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <table className="min-w-full text-sm mt-4">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map(m => (
            <tr key={m.id} className="border-b">
              <td className="p-2">{m.email}</td>
              <td className="p-2">{m.role}</td>
              <td className="p-2">{m.status}</td>
              <td className="p-2">
                <Button size="sm" variant="destructive" onClick={() => handleRemove(m.id)} disabled={loading}>Remove</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {loading && <div className="mt-2 text-gray-500">Loading...</div>}
    </div>
  );
};
