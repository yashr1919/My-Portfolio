import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  //frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 60, category: "frontend" },

  //backend
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express", level: 60, category: "backend" },
  { name: "Java Springboot", level: 60, category: "backend" },

  //databases and management
  { name: "MongoDB", level: 60, category: "databases" },
  { name: "MySQL", level: 80, category: "databases" },
  { name: "DBMS (concept)", level: 60, category: "databases" },

  //tools
  { name: "Git/Github", level: 60, category: "tools" },
  { name: "VS Code", level: 90, category: "tools" },

  //programming languages
  { name: "Java", level: 90, category: "Programming Languages" },
  { name: "JavaScript", level: 80, category: "Programming Languages" },

  //core cs fundamentals
  { name: "OOPs", level: 90, category: "fundamentals" },
  { name: "Computer Networks", level: 60, category: "fundamentals" },

  //Management
  { name: "Project Management", level: 90, category: "management" },
];
const categories = ["all", "frontend", "backend", "tools","databases", "Programming Languages", "fundamentals", "management"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">

        {/* <div className="flex flex-wrap justify-center gap-4 mb-12"> */}
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-sm rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
