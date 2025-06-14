import React from 'react';
import { Button } from './ui/button';

export const InfluencerSearchResults = ({ influencers, filters, sort, view, onSortChange, onViewChange }: any) => {
  return (
    <section className="flex-1 p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div>
          <div className="text-sm text-gray-500">Showing results for:</div>
          <div className="font-semibold text-lg">{filters?.query || 'All Influencers'}</div>
          <div className="text-xs text-gray-400 mt-1">{Object.keys(filters || {}).length > 0 && JSON.stringify(filters)}</div>
        </div>
        <div className="flex gap-2 items-center">
          <span className="text-sm">Sort by:</span>
          <select value={sort} onChange={e => onSortChange(e.target.value)} className="border rounded px-2 py-1">
            <option value="best">Best Match</option>
            <option value="engagement">Highest Engagement</option>
            <option value="followers">Most Followers</option>
            <option value="recent">Recent Activity</option>
          </select>
          <Button variant={view === 'grid' ? 'default' : 'outline'} onClick={() => onViewChange('grid')}>Grid</Button>
          <Button variant={view === 'list' ? 'default' : 'outline'} onClick={() => onViewChange('list')}>List</Button>
        </div>
      </div>
      {/* Results grid/list placeholder */}
      <div className={view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
        {/* Map influencer cards here */}
        {/* Example: <InfluencerProfileCard ... /> */}
        <div className="text-center text-gray-400 py-20">No results yet. Start your search!</div>
      </div>
    </section>
  );
};
