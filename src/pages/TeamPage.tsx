import React, { useEffect, useState } from 'react';
import { TeamManagementPanel } from '@/components/TeamManagementPanel';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';

const TeamPage = () => {
  const { user } = useAuth();
  const [teamId, setTeamId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrCreateTeam = async () => {
      if (!user) return;
      // Try to find a team for this user
      const { data, error } = await supabase
        .from('teams')
        .select('id')
        .eq('created_by', user.id)
        .single();
      if (data) {
        setTeamId(data.id);
      } else {
        // Create a new team for this user
        const { data: newTeam, error: createError } = await supabase
          .from('teams')
          .insert([{ name: `${user.user_metadata?.full_name || user.email}'s Team`, created_by: user.id }])
          .select('id')
          .single();
        if (newTeam) setTeamId(newTeam.id);
      }
      setLoading(false);
    };
    fetchOrCreateTeam();
  }, [user]);

  if (loading) return <div className="p-8">Loading team...</div>;
  if (!teamId) return <div className="p-8 text-red-500">Could not load or create a team.</div>;

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Team Management</h1>
      <TeamManagementPanel teamId={teamId} />
    </div>
  );
};

export default TeamPage;
