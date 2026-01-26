import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/about2/WhyChooseUs";
import ClientInsight from "@/components/home/ClientInsight";
import OurPartners from "@/components/home/OurPartners";
import FAQ from "@/components/home/FAQ";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs/>
      <ClientInsight/>
      <OurPartners/>
      <FAQ/>
    </main>
  );
}
