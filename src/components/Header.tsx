import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

const whatsappUrl = "https://wa.me/5548996107803?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20ser%20atendido%21";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center">
            <img src={logo} alt="Guilherme Soluções Elétricas" className="h-14 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("servicos")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Serviços
            </button>
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              FAQ
            </button>
            <Button asChild size="lg">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                Chamar no WhatsApp
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-border bg-background">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("servicos")}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2 text-left"
              >
                Serviços
              </button>
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2 text-left"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2 text-left"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2 text-left"
              >
                FAQ
              </button>
              <Button asChild className="mt-2">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
