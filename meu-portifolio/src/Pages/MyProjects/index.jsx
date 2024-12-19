import {Link} from "react-router-dom"

const MyProjects = () => {
    return (
        <div className="mb-5">
            <h2 className="text-center m-5 text-lg">Abaixo você pode conferir os meus projetos</h2>
            <div className="flex flex-wrap mt-10 mb-10">

                <div class="card bg-mytheme-200 w-80 shadow-xl m-5">
                    <figure>
                    <Link target="_blank" to="https://github.com/Andr-Vinicius/ProjetoOmnimed">
                        <img className="cursor-pointer" src="/banner_omnimed.jpg" alt="Omnimed" />
                    </Link>
                    </figure>
                <div class="card-body">
                <h2 class="card-title">
                    Omnimed
                </h2>
                <p>Sistema de telemedicina</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">PHP</div>
                    <div class="badge badge-outline">JavaScript</div>
                </div>
                </div>
                </div>
                
                <div class="card bg-mytheme-200 w-80 shadow-xl m-5">
                    <figure>
                    <Link target="_blank" to="https://github.com/Andr-Vinicius/ProjetoOmnimed">
                        <img className="cursor-pointer" src="/banner_agenda.jpg" alt="Omnimed" />
                    </Link>
                    </figure>
                <div class="card-body">
                <h2 class="card-title">
                    Agenda
                </h2>
                <p>Um projeto de agenda</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">PHP</div>
                    <div class="badge badge-outline">JavaScript</div>
                </div>
                </div>
                </div>

                <div class="card bg-mytheme-200 w-80 shadow-xl m-5">
                    <figure>
                    <Link target="_blank" to="https://github.com/Andr-Vinicius/ProjetoOmnimed">
                        <img className="cursor-pointer" src="/banner_apifilmes.png" alt="Omnimed" />
                    </Link>
                    </figure>
                <div class="card-body">
                <h2 class="card-title">
                    API de filmes
                </h2>
                <p>Uma listagem de filmes</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">PHP</div>
                    <div class="badge badge-outline">JavaScript</div>
                </div>
                </div>
                </div>

                <div class="card bg-mytheme-200 w-80 shadow-xl m-5">
                    <figure>
                    <Link target="_blank" to="https://github.com/Andr-Vinicius/TCC">
                        <img className="cursor-pointer" src="/projetos/banner_TCC.png" alt="Meu TCC" />
                    </Link>
                    </figure>
                <div class="card-body">
                <h2 class="card-title">
                    TCC
                </h2>
                <p>Projeto de conclusão de curso</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Python</div>
                </div>
                </div>
                </div>
                <div class="card bg-mytheme-200 w-80 shadow-xl m-5">
                    <figure>
                    <Link target="_blank" to="https://github.com/Andr-Vinicius/SnakeGame">
                        <img className="cursor-pointer" src="/projetos/banner_snakegame.png" alt="Jogo da Cobrinha" />
                    </Link>
                    </figure>
                <div class="card-body">
                <h2 class="card-title">
                    Jogo da Cobrinha
                </h2>
                <p></p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">JavaScript</div>
                </div>
                </div>
                </div>

                <div class="card bg-mytheme-200 w-80 shadow-xl m-5">
                    <figure>
                    <Link target="_blank" to="https://github.com/Andr-Vinicius/PaintGenerico">
                        <img className="cursor-pointer" src="/projetos/banner_paint.jpg" alt="Paint Genérico" />
                    </Link>
                    </figure>
                <div class="card-body">
                <h2 class="card-title">
                    Paint Genérico
                </h2>
                <p>Projeto focado em Java</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Java</div>
                </div>
                </div>
                </div>

                <div class="card bg-mytheme-200 w-80 shadow-xl m-5">
                    <figure>
                    <Link target="_blank" to="https://github.com/Andr-Vinicius/Lista_Tarefas">
                        <img className="cursor-pointer" src="/projetos/banner-tarefas.jpg" alt="Lista de Tarefas" />
                    </Link>
                    </figure>
                <div class="card-body">
                <h2 class="card-title">
                    Lista de Tarefas
                </h2>
                <p>Uma lista de tarefas básica com um CRUD pelo localStorage</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">React</div>
                </div>
                </div>
                </div>

                <div class="card bg-mytheme-200 w-80 shadow-xl m-5">
                    <figure>
                    <Link target="_blank" to="https://github.com/Andr-Vinicius/Lista_Tarefas">
                        <img className="cursor-pointer" src="/projetos/banner_organo.png" alt="Organograma" />
                    </Link>
                    </figure>
                <div class="card-body">
                <h2 class="card-title">
                    Organograma
                </h2>
                <p>Uma lista de tarefas básica com um CRUD pelo localStorage</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">React</div>
                </div>
                </div>
                </div>

                <div class="card bg-mytheme-200 w-80 shadow-xl m-5">
                    <figure>
                    <Link target="_blank" to="https://github.com/Andr-Vinicius/Lista_Tarefas">
                        <img className="cursor-pointer" src="/projetos/banner_newsletter.png" alt="Organograma" />
                    </Link>
                    </figure>
                <div class="card-body">
                <h2 class="card-title">
                    Newsletter
                </h2>
                <p>Uma lista de tarefas básica com um CRUD pelo localStorage</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">React</div>
                </div>
                </div>
                </div>
            </div>
            {/* Card de projeto*/}
            


        </div>
    )
}

export default MyProjects