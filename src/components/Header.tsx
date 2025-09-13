import React from "react";
import { Menu } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm">
      {/* Left section: Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>

      {/* Right section: Menu icon */}
      <div className="flex items-center justify-end">
        <Menu className="h-6 w-6 text-gray-600 cursor-default" />
      </div>
    </header>
  );
};

export default Header;