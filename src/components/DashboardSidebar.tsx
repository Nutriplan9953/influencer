
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Search,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
  CreditCard,
  HelpCircle
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard, current: true },
  { name: 'Find Influencers', href: '/find-influencers', icon: Search, current: false },
  { name: 'My Contacts', href: '/contacts', icon: Users, current: false },
  { name: 'Campaigns', href: '/campaigns', icon: MessageSquare, current: false },
  { name: 'Analytics', href: '/analytics', icon: BarChart3, current: false },
  { name: 'Settings', href: '/settings', icon: Settings, current: false },
  { name: 'Billing', href: '/billing', icon: CreditCard, current: false },
  { name: 'Help & Support', href: '/help', icon: HelpCircle, current: false },
];

const DashboardSidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-30 pt-16">
      <div className="flex flex-col h-full">
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.name}
                variant={item.current ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start",
                  item.current && "bg-blue-600 text-white hover:bg-blue-700"
                )}
              >
                <Icon className="mr-3 h-4 w-4" />
                {item.name}
              </Button>
            );
          })}
        </nav>
        
        <div className="p-4 border-t">
          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="text-sm font-medium text-blue-900 mb-2">Need help?</h3>
            <p className="text-xs text-blue-700 mb-3">
              Check out our documentation and tutorials to get the most out of InfluencerConnect Pro.
            </p>
            <Button size="sm" variant="outline" className="text-xs">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
