import React, { useState } from 'react';
import { ContactProvider, useContactContext } from '@/contexts/ContactContext';
import { BulkExtractionPanel } from '@/components/BulkExtractionPanel';
import { ContactListTable } from '@/components/ContactListTable';
import { Button } from '@/components/ui/button';

const mockContacts = [
  {
    id: '1',
    profilePic: 'https://placehold.co/40x40',
    username: 'janedoe',
    email: 'jane@email.com',
    emailStatus: 'Verified',
    phone: '',
    website: 'janedoe.com',
    source: 'Bio',
    lastContacted: '2025-06-01',
    status: 'New',
  },
  {
    id: '2',
    profilePic: 'https://placehold.co/40x40',
    username: 'mikefit',
    email: 'mike@email.com',
    emailStatus: 'Unverified',
    phone: '555-1234',
    website: '',
    source: 'Pattern',
    lastContacted: '',
    status: 'Contacted',
  },
];

const ContactDashboardInner = () => {
  const { contacts, setContacts } = useContactContext();
  const [showExtraction, setShowExtraction] = useState(false);

  // Demo: load mock contacts on mount
  React.useEffect(() => {
    setContacts(mockContacts);
  }, [setContacts]);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Contact Management</h1>
        <Button onClick={() => setShowExtraction(v => !v)}>
          {showExtraction ? 'Hide Extraction' : 'Bulk Extraction'}
        </Button>
      </div>
      {showExtraction && (
        <div className="mb-8">
          <BulkExtractionPanel onExtract={() => {}} onImportList={() => {}} />
        </div>
      )}
      <ContactListTable
        contacts={contacts}
        onEdit={() => {}}
        onDelete={() => {}}
        onVerify={() => {}}
        onContact={() => {}}
      />
    </div>
  );
};

const ContactDashboard = () => (
  <ContactProvider>
    <ContactDashboardInner />
  </ContactProvider>
);

export default ContactDashboard;
