const AboutMe = () => {
    return (
        <div className="flex flex-col gap-12 ml-5 mb-5 mt-10 p-6">
            
            <h2 className="text-2xl font-bold text-center">Quem eu sou?</h2>
            <div className="flex justify-around items-center">
                <p className="text-lg md:w-2/4">Me chamo Vinicius, tenho 23 anos e moro em São João da Boa Vista, uma pequena cidade no interior de São Paulo.
                Sou uma pessoa um pouco mais introvertida, mas que gosta de fazer novas amizades. Atualmente eu estou trabalhando como atendente no Poupatempo. 
                Meu objetivo ao construir este portifólio é, além de me apresentar, mostrar as minhas habilidades e do que eu sou capaz.</p>
                <img className="hidden md:block w-4/12 rounded-md shadow-md shadow-black" src="/sjbv.jpg" alt="São João da Boa Vista"/>
            </div>

            <h2 className="text-xl font-bold text-center">História com a computação</h2>
            <div className="flex justify-around items-center">
                <p className="text-lg md:w-2/4">Eu sempre gostei de computação, tanto que meu fiz primeiro curso de informática básica aos 10 anos
                e sempre fui meio responsável por resolver as coisas relacionadas com o computador aqui de casa. Então, meio que não via outro caminho que não fosse
                seguir nesta área. Quando terminei o ensino médio, me inscrevi pro recém criado curso de Bacharelado em Ciência da Computação aqui mesmo na minha cidade, 
                no Instituto Federal de Educação, Ciência e Tecnologia.<br/><br/> Sou muito grato por todos os conhecimentos e amizades que eu fiz pelo ao longo da minha recente
                vida academica. Um grande difencial do curso foi o conhecimento teórico adquirido. 
                coisas como Engenharia de Software, Projeto e Análise de Algoritmos, Linguagens Formais e Autômatos 
                acabam sendo exemplos de conhecimentos que vão além do costumeiro prático que vemos por ai.</p>
                <img className="hidden md:block w-4/12 rounded-md shadow-sm shadow-black" src="/ifsp.jpg" alt="Instituto Federal de São João da Boa Vista"/>
            </div>

            <h2 className="text-xl font-bold text-center">Objetivos atuais</h2>
            <div className="">
                <p className="text-lg">Acho que meu maior objetivo a curto prazo é poder ingressar em um emprego na área da computação. Desde que eu me formei
                venho aprofundando meu conhecimento com cursos da Alura e da Udemy. Tenho na lista a vontade de continuar minha carreira academica com uma pós graduação
                e também começarei em breve um curso de Inglês.</p>
            </div>

            <h2 className="text-2xl font-bold text-center">Tempo livre</h2>
            <div className="flex justify-around items-center">
                <p  className="text-lg md:w-2/4">Sou basicamente um nerd raiz, sempre gostei bastante de animes e jogos, apesar de não ter muito tempo atualmente pra ambos.
                Minha obra favorita é One Piece e sou um grande entusiasta de histórias medievais. Um lazer recente que eu adquiri é ir na academia, o fisíco complementa o mental sempre.
                Além disso, eu também amo sair com a minha namorada, e o nosso principal rolê são festas eletrônicas.</p>
                <img className="hidden md:block w-3/12 rounded-md shadow-sm shadow-black" src="/estante.jpeg" alt="Estante com mangás"/>
            </div>

            <h2 className="text-2xl font-bold text-center">Minhas habilidade</h2>
            <h3 className="text-xl list-item">Hard-Skills</h3>
            <div className="flex flex-wrap gap-5 justify-around items-center">
                <div class="avatar">
                    <div class=" ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img src="/logos/logo_JS.png" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img src="/logos/logo_HTML.png" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black  ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img src="/logos/logo_CSS.png" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img src="/logos/logo_REACT.png" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img className="bg-white" src="/logos/logo_node.jpg" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img className="bg-white" src="/logos/logo_java.png" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img className="bg-white" src="/logos/logo_SQL.jpg" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img className="bg-white" src="/logos/logo_excel.png" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img className="bg-white" src="/logos/logo_word.png" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img className="bg-white" src="/logos/logo_git.png" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img className="bg-white" src="/logos/logo_scrum.png" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img className="bg-white" src="/logos/logo_kanban.jpg" />
                    </div>
                </div>
                <div class="avatar">
                    <div class="ring-black ring-offset-base-100 w-20 rounded-full ring ring-offset-0">
                        <img className="bg-white" src="/logos/logo_c.png" />
                    </div>
                </div>
            </div>

            <h3 className="text-xl list-item">Soft-Skills: empatia, autodidata, flexibilidade, comunicativo, 
            proatividade, adaptabilidade, liderança, organização e bom trabalho em equipe.</h3>
        
        </div>
    )
}

export default AboutMe