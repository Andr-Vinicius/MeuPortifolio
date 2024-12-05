import { Link } from "react-router-dom"

const DefaultPage = () =>{
    return (
        <div className="flex">
            <img className="shadow-md h-full shadow-black mt-16 mb-16 ml-10 rounded-full" src="/foto-perfil.jpeg" alt="foto de perfil"></img>
            <div className="flex flex-col justify-center items-center">
                <p className=" p-10 text-gray-100 text-xl">Olá, bem vindo (a) ao meu singelo portifólio. 
                Me chamo Vinicius e sou um recém graduado em Ciência da Computação e venho buscado me aprimorar cada vez mais nessa área, 
                tentando me tornar um bom desenvolvedor, seja no Front-enn ou no Back-end, sendo que estou focando mais neste primeiro atualmente.
                Sou uma pessoa meio introvertida, mas que adora conversar e conhecer novas pessoas. </p>
                <Link to="/sobremim">
                    <button className="btn mb-10 -mt-10 hover:bg-mytheme-100 bg-mytheme-200 text-gray-100 rounded-full h-12 p-2">Saiba mais</button>
                </Link>
            </div>
        </div>
    )
}

export default DefaultPage