import logo from "@/assets/logo-white.svg";
import { Monitor } from "lucide-react";

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
            {/* Logo & Description */}
            <div>
              <img src={logo} alt="Guilherme Soluções Elétricas" className="h-16 w-auto mb-4" />
              <p className="text-secondary-foreground/70 leading-relaxed">
                Especialistas em serviços elétricos residenciais e prediais com foco em 
                qualidade, segurança e satisfação do cliente.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-secondary-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#servicos" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="text-secondary-foreground/70 hover:text-primary transition-colors">
                    Sobre Nós
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

            {/* Services */}
            <div>
              <h4 className="font-bold text-secondary-foreground mb-4">Nossos Serviços</h4>
              <ul className="space-y-3">
                <li className="text-secondary-foreground/70">Instalações Elétricas</li>
                <li className="text-secondary-foreground/70">Iluminação LED</li>
                <li className="text-secondary-foreground/70">Manutenção Elétrica</li>
                <li className="text-secondary-foreground/70">Segurança Eletrônica</li>
                <li className="text-secondary-foreground/70">Automação Residencial</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-secondary-foreground/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-secondary-foreground/60 text-sm">
                © {currentYear} Guilherme Soluções Elétricas. Todos os direitos reservados.
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
