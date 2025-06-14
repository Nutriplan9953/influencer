import React, { useState } from 'react';
import { Button } from './ui/button';

const mockCampaigns = [
  {
    id: '1',
    name: 'Summer Launch',
    status: 'Active',
    recipients: 120,
    sent: 120,
    delivered: 118,
    opened: 90,
    responseRate: 22,
    started: '2025-06-01',
    duration: '14 days',
  },
  {
    id: '2',
    name: 'Brand Awareness',
    status: 'Paused',
    recipients: 80,
    sent: 80,
    delivered: 78,
    opened: 60,
    responseRate: 18,
    started: '2025-05-20',
    duration: '10 days',
  },
];

export const CampaignsDashboard = ({ onView }: any) => {
  const [campaigns] = useState(mockCampaigns);
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h2 className="font-bold text-lg mb-4">Active Campaigns</h2>
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="p-2">Name</th>
            <th className="p-2">Status</th>
            <th className="p-2">Recipients</th>
            <th className="p-2">Sent</th>
            <th className="p-2">Delivered</th>
            <th className="p-2">Opened</th>
            <th className="p-2">Response Rate</th>
            <th className="p-2">Started</th>
            <th className="p-2">Duration</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map(c => (
            <tr key={c.id} className="border-b hover:bg-gray-50">
              <td className="p-2">{c.name}</td>
              <td className="p-2">{c.status}</td>
              <td className="p-2">{c.recipients}</td>
              <td className="p-2">{c.sent}</td>
              <td className="p-2">{c.delivered}</td>
              <td className="p-2">{c.opened}</td>
              <td className="p-2">{c.responseRate}%</td>
              <td className="p-2">{c.started}</td>
              <td className="p-2">{c.duration}</td>
              <td className="p-2 flex gap-1">
                <Button size="sm" variant="outline" onClick={() => onView(c)}>View</Button>
                <Button size="sm" variant="outline">Edit</Button>
                <Button size="sm" variant="outline">Pause</Button>
                <Button size="sm" variant="outline">Archive</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
