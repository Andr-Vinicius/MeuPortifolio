import {FaInstagram, FaGithub, FaLinkedin} from "react-icons/fa"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div className=" bg-mytheme-100 text-center min-h-full p-5 shadow-sm shadow-black flex justify-center items-center gap-5">
            <h4>Desenvolvido por Vinicius.</h4>
            <Link target="_blank" to="https://www.instagram.com/vininicius01?igsh=cDViZm0xNDB3eWkx"><FaInstagram size={24}/></Link>     
            <Link target="_blank" to="https://github.com/Andr-Vinicius"><FaGithub size={24}/></Link>     
            <Link target="_blank" to="https://www.linkedin.com/in/vncsandrade01/"><FaLinkedin size={24}/></Link>         
        </div>
    )
}

export default Footer