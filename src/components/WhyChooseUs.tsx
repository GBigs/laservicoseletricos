import { CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const COMPANY_NAME = "LA Servicos Eletricos";

const WhyChooseUs = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    "Eletrica segura e certificada",
    "Reducao de panes e curtos-circuitos",
    "Iluminacao eficiente e economica",
    "Seguranca eletronica integrada",
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Por que escolher a {COMPANY_NAME}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Somos especialistas em servicos eletricos residenciais e prediais com foco em
                <strong className="text-foreground"> qualidade, seguranca e satisfacao do cliente</strong>.
                Trabalhamos desde pequenas instalacoes ate sistemas completos de seguranca e
                iluminacao inteligente, sempre com atendimento personalizado e preco justo.
              </p>

              <ul className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button onClick={scrollToContact} size="lg">
                Solicitar Orcamento Gratis
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-2xl" />
                <div className="text-center p-8 relative z-10 flex flex-col items-center">
                  <div className="text-6xl md:text-7xl font-black text-primary mb-2 flex justify-center">
                    <Zap className="w-16 h-16 md:w-20 md:h-20" />
                  </div>
                  <p className="text-xl font-bold text-foreground">Seguranca em Primeiro Lugar</p>
                  <p className="text-muted-foreground mt-2">Servico Residencial e Predial</p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
