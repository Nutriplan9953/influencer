import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const ContactListTable = ({ contacts, onEdit, onDelete, onVerify, onContact }: any) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow p-4">
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="p-2">Profile</th>
            <th className="p-2">Username</th>
            <th className="p-2">Email <span className="text-xs">(Status)</span></th>
            <th className="p-2">Phone</th>
            <th className="p-2">Website</th>
            <th className="p-2">Source</th>
            <th className="p-2">Last Contacted</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length === 0 ? (
            <tr>
              <td colSpan={9} className="text-center text-gray-400 py-8">No contacts found.</td>
            </tr>
          ) : contacts.map((c: any) => (
            <tr key={c.id} className="border-b hover:bg-gray-50">
              <td className="p-2"><img src={c.profilePic} alt="Profile" className="w-10 h-10 rounded-full" /></td>
              <td className="p-2">{c.username}</td>
              <td className="p-2">
                {c.email}
                <Badge className={
                  c.emailStatus === 'Verified' ? 'bg-green-100 text-green-700' :
                  c.emailStatus === 'Invalid' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }>{c.emailStatus}</Badge>
              </td>
              <td className="p-2">{c.phone || '-'}</td>
              <td className="p-2">{c.website || '-'}</td>
              <td className="p-2">{c.source}</td>
              <td className="p-2">{c.lastContacted || '-'}</td>
              <td className="p-2">
                <Badge>{c.status}</Badge>
              </td>
              <td className="p-2 flex gap-1">
                <Button size="sm" variant="outline" onClick={() => onEdit(c)}>Edit</Button>
                <Button size="sm" variant="outline" onClick={() => onContact(c)}>Contact</Button>
                <Button size="sm" variant="destructive" onClick={() => onDelete(c)}>Delete</Button>
                <Button size="sm" variant="ghost" onClick={() => onVerify(c)}>Verify</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
