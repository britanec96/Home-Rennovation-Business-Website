import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import ProcessStep from "../ui/ProcessStep";
import { processSteps } from "../../data/process";

export default function Process() {
  return (
    <Section id="process" background="light">
      <SectionLabel text="How It Works" />
      <h2 className="mb-12 text-center font-serif text-3xl text-charcoal md:text-4xl">
        From First Message to Finished Home
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {processSteps.map((step, i) => (
          <ProcessStep
            key={step.id}
            {...step}
            isLast={i === processSteps.length - 1}
          />
        ))}
      </div>
    </Section>
  );
}
