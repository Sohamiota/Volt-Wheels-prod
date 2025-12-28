import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your admin settings and preferences</p>
      </div>

      <Card className="p-8 max-w-2xl">
        <h2 className="text-xl font-bold text-foreground mb-6">Email Notifications</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Admin Email</label>
            <Input type="email" placeholder="admin@example.com" />
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" defaultChecked id="new-leads" className="w-4 h-4" />
            <label htmlFor="new-leads" className="text-sm text-foreground">
              Receive alerts for new leads
            </label>
          </div>
          <div className="flex items-center space-x-4">
            <input type="checkbox" defaultChecked id="daily-summary" className="w-4 h-4" />
            <label htmlFor="daily-summary" className="text-sm text-foreground">
              Daily summary report
            </label>
          </div>
          <div className="pt-4">
            <Button>Save Settings</Button>
          </div>
        </div>
      </Card>

      <Card className="p-8 max-w-2xl">
        <h2 className="text-xl font-bold text-foreground mb-6">API Keys</h2>
        <p className="text-sm text-muted-foreground mb-4">Manage API keys for integrations</p>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Exotel API Key</label>
            <Input type="password" placeholder="Enter Exotel API key" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">WhatsApp Business API Key</label>
            <Input type="password" placeholder="Enter WhatsApp API key" />
          </div>
          <div className="pt-4">
            <Button>Update Keys</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
