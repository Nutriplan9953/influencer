import React from 'react';

export const TableSkeleton = ({ rows = 5, cols = 4 }: { rows?: number, cols?: number }) => (
  <table className="min-w-full text-sm animate-pulse">
    <thead>
      <tr>
        {Array.from({ length: cols }).map((_, i) => (
          <th key={i} className="p-2 bg-gray-100" />
        ))}
      </tr>
    </thead>
    <tbody>
      {Array.from({ length: rows }).map((_, r) => (
        <tr key={r}>
          {Array.from({ length: cols }).map((_, c) => (
            <td key={c} className="p-2 bg-gray-50 rounded" />
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export const CardSkeleton = ({ lines = 3 }: { lines?: number }) => (
  <div className="bg-white rounded-lg shadow p-4 animate-pulse">
    {Array.from({ length: lines }).map((_, i) => (
      <div key={i} className="h-4 bg-gray-200 rounded mb-2" />
    ))}
  </div>
);
