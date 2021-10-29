// GOAL RESPOSTA CERTA - eu clico na resposta certa e parece-me HTML e CSS a dizer "Correto"

// GOAL RESPOSTAS ERRADAS - eu clico numa resposta errada e parece-me HTML e CSS a dizer "Oops errada" + "algo específico da opção clickada" + "Tenta outra vez"


// GOAL RESPOSTA CERTA 

// 1. tenho que ir buscar o botão com a resposta correta
const respostaCerta = document.getElementById ('resposta-certa');

// 1.2 tenho que ir buscar o <p> para onde eu quero injetar conteúdo
const explicacao = document.getElementById('explicacao');

// 2. tenho que por o elemento resposta certa a escitar o meu 'click'
respostaCerta.addEventListener('click', (event) => {
	explicacao.innerHTML = "<strong> Correto!! </strong>"
})

// GOAL RESPOSTAS ERRADAS 

// 1. tenho que ir buscar todas as respostas com a classe resposta-errada
const respostasErradas = document.querySelectorAll('.resposta-errada');

// 2. Iterar por cada resposta errada
respostasErradas.forEach((resposta) => {
	// 3. JS Estar à escuta do click em cada resposta 
	resposta.addEventListener('click', (event) => {
		let explicacaoConteudo = "<strong>Oops, errado ...</strong>"

	// 4 . Distinguir que resposta é, se é HTML, CSS e Ruby
	if(resposta.id === "resposta-html") {
		explicacaoConteudo += " HTML permite-nos dar estrutura e conteúdo à nossa página. "
	} else if (resposta.id === "resposta-css") {
		explicacaoConteudo += " CSS permite-nos dar estilo à nossa página. "
	} else {
		explicacaoConteudo += " Ruby é uma das várias linguagens que pode ser utilizada para backend. "
	}

	explicacaoConteudo += " Tenta outra vez! "

		explicacao.innerHTML = explicacaoConteudo;
	})
})