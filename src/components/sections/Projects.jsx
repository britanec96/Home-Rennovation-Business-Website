import { Link } from "react-router-dom";
import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import ProjectCard from "../ui/ProjectCard";
import WhatsAppButton from "../ui/WhatsAppButton";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <Section id="projects" background="white">
      <SectionLabel text="Our Work" />
      <h2 className="mb-12 text-center font-serif text-3xl text-charcoal md:text-4xl">
        Recent Projects
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center gap-5 text-center">
        <WhatsAppButton
          text="Like what you see? Let's talk"
          size="lg"
          variant="primary"
        />
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-charcoal transition-colors hover:text-sage"
        >
          View All Projects
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>
    </Section>
  );
}
