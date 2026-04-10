import Section from "../layout/Section";
import SectionLabel from "../ui/SectionLabel";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";
import beforeImg from "../../assets/Projects/media w/IMG_1839.JPG";
import afterImg from "../../assets/Projects/media w/IMG_1854.JPG";

export default function BeforeAfter() {
  return (
    <Section id="before-after" background="white">
      <SectionLabel text="The Difference" />
      <h2 className="mb-12 text-center font-serif text-3xl text-charcoal md:text-4xl">
        See the Transformation
      </h2>
      <BeforeAfterSlider
        beforeImage={beforeImg}
        afterImage={afterImg}
        caption="Living room & media wall renovation — Manchester"
      />
    </Section>
  );
}
