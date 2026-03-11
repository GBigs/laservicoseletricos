import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Você atende emergências elétricas?",
    answer:
      "Sim! Oferecemos atendimento rápido e seguro para emergências e reparos imediatos. Entre em contato pelo nosso formulário ou telefone que responderemos o mais rápido possível.",
  },
  {
    question: "Trabalha com iluminação LED e sensores inteligentes?",
    answer:
      "Sim! Oferecemos soluções completas de iluminação com tecnologia moderna e economia de energia, incluindo fitas LED, sensores de presença, fotocélulas e automação de ambientes.",
  },
  {
    question: "Oferece orçamento gratuito?",
    answer:
      "Claro! Faça seu orçamento sem compromisso agora mesmo. Basta preencher o formulário de contato abaixo que entraremos em contato para entender sua necessidade e apresentar a melhor solução.",
  },
  {
    question: "Qual a área de atendimento?",
    answer:
      "Atendemos residências, prédios e empresas na região. Entre em contato para verificar se atendemos sua localidade.",
  },
  {
    question: "Vocês emitem nota fiscal?",
    answer: "Sim, trabalhamos de forma totalmente regularizada e emitimos nota fiscal para todos os nossos serviços.",
  },
];

const FAQ = () => {
  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Perguntas Frequentes</h2>
            <p className="text-lg text-muted-foreground">Tire suas dúvidas sobre nossos serviços</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 data-[state=open]:shadow-md transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline py-5 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Não encontrou sua dúvida? Entre em contato!</p>
            <Button onClick={scrollToContact} size="lg">
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
