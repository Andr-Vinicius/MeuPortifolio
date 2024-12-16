import { Link } from "react-router-dom"

const DefaultPage = () =>{
    return (
        <div className="flex gap-5 m-20">
            <img className="shadow-sm h-screen shadow-black rounded-full" src="/foto-perfil.jpg" alt="foto de perfil"></img>
            <div className="flex flex-col justify-center items-center">
                <p className=" p-5 text-gray-100 text-xl">Olá, bem vindo (a) ao meu singelo portifólio. 
                Me chamo Vinicius e sou um Cientista da Computação recém graduado e venho tentando me aprimorar cada vez mais como desenvolvedor, 
                com o foco maior em Font-End.</p>
                <Link to="/sobremim">
                    <button className="btn mb-10 -mt-15 hover:bg-mytheme-100 bg-mytheme-200 text-gray-100 rounded-full h-12 p-2">Saiba mais</button>
                </Link>
            </div>
        </div>
    )
}

export default DefaultPage