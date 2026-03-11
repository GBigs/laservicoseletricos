import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Zap, Phone, Mail } from "lucide-react";

const PHONE_TEXT = "(48) 98828-7501";
const EMAIL_TEXT = "leonardoaraujo65415@gmail.com";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensagem enviada com sucesso!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Garanta sua Solucao Eletrica!</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Preencha o formulario ao lado e receba seu orcamento sem compromisso.
                Nossa equipe entrara em contato o mais rapido possivel.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Telefone / WhatsApp</p>
                    <p className="text-muted-foreground">{PHONE_TEXT}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">E-mail</p>
                    <p className="text-muted-foreground break-all">{EMAIL_TEXT}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Atendimento rapido</p>
                    <p className="text-muted-foreground">Profissional e eficiente</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-background rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-8 h-8 text-primary" />
                  <span className="font-bold text-foreground text-lg">Qualidade Garantida</span>
                </div>
                <p className="text-muted-foreground">
                  Trabalhamos com materiais de primeira linha e seguimos todas as normas
                  tecnicas de seguranca para sua tranquilidade.
                </p>
              </div>
            </div>

            <div className="bg-background rounded-3xl p-8 md:p-10 shadow-xl border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Solicite seu Orcamento</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nome completo *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    E-mail *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefone / WhatsApp *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Descreva o servico que voce precisa..."
                    rows={4}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="xl" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      Enviar Solicitacao
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">Orcamento 100% gratuito e sem compromisso</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
