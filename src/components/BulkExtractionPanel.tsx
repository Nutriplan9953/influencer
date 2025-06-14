import React, { useRef, useState } from 'react';
import { Button } from './ui/button';

const batchSizes = [10, 25, 50, 100];

export const BulkExtractionPanel = ({ onExtract, onImportList }: any) => {
  const [file, setFile] = useState<File | null>(null);
  const [urls, setUrls] = useState('');
  const [selectedList, setSelectedList] = useState('');
  const [batchSize, setBatchSize] = useState(25);
  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 w-full max-w-xl">
      <h2 className="font-bold text-lg mb-2">Bulk Contact Extraction</h2>
      <div>
        <label className="font-semibold">Upload Influencer List (CSV/Excel)</label>
        <input
          type="file"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          ref={fileInputRef}
          onChange={e => setFile(e.target.files?.[0] || null)}
          className="block mt-2"
        />
        {file && <div className="text-xs text-gray-500 mt-1">Selected: {file.name}</div>}
      </div>
      <div>
        <label className="font-semibold">Manual URL Input</label>
        <textarea
          className="w-full border rounded p-2 mt-2"
          rows={3}
          placeholder="Paste Instagram profile URLs, one per line..."
          value={urls}
          onChange={e => setUrls(e.target.value)}
        />
      </div>
      <div>
        <label className="font-semibold">Import from Saved Lists</label>
        <select className="w-full border rounded p-2 mt-2" value={selectedList} onChange={e => setSelectedList(e.target.value)}>
          <option value="">Select a list...</option>
          <option value="fitness">Fitness Campaign Q1</option>
          <option value="fashion">Fashion Launch</option>
        </select>
        <Button variant="outline" className="mt-2" onClick={() => onImportList(selectedList)}>Import List</Button>
      </div>
      <div>
        <label className="font-semibold">Batch Size</label>
        <select className="w-32 border rounded p-2 mt-2" value={batchSize} onChange={e => setBatchSize(Number(e.target.value))}>
          {batchSizes.map(size => <option key={size} value={size}>{size}</option>)}
        </select>
      </div>
      <Button className="mt-4" onClick={() => onExtract({ file, urls, selectedList, batchSize })}>Extract All Contacts</Button>
    </div>
  );
};
