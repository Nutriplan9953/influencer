import React, { useState } from 'react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Select } from './ui/select';

const popularHashtags = ['#fashion', '#fitness', '#food', '#tech', '#beauty'];
const nicheCategories = ['Fashion', 'Fitness', 'Food', 'Tech', 'Beauty'];
const contentTypes = ['Image', 'Video', 'Reels'];
const postFrequencies = [7, 30, 90];
const languages = ['English', 'Spanish', 'French', 'German', 'Italian'];

export const InfluencerFiltersPanel = ({ filters, setFilters, onApply, onClear }: any) => {
  const [hashtagInput, setHashtagInput] = useState('');
  return (
    <aside className="w-80 p-6 bg-white border-r flex flex-col gap-6">
      <div>
        <label className="font-semibold">Hashtag Search</label>
        <Input
          placeholder="Search hashtags..."
          value={hashtagInput}
          onChange={e => setHashtagInput(e.target.value)}
          className="mt-2"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {popularHashtags.map(tag => (
            <Button key={tag} variant="outline" size="sm" onClick={() => setHashtagInput(tag)}>{tag}</Button>
          ))}
        </div>
      </div>
      <div>
        <label className="font-semibold">Location</label>
        <Input placeholder="Country or city..." className="mt-2" />
      </div>
      <div>
        <label className="font-semibold">Niche Categories</label>
        <div className="flex flex-col gap-1 mt-2">
          {nicheCategories.map(cat => (
            <label key={cat} className="flex items-center gap-2">
              <Checkbox /> {cat}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="font-semibold">Follower Range</label>
        <Slider min={1000} max={100000} step={1000} defaultValue={[5000, 50000]} className="mt-2" />
        <div className="flex justify-between text-xs mt-1">
          <span>1K</span><span>100K</span>
        </div>
      </div>
      <div>
        <label className="font-semibold">Engagement Rate (%)</label>
        <Input type="number" min={0} max={100} placeholder="Min %" className="mt-2 w-24" />
      </div>
      <div>
        <label className="font-semibold">Content Type</label>
        <div className="flex gap-3 mt-2">
          {contentTypes.map(type => (
            <label key={type} className="flex items-center gap-2">
              <Checkbox /> {type}
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="font-semibold">Post Frequency</label>
        <div className="flex gap-3 mt-2">
          {postFrequencies.map(days => (
            <label key={days} className="flex items-center gap-2">
              <Checkbox /> Active in last {days} days
            </label>
          ))}
        </div>
      </div>
      <div>
        <label className="font-semibold">Language</label>
        <Select className="mt-2">
          <option value="">Select language</option>
          {languages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </Select>
      </div>
      <div className="flex gap-2 mt-4">
        <Button onClick={onApply} className="w-full">Apply Filters</Button>
        <Button variant="outline" onClick={onClear} className="w-full">Clear All</Button>
      </div>
    </aside>
  );
};
