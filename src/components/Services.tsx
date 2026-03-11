import { Wrench, Lightbulb, Settings, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Wrench,
    title: "Instalações Elétricas",
    description: "Projetos e execução de instalações elétricas completas com qualidade e segurança.",
    items: [
      "Instalação de tomadas, interruptores e pontos de energia",
      "Instalação de chuveiros elétricos, torneiras e aquecedores",
      "Instalação de lustres, plafons e luminárias",
      "Montagem de painéis elétricos e quadros de disjuntores",
      "Instalação de motores e bombas elétricas",
      "Pontos de energia externa à prova d'água",
    ],
  },
  {
    icon: Lightbulb,
    title: "Iluminação",
    description: "Soluções em iluminação residencial, comercial e decorativa com tecnologia moderna.",
    items: [
      "Iluminação com sensores de presença e fotocélulas",
      "Instalação de fitas e perfis de LED",
      "Iluminação para jardins, fachadas e áreas externas",
      "Iluminação de outdoors e ambientes decorativos",
      "Soluções em iluminação inteligente",
      "Automação de ambientes",
    ],
  },
  {
    icon: Settings,
    title: "Manutenção Elétrica",
    description: "Diagnóstico, reparo e prevenção para manter sua instalação sempre em dia.",
    items: [
      "Diagnóstico e reparo de curtos e falhas elétricas",
      "Troca de disjuntores e fiações danificadas",
      "Ajustes em interfonia e campainhas",
      "Revisão de painéis industriais e residenciais",
      "Prevenção de sobrecarga elétrica",
      "Manutenção elétrica predial preventiva",
    ],
  },
  {
    icon: Shield,
    title: "Segurança Eletrônica",
    description: "Sistemas completos de segurança e automação para sua tranquilidade.",
    items: [
      "Instalação de câmeras de segurança (CFTV)",
      "Sistemas de alarme e sensores",
      "Controles de acesso",
      "Automação residencial para iluminação e segurança",
      "Vídeo porteiros e interfones",
      "Fechaduras elétricas",
    ],
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Serviços Elétricos Especializados
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Atendemos residências, prédios e empresas com agilidade, precisão e total segurança. 
              Se envolve fiação, energia ou automação, podemos fazer!
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button onClick={scrollToContact} size="lg">
              Solicitar Orçamento para Seu Projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
