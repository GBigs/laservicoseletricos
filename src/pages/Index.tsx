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
        <title>LA Servicos Eletricos | Instalacoes, Manutencao e Seguranca Eletronica</title>
        <meta
          name="description"
          content="Servicos eletricos residenciais e prediais com qualidade, seguranca e preco justo. Instalacoes eletricas, iluminacao LED, manutencao e seguranca eletronica. Orcamento gratis!"
        />
        <meta
          name="keywords"
          content="eletricista, instalacoes eletricas, manutencao eletrica, iluminacao LED, seguranca eletronica, CFTV, automacao residencial"
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
