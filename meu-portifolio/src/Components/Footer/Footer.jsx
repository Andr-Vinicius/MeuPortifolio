import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className=" bg-mytheme-100 text-center w-full p-5 mb-0 shadow-sm shadow-black flex justify-center items-center gap-5">
            <h4>Desenvolvido por Vinicius.</h4>
            <Link target="_blank" to=""><FaInstagram size={28}/></Link>     
            <Link target="_blank" to="https://github.com/Andr-Vinicius"><FaGithub size={28}/></Link>     
            <Link target="_blank" to="https://www.linkedin.com/in/vncsandrade01/"><FaLinkedin size={28}/></Link>         
        </div>
    )
}

export default Footer