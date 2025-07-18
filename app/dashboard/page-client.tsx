'use client';

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/app/AuthContext"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobList } from "@/components/jobs/job-list"
import { JobApplications } from "@/components/jobs/job-applications"
import { JobManagement } from "@/components/jobs/job-management"

export function DashboardPageClient() {
  const router = useRouter();
  const { user, isLoading } = useAuth();
  const [notifications, setNotifications] = useState<any[]>([]);
  const [loadingNotifications, setLoadingNotifications] = useState(true);

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/auth/sign-in');
    }
  }, [user, isLoading, router]);

  useEffect(() => {
    if (user && user.role !== 'admin') {
      fetch('/api/notifications')
        .then(res => res.json())
        .then(data => setNotifications(data.notifications || []))
        .finally(() => setLoadingNotifications(false));
    }
  }, [user]);

  const dismissNotification = (id: string) => {
    setNotifications((prev) => prev.filter(n => n.id !== id));
  };

  if (isLoading) {
    return (
      <div className="container flex h-screen w-full flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-art-purple"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const isAdmin = user.role === 'admin';

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="text-sm text-muted-foreground">
          Logged in as: {user.username} ({isAdmin ? 'Administrator' : 'User'})
        </div>
      </div>

      {/* User notifications (not admin) */}
      {!isAdmin && !loadingNotifications && notifications.length > 0 && (
        <div className="mb-6 space-y-2">
          {notifications.map((n) => (
            <Card key={n.id} className="bg-blue-50 border-blue-200">
              <CardContent className="flex items-center justify-between py-3">
                <span className="text-blue-900 font-medium">{n.message}</span>
                <Button size="sm" variant="ghost" onClick={() => dismissNotification(n.id)}>
                  Dismiss
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {isAdmin ? (
        <Tabs defaultValue="applications" className="space-y-4">
          <TabsList>
            <TabsTrigger value="applications">Job Applications</TabsTrigger>
            <TabsTrigger value="management">Job Management</TabsTrigger>
          </TabsList>
          <TabsContent value="applications">
            <Card>
              <CardHeader>
                <CardTitle>Job Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <JobApplications />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="management">
            <Card>
              <CardHeader>
                <CardTitle>Job Management</CardTitle>
              </CardHeader>
              <CardContent>
                <JobManagement />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Jobs</CardTitle>
            </CardHeader>
            <CardContent>
              <JobList />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>My Applications</CardTitle>
            </CardHeader>
            <CardContent>
              <JobApplications userId={user.id} />
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
} 