import { Monitor, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-black mb-4">
                <span className="text-primary">LA</span>
                <span className="text-secondary-foreground"> Servicos Eletricos</span>
              </h3>
              <p className="text-secondary-foreground/70 leading-relaxed mb-4">
                Especialistas em servicos eletricos residenciais e prediais com foco em qualidade,
                seguranca e satisfacao do cliente.
              </p>
              <div className="space-y-2 text-secondary-foreground/80 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (48) 98828-7501
                </p>
                <p className="flex items-center gap-2 break-all">
                  <Mail className="w-4 h-4" />
                  leonardoaraujo65415@gmail.com
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-secondary-foreground mb-4">Links Rapidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#servicos" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Servicos
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Sobre Nos
                  </a>
                </li>
                <li>
                  <a href="#depoimentos" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <button
                    onClick={scrollToContact}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    Contato
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-secondary-foreground mb-4">Nossos Servicos</h4>
              <ul className="space-y-3">
                <li className="text-secondary-foreground/70">Instalacoes Eletricas</li>
                <li className="text-secondary-foreground/70">Iluminacao LED</li>
                <li className="text-secondary-foreground/70">Manutencao Eletrica</li>
                <li className="text-secondary-foreground/70">Seguranca Eletronica</li>
                <li className="text-secondary-foreground/70">Automacao Residencial</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-secondary-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-secondary-foreground/60 text-sm">
                Copyright {currentYear} <span className="text-primary">LA</span> Servicos Eletricos. Todos os
                direitos reservados.
              </p>
              <a
                href="https://www.bigs.design/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-secondary-foreground/60 text-sm hover:text-primary transition-colors"
              >
                <Monitor className="w-4 h-4" />
                <span>Desenvolvido por Bigs Design</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
