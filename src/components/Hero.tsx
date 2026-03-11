import { Button } from "@/components/ui/button";
import { Zap, Shield, Clock } from "lucide-react";

const COMPANY_NAME = "LA Servicos Eletricos";
const whatsappUrl =
  "https://wa.me/5548988287501?text=Ola%2C%20vim%20pelo%20site%20e%20gostaria%20de%20atendimento.";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--primary)/0.05),transparent_40%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 animate-fade-in-up">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Instalacoes Eletricas • Manutencao • Seguranca Eletronica
            </span>
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground block">{COMPANY_NAME}</span>
            <span className="text-gradient block mt-2">Seguranca, Confiabilidade e Alto Padrao</span>
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Solucoes completas para sua casa, predio ou empresa. Atendimento rapido e orcamento sem compromisso.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button onClick={scrollToContact} variant="hero" size="lg" className="sm:text-base sm:px-8 sm:h-14">
              <Zap className="w-5 h-5" />
              <span className="hidden sm:inline">Solicitar Orcamento Gratis</span>
              <span className="sm:hidden">Solicitar Orcamento</span>
            </Button>
            <Button asChild variant="outline" size="lg" className="sm:text-base sm:px-8 sm:h-14">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 md:gap-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-foreground text-sm md:text-base">Seguro</p>
                <p className="text-xs text-muted-foreground hidden md:block">Dentro das normas</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-foreground text-sm md:text-base">Rapido</p>
                <p className="text-xs text-muted-foreground hidden md:block">Atendimento agil</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="text-center md:text-left">
                <p className="font-bold text-foreground text-sm md:text-base">Qualidade</p>
                <p className="text-xs text-muted-foreground hidden md:block">Servico garantido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
