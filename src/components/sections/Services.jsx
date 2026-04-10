import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";

export default function Services() {
  return (
    <Section id="services" background="light">
      <SectionLabel text="What We Do" />
      <h2 className="mb-4 text-center font-serif text-3xl text-charcoal md:text-4xl">
        Craftsmanship Across Every Room
      </h2>
      <p className="mb-12 text-center text-warm-gray">
        Whether it&apos;s one room or the whole property &mdash; no job is too big or too small.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </Section>
  );
}
