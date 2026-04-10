import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import TrustBadge from "../ui/TrustBadge";
import { guarantees } from "../../data/guarantees";

export default function Guarantees() {
  return (
    <Section id="guarantees" background="light">
      <SectionLabel text="Our Promises" />
      <h2 className="mb-12 text-center font-serif text-3xl text-charcoal md:text-4xl">
        Built on Trust
      </h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {guarantees.map((guarantee) => (
          <TrustBadge key={guarantee.id} {...guarantee} />
        ))}
      </div>
    </Section>
  );
}
