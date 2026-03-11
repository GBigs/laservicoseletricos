import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Ana M.",
    text: "Serviço impecável! O Guilherme fez toda a instalação elétrica da minha casa em tempo recorde. Recomendo demais!",
    rating: 5,
    serviceType: "Instalação Residencial",
    clientType: "Cliente Residencial",
  },
  {
    name: "Carlos S.",
    text: "Profissional no que faz! Resolveram nosso problema de iluminação externa e automatizaram sensores de presença em todos os ambientes.",
    rating: 5,
    serviceType: "Automação",
    clientType: "Dono de Empresa",
  },
  {
    name: "Márcia L.",
    text: "Precisava urgente de manutenção no quadro elétrico do prédio. Atendimento rápido e trabalho muito bem feito!",
    rating: 5,
    serviceType: "Manutenção Predial",
    clientType: "Síndica de Prédio",
  },
  {
    name: "Roberto F.",
    text: "Instalaram todo o sistema de câmeras e alarme da minha empresa. Equipe profissional e preço justo.",
    rating: 5,
    serviceType: "Segurança Eletrônica",
    clientType: "Dono de Empresa",
  },
  {
    name: "Juliana P.",
    text: "Trouxeram soluções que eu nem sabia que existiam. A iluminação LED ficou incrível e ainda economizo energia!",
    rating: 5,
    serviceType: "Iluminação LED",
    clientType: "Cliente Residencial",
  },
  {
    name: "Fernando G.",
    text: "Excelente experiência do início ao fim. Orçamento transparente e entrega dentro do prazo combinado.",
    rating: 5,
    serviceType: "Instalação Elétrica",
    clientType: "Cliente Residencial",
  },
  {
    name: "Patrícia R.",
    text: "Contratei para fazer a parte elétrica das áreas comuns do condomínio. Trabalho limpo e organizado!",
    rating: 5,
    serviceType: "Manutenção Predial",
    clientType: "Síndica de Prédio",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Depoimentos de Clientes Satisfeitos
            </h2>
            <p className="text-lg text-secondary-foreground/70">
              Veja o que nossos clientes dizem sobre nosso trabalho
            </p>
          </div>

          {/* Testimonials Carousel */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-background rounded-2xl p-8 shadow-lg relative h-full">
                    <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
                    
                    {/* Service Tag */}
                    <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      {testimonial.serviceType}
                    </span>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-foreground text-lg mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.clientType}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-background border-border hover:bg-primary hover:text-primary-foreground" />
            <CarouselNext className="hidden md:flex -right-12 bg-background border-border hover:bg-primary hover:text-primary-foreground" />
            
            {/* Mobile Navigation */}
            <div className="flex justify-center gap-4 mt-8 md:hidden">
              <CarouselPrevious className="static translate-y-0 bg-background border-border hover:bg-primary hover:text-primary-foreground" />
              <CarouselNext className="static translate-y-0 bg-background border-border hover:bg-primary hover:text-primary-foreground" />
            </div>
          </Carousel>

          {/* Extra CTA */}
          <div className="text-center mt-12">
            <p className="text-secondary-foreground/80 text-lg">
              Adoraríamos adicionar o seu depoimento também!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
