export interface Job {
  id: number;
  title: string;
  location: string;
  image: string;
  salary: string;
  category: string;
  requirements: string[];
  type: string;
  gender: 'Male' | 'Female' | 'Both';
  forHiring: boolean;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Security Personnel",
    location: "Qatar",
    image: "/security.jpg",
    salary: "QAR 1600-1800",
    category: "Security",
    requirements: ["Valid Passport", "Good Conduct"],
    type: "Full-time",
    gender: "Male",
    forHiring: true,
  },
  {
    id: 2,
    title: "Cleaner",
    location: "Qatar",
    image: "/cleaner.jpg",
    salary: "QAR 1000 + Allowances",
    category: "Maintenance",
    requirements: ["Valid Passport", "Good Conduct"],
    type: "Full-time",
    gender: "Both",
    forHiring: true,
  },
  {
    id: 3,
    title: "Company Helper",
    location: "Qatar",
    image: "/helper.jpg",
    salary: "QAR 1000 + Allowances",
    category: "General",
    requirements: ["Valid Passport", "Good Conduct"],
    type: "Full-time",
    gender: "Male",
    forHiring: true,
  },
  {
    id: 4,
    title: "Lifeguard",
    location: "Qatar",
    image: "/lifegurad.jpg",
    salary: "QAR 1000 + Allowances",
    category: "Safety",
    requirements: ["Valid Passport", "Good Conduct", "Swimming Certificate"],
    type: "Full-time",
    gender: "Male",
    forHiring: true,
  },
  {
    id: 5,
    title: "Barista",
    location: "Qatar",
    image: "/barista.jpg",
    salary: "QAR 1000 + Allowances",
    category: "Hospitality",
    requirements: ["Valid Passport", "Good Conduct"],
    type: "Full-time",
    gender: "Both",
    forHiring: true,
  },
  {
    id: 6,
    title: "Beautician",
    location: "Qatar",
    image: "/beautician.jpg",
    salary: "QAR 1000 + Allowances",
    category: "Beauty",
    requirements: ["Valid Passport", "Good Conduct", "Beauty Certificate"],
    type: "Full-time",
    gender: "Female",
    forHiring: true,
  },
  {
    id: 7,
    title: "Home Teacher",
    location: "Qatar",
    image: "/teacher.jpg",
    salary: "QAR 1000 + Allowances",
    category: "Education",
    requirements: ["Valid Passport", "Good Conduct", "Teaching Certificate"],
    type: "Full-time",
    gender: "Female",
    forHiring: true,
  },
  {
    id: 8,
    title: "House Maid",
    location: "Qatar",
    image: "/maid.jpg",
    salary: "QAR 1000 + Allowances",
    category: "Domestic",
    requirements: ["Valid Passport", "Good Conduct"],
    type: "Full-time",
    gender: "Female",
    forHiring: true,
  }
]; 