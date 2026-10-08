import Header from '@/components/Header';
import HeroSections from '@/components/sections/hero-sections';
import StorySection from '@/components/sections/story-section';
import ExperienceSection from '@/components/sections/experience-section';
import ProjectsSection from '@/components/sections/projects-section';
import WorkSection from '@/components/sections/work-section';
import ContactSection from '@/components/sections/contact-section';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSections />
                <StorySection />
                <ExperienceSection />
                <ProjectsSection />
                <WorkSection />
                <ContactSection />
            </main>
        </>
    );
}