import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} AgriTech Solutions. Minden jog fenntartva.</p>
        <p>
          <a href="/privacy" className="text-white mx-2">Adatvédelmi irányelvek</a> | 
          <a href="/terms" className="text-white mx-2">Felhasználási feltételek</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
