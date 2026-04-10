import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import TestimonialCard from "../ui/TestimonialCard";
import { testimonials } from "../../data/testimonials";

export default function Testimonials() {
  return (
    <Section id="testimonials" background="dark">
      <SectionLabel text="What Our Clients Say" />
      <h2 className="mb-12 text-center font-serif text-3xl text-white md:text-4xl">
        Trusted by Homeowners Across Manchester
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </Section>
  );
}
