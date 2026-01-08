import { AboutSection } from "../Components/AboutSection";
import { ContactSection } from "../Components/ContactSection";
import { Footer } from "../Components/Footer";
import { HeroSection } from "../Components/HeroSection";
import { Navbar } from "../Components/Navbar";
import { ProjectSection } from "../Components/ProjectSection";
import { SkillsSection } from "../Components/SkillsSection";
import { StarBackground } from "../Components/StarBackground";
import { ThemeToggle } from "../Components/ThemeToggle";

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        
        {/* Theme Toggle (which will allow us to change dark to light mode or reverse) */}
        <ThemeToggle/>
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <Navbar />
        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
            <Footer />
        </main>
        {/* Footer */}
    </div>
};