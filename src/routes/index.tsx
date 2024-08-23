import {
  Banner,
  BrandStory,
  Happened,
  Introduction,
  News,
  Product,
  Section,
  TopProduct,
} from "@/components";

export default function Index() {
  return (
    <div className="content">
      <Section className="banner">
        <Banner />
      </Section>
      <Section className="introduction">
        <Introduction />
      </Section>
      <Section className="product product-top">
        <TopProduct />
      </Section>
      <Section className="product product-list">
        <Product />
      </Section>
      <Section className="brand-story bg-[#0565bb]">
        <BrandStory />
      </Section>
      <Section className="happened bg-[#fccb05]">
        <Happened />
      </Section>
      <Section className="news">
        <News />
      </Section>
    </div>
  );
}
