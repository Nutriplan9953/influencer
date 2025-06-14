import React, { createContext, useContext, useState } from 'react';

const InfluencerSearchContext = createContext<any>(null);

export const useInfluencerSearch = () => useContext(InfluencerSearchContext);

export const InfluencerSearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [filters, setFilters] = useState<any>({});
  const [results, setResults] = useState<any[]>([]);
  const [sort, setSort] = useState('best');
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <InfluencerSearchContext.Provider value={{
      filters, setFilters, results, setResults, sort, setSort, view, setView, selected, setSelected, loading, setLoading, error, setError
    }}>
      {children}
    </InfluencerSearchContext.Provider>
  );
};
