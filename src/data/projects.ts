export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Resume Talk",
    description: "AI-powered application that helps users create and improve their resumes through interactive conversations and real-time feedback.",
    tags: ["React", "OpenAI", "Node.js", "React"],
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFub2QwcXhxaGdoZHpqeW5tdHdoMXo0a2d2ZDA1d211c3owbzlxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",
    github: "https://github.com/Fullooh/CodeDays"
  },
  {
    title: "HackRU",
    description: "Grocery Editor Application built during HackRU 2025",
    tags: ["React", "Tailwind", "Java"],
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFub2QwcXhxaGdoZHpqeW5tdHdoMXo0a2d2ZDA1d211c3owbzlxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",
    github: "https://github.com/ebm/hackru"
  },
  {
    title: "Prescience",
    description: "An AI-powered CRM system that streamlines customer relationship management through intelligent automation and intuitive design.",
    tags: ["Next.js", "React", "OpenAI API", "Tailwind"],
    image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzFub2QwcXhxaGdoZHpqeW5tdHdoMXo0a2d2ZDA1d211c3owbzlxbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",
    github: "https://github.com/aliiyuu/ebsco-ai"
  }
]; 