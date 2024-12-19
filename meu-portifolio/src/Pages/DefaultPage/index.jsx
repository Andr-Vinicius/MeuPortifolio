import { Link } from "react-router-dom"
import { TbFileCv } from "react-icons/tb"

const DefaultPage = () =>{
    return (
        <div className="flex gap-5 m-20">
            <img className="shadow-sm h-screen shadow-black rounded-full" src="/foto-perfil.jpg" alt="foto de perfil"></img>
            <div className="flex flex-col justify-center items-center">
                <p className=" p-5 text-gray-100 text-xl">Olá, bem vindo (a) ao meu singelo portifólio. 
                Me chamo Vinicius e sou um Cientista da Computação recém graduado e venho tentando me aprimorar cada vez mais como desenvolvedor, 
                com o foco maior em Font-End.</p>
                <div className="flex flex-row gap-5 mt-2 items-center justify-center">
                    <Link to="/sobremim">
                        <button className="btn -mt-15 hover:bg-mytheme-100 bg-mytheme-200 text-gray-100 rounded-full h-12 p-2">Saiba mais</button>
                    </Link>
                    <Link to="https://drive.usercontent.google.com/u/2/uc?id=1szS-KW0kejhlJAXdV3xL-ovi4VYAQfkn&export=download">
                        <TbFileCv className="flex-nowrap" size={32} style={{color: '#058'}}/>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default DefaultPage