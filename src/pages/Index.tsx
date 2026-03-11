import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Guilherme Soluções Elétricas | Instalações, Manutenção e Segurança Eletrônica</title>
        <meta
          name="description"
          content="Serviços elétricos residenciais e prediais com qualidade, segurança e preço justo. Instalações elétricas, iluminação LED, manutenção e segurança eletrônica. Orçamento grátis!"
        />
        <meta
          name="keywords"
          content="eletricista, instalações elétricas, manutenção elétrica, iluminação LED, segurança eletrônica, CFTV, automação residencial"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <WhyChooseUs />
          <Services />
          <Testimonials />
          <FAQ />
          <ContactForm />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Index;
