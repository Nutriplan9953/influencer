import React, { createContext, useContext, useState } from 'react';

const ContactContext = createContext<any>(null);

export const useContactContext = () => useContext(ContactContext);

export const ContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [contacts, setContacts] = useState<any[]>([]);
  const [extractionProgress, setExtractionProgress] = useState<any>(null);
  const [verifying, setVerifying] = useState(false);

  return (
    <ContactContext.Provider value={{
      contacts, setContacts, extractionProgress, setExtractionProgress, verifying, setVerifying
    }}>
      {children}
    </ContactContext.Provider>
  );
};
