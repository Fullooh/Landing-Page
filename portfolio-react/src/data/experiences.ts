export interface Experience {
  title: string;
  company_name: string;
  date: string;
  location: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    title: "Co-Founder & Software Developer",
    company_name: "SyntaxSocial",
    date: "Mar 2025 – Present",
    location: "New York, NY",
    points: [
      "Co-created a comprehensive social platform for tech professionals combining features of Reddit and Stack Overflow, facilitating networking and collaboration among developers.",
      "Developed robust friend system, personalized feed, project matchmaking functionality, and community \"tribes\" to connect users with similar interests and skills.",
      "Engineered backend infrastructure to support user authentication, data authentication, data persistence, and real-time interactions, ensuring scalability and performance, while implementing modern UI/UX principles to create and intuitive interface."
    ]
  },
  {
    title: "Open-Source Software Engineering Intern",
    company_name: "CodeDay Labs x EBSCO",
    date: "Oct 2024 – Present",
    location: "Seattle, WA (Remote)",
    points: [
      "Develops comprehensive Customer Relationship Management (CRM) application to streamline client data management and enhance user engagement",
      "Enhance the UIUX by improving the frontend design, resulting in a more intuitive and responsive interface for users",
      "Implement dynamic, scalable widgets on the dashboard, allowing for personalized user experiences and improved data visualization"
    ]
  },
  {
    title: "Software Engineering Fellow",
    company_name: "Headstarter",
    date: "Aug 2024 – Sept 2024", 
    location: "New York, NY",
    points: [
      "Built and deployed 4 AI projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel",
      "Led development on SyncUp, a social platform for software engineers and developers",
      "Participated in weekly mentorship sessions with engineers from Google, Y Combinator, Stanford, Amazon"
    ]
  },
  {
    title: "Open-Source Software Engineering Intern",
    company_name: "CodeDay Labs",
    date: "Jul 2023 – Aug 2023",
    location: "Seattle, WA (Remote)",
    points: [
      "Collaborated in conceptualizing and developing 'Resume Talk', an AI-driven application",
      "Spearheaded the front-end development through designing the UI layout",
      "Implemented quality-of-life improvements for intuitive front-end design"
    ]
  }
]; 