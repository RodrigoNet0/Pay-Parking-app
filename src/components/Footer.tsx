
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm mb-4 sm:mb-0">&copy; 2024 Rodrigo Neto. Todos os direitos reservados.</p>
          <div className="flex flex-wrap">
            <a href="#" className="text-sm mr-4 mb-2 sm:mb-0">Sobre</a>
            <a href="#" className="text-sm">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
