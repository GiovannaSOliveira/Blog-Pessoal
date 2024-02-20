import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-purpur text-white flex justify-center py-4">
        <div className="container flex justify-between m-3 text-lg">
          <div className="text-2xl font font-bold uppercase text-kind 
          hover:text-mustard hover:cursor-pointer">
            <Link to="/home">BLOG PESSOAL</Link>
          </div>

          <div className="flex gap-4">
            <Link
              to="/home"
              className="text-offwhite hover:text-kind hover:cursor-pointer"
            >
              Home
            </Link>
            <div className="text-offwhite hover:text-kind hover:cursor-pointer">
              Postagens
            </div>
            <div className="text-offwhite hover:text-kind hover:cursor-pointer">
              Temas
            </div>
            <div className="text-offwhite hover:text-kind hover:cursor-pointer">
              Cadastrar tema
            </div>
            <div className="text-offwhite hover:text-kind hover:cursor-pointer">
              Perfil
            </div>
            <Link
              to="/login"
              className="text-offwhite hover:text-kind hover:cursor-pointer"
            >
              Login
            </Link>
            <div className="text-offwhite hover:text-kind hover:cursor-pointer">
              Sair
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
