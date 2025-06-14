import React, { useState } from 'react';
import { Button } from './ui/button';

const objectives = [
  'Product Launch',
  'Brand Awareness',
  'Collaboration',
  'Event Promotion',
  'Other',
];

export const CampaignCreationWizard = ({ onComplete }: any) => {
  const [step, setStep] = useState(1);
  const [campaign, setCampaign] = useState<any>({
    name: '',
    objective: '',
    audience: '',
    startDate: '',
    endDate: '',
    budget: '',
    subject: '',
    template: '',
    sequence: [],
  });

  // Step 1: Setup
  const Step1 = () => (
    <div className="space-y-4">
      <h2 className="font-bold text-lg">Campaign Setup</h2>
      <input
        className="border rounded p-2 w-full"
        placeholder="Campaign Name"
        value={campaign.name}
        onChange={e => setCampaign({ ...campaign, name: e.target.value })}
      />
      <select
        className="border rounded p-2 w-full"
        value={campaign.objective}
        onChange={e => setCampaign({ ...campaign, objective: e.target.value })}
      >
        <option value="">Select Objective</option>
        {objectives.map(obj => <option key={obj} value={obj}>{obj}</option>)}
      </select>
      <input
        className="border rounded p-2 w-full"
        placeholder="Target Audience (Contact List)"
        value={campaign.audience}
        onChange={e => setCampaign({ ...campaign, audience: e.target.value })}
      />
      <div className="flex gap-2">
        <input
          type="date"
          className="border rounded p-2 w-full"
          value={campaign.startDate}
          onChange={e => setCampaign({ ...campaign, startDate: e.target.value })}
        />
        <input
          type="date"
          className="border rounded p-2 w-full"
          value={campaign.endDate}
          onChange={e => setCampaign({ ...campaign, endDate: e.target.value })}
        />
      </div>
      <input
        className="border rounded p-2 w-full"
        placeholder="Budget (optional)"
        value={campaign.budget}
        onChange={e => setCampaign({ ...campaign, budget: e.target.value })}
      />
      <div className="flex justify-end gap-2 mt-4">
        <Button onClick={() => setStep(2)} disabled={!campaign.name || !campaign.objective || !campaign.audience}>Next</Button>
      </div>
    </div>
  );

  // Step 2: Email Template Builder (UI placeholder)
  const Step2 = () => (
    <div className="space-y-4">
      <h2 className="font-bold text-lg">Email Template Builder</h2>
      <input
        className="border rounded p-2 w-full"
        placeholder="Subject Line"
        value={campaign.subject}
        onChange={e => setCampaign({ ...campaign, subject: e.target.value })}
      />
      <textarea
        className="border rounded p-2 w-full"
        rows={6}
        placeholder="Email Content (use {{firstName}}, {{username}}, etc.)"
        value={campaign.template}
        onChange={e => setCampaign({ ...campaign, template: e.target.value })}
      />
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
        <Button onClick={() => setStep(3)} disabled={!campaign.subject || !campaign.template}>Next</Button>
      </div>
    </div>
  );

  // Step 3: Sequence Setup (UI placeholder)
  const Step3 = () => (
    <div className="space-y-4">
      <h2 className="font-bold text-lg">Sequence Setup</h2>
      <div className="bg-gray-50 p-4 rounded">Multi-email sequence builder coming soon...</div>
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={() => setStep(2)}>Back</Button>
        <Button onClick={() => setStep(4)}>Next</Button>
      </div>
    </div>
  );

  // Step 4: Review & Launch
  const Step4 = () => (
    <div className="space-y-4">
      <h2 className="font-bold text-lg">Review & Launch</h2>
      <div className="bg-gray-50 p-4 rounded">
        <div><b>Name:</b> {campaign.name}</div>
        <div><b>Objective:</b> {campaign.objective}</div>
        <div><b>Audience:</b> {campaign.audience}</div>
        <div><b>Timeline:</b> {campaign.startDate} to {campaign.endDate}</div>
        <div><b>Budget:</b> {campaign.budget}</div>
        <div><b>Subject:</b> {campaign.subject}</div>
        <div><b>Email:</b> {campaign.template.slice(0, 80)}...</div>
      </div>
      <div className="flex justify-between mt-4">
        <Button variant="outline" onClick={() => setStep(3)}>Back</Button>
        <Button onClick={() => onComplete(campaign)}>Launch Campaign</Button>
      </div>
    </div>
  );

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow p-8 mt-8">
      {step === 1 && <Step1 />}
      {step === 2 && <Step2 />}
      {step === 3 && <Step3 />}
      {step === 4 && <Step4 />}
    </div>
  );
};
