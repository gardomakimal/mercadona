import React from "react";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

const Header: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm">
      {/* Left section: Logo */}
      <div className="flex items-center space-x-2 w-1/3">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>

      {/* Middle section: Language Switcher */}
      <div className="flex justify-center flex-grow space-x-2">
        <Button
          variant={i18n.language === 'en' ? 'default' : 'outline'}
          onClick={() => changeLanguage('en')}
          className="px-3 py-1 text-sm"
        >
          EN
        </Button>
        <Button
          variant={i18n.language === 'es' ? 'default' : 'outline'}
          onClick={() => changeLanguage('es')}
          className="px-3 py-1 text-sm"
        >
          ES
        </Button>
      </div>

      {/* Right section: Menu icon */}
      <div className="flex items-center justify-end w-1/3">
        <Menu className="h-6 w-6 text-gray-600 cursor-default" />
      </div>
    </header>
  );
};

export default Header;