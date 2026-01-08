import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Joblo - Job Portal Page",
    description:
      "A website where recruiters can post jobs or hire candidates and job seekers can apply for their jobs.",
    image: "/projects/project1.png",
    tags: [
      "React",
      "TailwindCSS",
      "Node.js",
      "MongoDB",
      "Postman API",
      "Express",
    ],
    demoUrl:
      "https://drive.google.com/file/d/1d2BiuocJDa6kJwGnBb_Zn2u-3XGqnR8e/view",
    github: "https://github.com/yashr1919/joblo.github.io",
  },
  {
    id: 2,
    title: "WatchTube",
    description: "A static YouTube-style interface that replicates the core layout and visual experience of the platform using modern front-end technologies.",
    image: "/projects/Project2.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://yashr1919.github.io/techwatch.github.io/",
    github: "https://github.com/yashr1919/techwatch.github.io",
  },
  {
    id: 3,
    title: "Codename",
    description: "A responsive admin-style dashboard designed to visualize data and UI components with a clean, structured layout.",
    image: "/projects/Project3.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://yashr1919.github.io/DashB/",
    github: "https://github.com/yashr1919/DashB",
  },
  {
    id: 4,
    title: "Tic-Tac-Toe",
    description: "An interactive browser-based tic-tac-toe game implementing game logic, state handling, and user interaction.",
    image: "/projects/Project4.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://yashr1919.github.io/tictac.github.io/",
    github: "https://github.com/yashr1919/tictac.github.io",
  },
  {
    id: 5,
    title: "Rock-Paper-Scissor",
    description: "A simple interactive game that allows users to play against the computer with real-time result evaluation.",
    image: "/projects/Project5.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://yashr1919.github.io/rockpasr.github.io/",
    github: "https://github.com/yashr1919/rockpasr.github.io",
  },
  {
    id: 6,
    title: "My Portfolio",
    description:
      "A personal developer portfolio showcasing full-stack projects, technical skills, and core computer science fundamentals.",
    image: "/projects/Project6.png",
    tags: ["React", "TailwindCSS"],
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col h-full"
            >
              <div className="h-44 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto flex items-center gap-4 pt-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/yashr1919"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
