import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const InfluencerProfileCard = ({ influencer, selected, onSelect, onSave, onContact, onView }: any) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3 relative group border hover:border-blue-500 transition">
      <div className="flex items-center gap-3">
        <div className="w-14 h-14 bg-gray-200 rounded-full flex-shrink-0" />
        <div className="flex-1">
          <div className="font-semibold">{influencer.displayName}</div>
          <div className="text-xs text-gray-500">@{influencer.username}</div>
        </div>
        <Button variant="ghost" size="icon" onClick={onSave} aria-label="Save to List">
          <span className={selected ? 'text-red-500' : 'text-gray-400'}>♥</span>
        </Button>
      </div>
      <div className="flex gap-4 text-xs">
        <span><b>{influencer.followerCountFormatted}</b> followers</span>
        <span className={
          influencer.engagementRate > 5 ? 'text-green-600' : influencer.engagementRate > 2 ? 'text-yellow-600' : 'text-red-500'
        }>
          {influencer.engagementRate}% engagement
        </span>
      </div>
      <div className="text-sm text-gray-600 line-clamp-2">{influencer.bioSnippet}</div>
      <div className="flex gap-2 mt-1">
        {influencer.recentPosts?.slice(0,4).map((img: string, i: number) => (
          <div key={i} className="w-12 h-12 bg-gray-100 rounded overflow-hidden">
            <img src={img} alt="Recent post" className="object-cover w-full h-full" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="flex gap-2 flex-wrap mt-2">
        <Badge>{influencer.location}</Badge>
        {influencer.niches?.map((n: string) => <Badge key={n}>{n}</Badge>)}
      </div>
      <div className="flex gap-2 mt-3">
        <Button size="sm" variant="outline" onClick={onContact}>Get Contact</Button>
        <Button size="sm" onClick={onView}>View Profile</Button>
      </div>
      <input type="checkbox" className="absolute top-2 left-2" checked={selected} onChange={onSelect} />
    </div>
  );
};
