import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Fintech Dashboard",
    description:
      "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
    image: "/projects/project1.png",
    tags: ["React", "Typescript", "NodeJS"],
    link: "#",
    github: "#",
  },
  {
    title: "Movie Discovery Platform",
    description:
      "A movie discovery app powered by real-time API integration, persistent data storage, and client-side state management.",
    image: "/projects/movie-cloud.png",
    tags: ["React", "TMDB API", "Appwrite", "Zustand"],
    link: "https://movie-cloud-app.vercel.app/",
    github: "https://github.com/JonesEgelle/movie-cloud-app",
  },
  {
    title: "Ts Academy Capstone Project",
    description:
      " A responsive React app exploring the solar system through real-time planetary data, built collaboratively as a TS Academy capstone project. ",
    image: "/projects/ts-academy.png",
    tags: ["React", "CSS", "JavaScript (ES6+)", "Fetch API", "GitHub"],
    link: "https://group-28-frontend-capstone-project.vercel.app/",
    github: "https://github.com/JonesEgelle/group-28-frontend-capstone-project",
  },
  {
    title: "Developer Learning Platform / Developer Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute buttom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider animation-fade-in">
            Featured work
          </span>
          <h2 className=" text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web application to
            innovative tools that solve real-world problems
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              className=" group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              key={index}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              {/* Overlay Links */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration:300">
                <a
                  href={project.link}
                  className="rounded-full p-3 glass hover:bg-primary hover:text-primary-foreground transition-all "
                >
                  <ArrowUpRight className="w-5 h-5" />
                </a>
                <a
                  href={project.github}
                  className="rounded-full p-3 glass hover:bg-primary hover:text-primary-foreground transition-all "
                >
                  <FaGithub />
                </a>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors ">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:traslate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    // fix hover on single tag
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View All CTA  */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton href="https://github.com/JonesEgelle">
            View All projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
