import type { Metadata } from "next"
import { AdminDashboardClient } from "./page-client"

export const metadata: Metadata = {
  title: "Admin Dashboard | Job Portal",
  description: "Manage jobs and applications",
}

export default function AdminDashboardPage() {
  return <AdminDashboardClient />
} 