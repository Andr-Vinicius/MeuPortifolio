import { useState } from "react"
import emailjs from "@emailjs/browser"

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e) {
        e.preventDefault()

        if (name === '' || email === '' || message === ''){
            alert("Preencha todos os campos!")
            return
        }

        const templateParams = {
            from_name: name,
            message: message,
            email: email
        }

        emailjs.send(
            "service_5ar2bbe",
            "template_9ymkzeq",
            templateParams,
            "Nf95mQugwwoq8G1kl"
        ).then((response) => {
            console.log("Email Enviado! ", response.status, response.text)
            setName('')
            setEmail('')
            setMessage('')
        }, (err) => {
            console.log("Erro: ", err)
        })
    }

    return (
        <div className="text-center m-5">
            <h1>Contato</h1>
            <form className="flex flex-col p-5 gap-5 justify-center items-center" onSubmit={sendEmail}>
                <input className="input w-2/4" type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)}/>
                <input className="input w-2/4" type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <textarea className="textarea w-2/4" placeholder="Digite sua mensagem..." value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button className="bg-mytheme-200 rounded-full p-3">Enviar</button>
            </form>
        </div>
    )
}

export default Contact