import { Link } from "react-router-dom"


const Header = () => {
    return (
        <header className="bg-mytheme-100 grid grid-cols-2 gap-5 p-2 mb-10 shadow-sm shadow-mytheme-200">
            <div className="ml-10 p-2 flex justify-start items-center gap-5">
                <img className="w-24" src="/computador.jpg" alt="Imagem de um computador"></img>
                <h2 className=" text-gray-100 text-2xl font-bold">Meu portifólio</h2>
            </div>
            <nav className="mr-5 flex justify-around items-center">
                <Link className="link-menu" to="/">Inicio</Link>
                <Link className="link-menu" to="/sobremim">Sobre mim</Link>
                <Link className="link-menu" to="/projetos">Meus projetos</Link>
                <Link className="link-menu" to="/contato">Contato</Link>
            </nav>
        </header>
    )
}

export default Header