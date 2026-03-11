import { CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyChooseUs = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    "Elétrica segura e certificada",
    "Redução de panes e curtos-circuitos",
    "Iluminação eficiente e econômica",
    "Segurança eletrônica integrada",
  ];

  return (
    <section id="sobre" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Por que escolher o Guilherme Soluções Elétricas?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Somos especialistas em serviços elétricos residenciais e prediais com foco em 
                <strong className="text-foreground"> qualidade, segurança e satisfação do cliente</strong>. 
                Trabalhamos desde pequenas instalações até sistemas completos de segurança e 
                iluminação inteligente, sempre com atendimento personalizado e preço justo.
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
                Solicitar Orçamento Grátis
              </Button>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-2xl" />
                <div className="text-center p-8 relative z-10">
                  <div className="text-6xl md:text-7xl font-black text-primary mb-2"><Zap className="w-16 h-16 md:w-20 md:h-20" /></div>
                  <p className="text-xl font-bold text-foreground">Segurança em Primeiro Lugar</p>
                  <p className="text-muted-foreground mt-2">Serviço Residencial e Predial</p>
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
