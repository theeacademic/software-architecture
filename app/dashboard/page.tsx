import type { Metadata } from "next"
import { DashboardPageClient } from "./page-client"

export const metadata: Metadata = {
  title: "Dashboard | JCGM HEIGHT",
  description: "JCGM dashboard",
}

export default function DashboardPage() {
  return <DashboardPageClient />
} 