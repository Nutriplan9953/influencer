import React, { useState } from 'react';
import { CampaignCreationWizard } from '@/components/CampaignCreationWizard';
import { CampaignsDashboard } from '@/components/CampaignsDashboard';
import { Button } from '@/components/ui/button';

const CampaignManagement = () => {
  const [showWizard, setShowWizard] = useState(false);
  const [launchedCampaign, setLaunchedCampaign] = useState<any>(null);

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Campaign Management</h1>
        <Button onClick={() => setShowWizard(true)}>Create New Campaign</Button>
      </div>
      {showWizard && (
        <CampaignCreationWizard
          onComplete={c => {
            setLaunchedCampaign(c);
            setShowWizard(false);
          }}
        />
      )}
      {!showWizard && <CampaignsDashboard onView={c => {}} />}
      {launchedCampaign && (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded">
          <b>Campaign "{launchedCampaign.name}" launched!</b>
        </div>
      )}
    </div>
  );
};

export default CampaignManagement;
