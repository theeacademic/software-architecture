import type { Metadata } from "next"
import { DashboardPageClient } from "./page-client"

export const metadata: Metadata = {
  title: "Dashboard | JCGM HEIGHT",
  description: "JCM dashboard",
}

export default function DashboardPage() {
  return <DashboardPageClient />
} 