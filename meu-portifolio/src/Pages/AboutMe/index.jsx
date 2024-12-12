const AboutMe = () => {
    return (
        <div className="flex flex-col gap-12 ml-5 mb-5 p-6">
            
            <h2 className="text-2xl font-bold text-center">Quem eu sou?</h2>
            <div className="flex justify-around items-center">
                <p className="text-lg w-2/4">Bem, eu me chamo Vinicius, tenho 23 anos anos e moro em São João da Boa Vista, uma pequena cidade no interior de São Paulo.
                Sou uma pessoa mais introvertida, mas que gosta e se esforça para sempre fazer novas amizades, construi esse portifólio para me apresentar e mostrar do que 
                eu sou capaz e minhas habilidades.</p>
                <img className="w-4/12 rounded-md shadow-md shadow-black" src="/sjbv.jpg" alt="São João da Boa Vista"/>
            </div>

            <h2 className="text-xl font-bold text-center">História com a computação</h2>
            <div className="flex justify-around items-center">
                <p className="text-lg w-2/4">Eu sempre gostei de computação, tanto que meu primeiro curso, de informática básica, eu tinha uns 10 anos, 
                e sempre fui meio responsável por resolver as coisas relacionadas com o computador aqui em casa. Então, meio que não via outro caminho que não fosse
                seguir um caminho nesta área. Quando terminei o ensino médio, me inscrevi pro recém criado curso de Bacharelado em Ciência da Computação aqui mesmo na minha cidade.
                Comecei então a faculdade em 2019, e sou muito grato por todos os conhecimentos e amizades que eu fiz pelo caminho. Creio que o mais essencial nesta faculdade foi o conhecimento 
                teórico adquirido, coisas como Engenharia de Software, Linguagens Formais e Automatos, acabam desenvolvendo a gente como programadores que vão além apenas do básico do prático.
                Desde que me formei, venho buscando me aprimorar na área, focando atualmente em JavaScript e React.
                </p>
                <img className="w-4/12 rounded-md shadow-sm shadow-black" src="/ifsp.jpg" alt="Instituto Federal de São João da Boa Vista"/>
            </div>

            
            <h2 className="text-2xl font-bold text-center">Tempo livre</h2>
            <p className="text-sm">Sou um nerd raiz, gosto bastante de animes e jogar, apesar de não ter muito tempo atualmente</p>
            <img className="w-3/12 rounded-md shadow-sm shadow-black" src="/estante.jpeg" alt="Estante com mangás"/>

            <h2 className="text-2xl font-bold text-center">Minhas habilidade</h2>
            <p>Definir soft-skills e hard-skills</p>
            <div class="avatar">
            <div class="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
            </div>
        </div>
    )
}

export default AboutMe