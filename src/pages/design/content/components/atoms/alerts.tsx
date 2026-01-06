// AlertsPage.tsx
import { PageHeader } from "../PageHeader";
import { AlertTriangle } from "lucide-react";

export default function AlertsPage() {
  return (
    <div className="space-y-16 max-w-6xl mx-auto p-12 pb-40">
      <PageHeader
        category="Feedback"
        title="Alerts"
        description="Feedback messages for typical user actions, providing context-aware information and alerts."
        icon={<AlertTriangle className="w-10 h-10 text-primary" />}
        version="v1.0.0"
        badgeVariant="primary"
      />
      <div>Debugging Alerts Page...</div>
    </div>
  );
}
