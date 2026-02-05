import dncr from "../assets/dncr.png";
import paisafy from "../assets/paisafy.png";
export const projects = [
  {
    title: "DNCR-Dance Studio Management ",
    description:
      "A complete management system for dance studios to handle student registrations, batch scheduling, fee tracking, instructor management, and attendance. Designed to streamline studio operations and improve administrative efficiency.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "#",
    live: "#",
    imgs: [dncr,paisafy],
    featured: true,
  },
  {
    title: "Paisafy – Personalized Investment Recommendation System",
    description:
      "An intelligent investment recommendation system that analyzes user profiles, risk appetite, and financial goals to suggest personalized investment options using data-driven logic.",
    tech: ["Python", "Machine Learning", "Flask", "Pandas"],
    github: "#",
    live: "#",
    imgs: [paisafy,dncr],
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application using OpenWeather API.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
    imgs: [dncr,paisafy],
    featured: false,
  },
  {
    title: "Quiz Application",
    description: "Interactive quiz app with timer and score tracking.",
    tech: ["React", "Tailwind"],
    github: "#",
    live: "#",
    imgs: [dncr,paisafy],
    featured: false,
  },
];