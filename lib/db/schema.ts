import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// User model for authentication
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  password      String
  role          UserRole  @default(CANDIDATE)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  profile       Profile?
  company       Company?
  applications  Application[]
}

enum UserRole {
  ADMIN
  RECRUITER
  EMPLOYER
  CANDIDATE
}

// Profile model for candidate information
model Profile {
  id            String    @id @default(cuid())
  userId        String    @unique
  user          User      @relation(fields: [userId], references: [id])
  firstName     String
  lastName      String
  phone         String?
  location      String?
  nationality   String?
  visaStatus    String?
  experience    Int?      // in years
  education     Education[]
  skills        Skill[]
  languages     Language[]
  documents     Document[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

// Company model for employer information
model Company {
  id            String    @id @default(cuid())
  userId        String    @unique
  user          User      @relation(fields: [userId], references: [id])
  name          String
  industry      String
  size          String?
  location      String
  description   String?
  website       String?
  jobs          Job[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

// Job model for job listings
model Job {
  id            String    @id @default(cuid())
  companyId     String
  company       Company   @relation(fields: [companyId], references: [id])
  title         String
  description   String
  requirements  String[]
  location      String
  type          JobType
  salary        String?
  status        JobStatus @default(ACTIVE)
  applications  Application[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum JobType {
  FULL_TIME
  PART_TIME
  CONTRACT
  TEMPORARY
}

enum JobStatus {
  ACTIVE
  CLOSED
  DRAFT
}

// Application model for job applications
model Application {
  id            String    @id @default(cuid())
  jobId         String
  job           Job       @relation(fields: [jobId], references: [id])
  userId        String
  user          User      @relation(fields: [userId], references: [id])
  status        ApplicationStatus @default(PENDING)
  notes         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum ApplicationStatus {
  PENDING
  REVIEWING
  SHORTLISTED
  INTERVIEWED
  OFFERED
  HIRED
  REJECTED
}

// Education model for candidate education history
model Education {
  id            String    @id @default(cuid())
  profileId     String
  profile       Profile   @relation(fields: [profileId], references: [id])
  institution   String
  degree        String
  field         String
  startDate     DateTime
  endDate       DateTime?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

// Skill model for candidate skills
model Skill {
  id            String    @id @default(cuid())
  profileId     String
  profile       Profile   @relation(fields: [profileId], references: [id])
  name          String
  level         String?
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

// Language model for candidate languages
model Language {
  id            String    @id @default(cuid())
  profileId     String
  profile       Profile   @relation(fields: [profileId], references: [id])
  name          String
  proficiency   String
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

// Document model for candidate documents
model Document {
  id            String    @id @default(cuid())
  profileId     String
  profile       Profile   @relation(fields: [profileId], references: [id])
  type          DocumentType
  url           String
  name          String
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

enum DocumentType {
  RESUME
  CERTIFICATE
  ID
  PASSPORT
  VISA
  OTHER
}

export default prisma 