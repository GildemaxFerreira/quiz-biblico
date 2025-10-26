// --- 1. Definição das Perguntas ---
// Você pode adicionar ou alterar perguntas aqui
const questions = [
    {
        question: "Qual o nome e a idade da pessoa mais velha mencionada na Bíblia?",
        answers: [
            { text: "Enos", correct: false },
            { text: "Noé", correct: false },
            { text: "Matusalém", correct: true },
            { text: "Rainha Ester", correct: false }
        ]
    },
    {
        question: "Qual desses não teve o seu nome mudado na Bíblia?",
        answers: [
            { text: "Sara", correct: false },
            { text: "Abraão", correct: false },
            { text: "Jacó", correct: false },
            { text: "Davi", correct: true }
        ]
    },
    {
        question: "Qual animal falou com Balaão?",
        answers: [
            { text: "Jumenta", correct: true },
            { text: "Camelo", correct: false },
            { text: "Cordeiro", correct: false },
            { text: "Pomba", correct: false }
        ]
    },
    {
        question: "Enquanto pastor de ovelhas, Davi protegeu seu rebanho de dois animais perigosos. Quais?",
        answers: [
            { text: "Serpente e Dromedário", correct: false },
            { text: "Urso e Leão", correct: true },
            { text: "Cobra e Lobo", correct: false },
            { text: "Urso e escorpião", correct: false }
        ]
    },
    {
        question: "Quando bebê, como Moisés foi salvo do decreto infanticida do Faraó?",
        answers: [
            { text: "Foi Levado às pressas para fora do Egito", correct: false },
            { text: "Foi escondido dentro de uma caverna", correct: false },
            { text: "Foi colocado num cesto e lançado no rio", correct: true },
            { text: "Foi levado ao templo para servir a Deus", correct: false }
        ]
    },
    {
        question: "Quantos eram os discípulos mais próximos de Jesus?",
        answers: [
            { text: "10", correct: false },
            { text: "7", correct: false },
            { text: "5", correct: false },
            { text: "12", correct: true }
        ]
    },
    {
        question: "Complete o versículo: Porque Deus amou o mundo de tal maneira...?",
        answers: [
            { text: "que deu o seu único filho, para que todo o que nele crer não pereça, mais tenha a vida eterna.", correct: true },
            { text: "que enviou seu filho ao mundo, para que o mundo fosse salvo por ele.", correct: false },
            { text: "ao ponto de sermos chamados filhos seus, e de fato somos.", correct: false },
            { text: "que veio para o que era seu, mas o seus não o receberam.", correct: false }
        ]
    },
    {
        question: "Qual o nome da ilha onde João escreveu o livro de Apocalipse?",
        answers: [
            { text: "Ilha de Creta", correct: false },
            { text: "Ilha de Malta", correct: false },
            { text: "Ilha de Patmos", correct: true },
            { text: "Ilha de Pérgamo", correct: false }
        ]
    },
    {
        question: "Qual o nome do Jardim plantado por Deus para o 1º casal criado?",
        answers: [
            { text: "Jardim do Getsêmani", correct: false },
            { text: "Rosa de Sarom", correct: false },
            { text: "Jardim do Éden", correct: true },
            { text: "Paraíso", correct: false }
        ]
    },
    {
        question: "Em quais livros da Bíblia é narrada a historia do nascimento de Jesus?",
        answers: [
            { text: "Gênesis e Salmos", correct: false },
            { text: "Mateus e Marcos", correct: false },
            { text: "Hebreus e Apocalipse", correct: false },
            { text: "Mateus e Lucas", correct: true }
        ]
    },
    {
        question: "Quantos casais humanos entraram na arca de Noé?",
        answers: [
            { text: "4 casais", correct: true },
            { text: "1 casal", correct: false },
            { text: "6 casais", correct: false },
            { text: "3 casais", correct: false }
        ]
    },
    {
        question: "Qual o nome da cidade fundada por Caim, depois que saiu da presença de Deus?",
        answers: [
            { text: "Sodoma", correct: false },
            { text: "Gomora", correct: false },
            { text: "Enoque", correct: true },
            { text: "Canaã", correct: false }
        ]
    },
    {
        question: "Deus mandou que Abraão olhasse para o quê, quando lhe fez uma promessa?",
        answers: [
            { text: "Para o arco-íris no céu, símbolo da aliança com Abraão", correct: false },
            { text: "Para a areia do mar, para que contasse os grãos de areia, se pudesse", correct: false },
            { text: "Para as estrelas do céu, para que as contasse, se pudesse", correct: true },
            { text: "Para a floresta da terra prometida, para contar as árvores frutíferas", correct: false }
        ]
    },
    {
        question: "Judas traiu a Jesus por qual valor?",
        answers: [
            { text: "30 moedas de prata", correct: true },
            { text: "100 moedas de ouro", correct: false },
            { text: "50 moedas de prata", correct: false },
            { text: "30 moedas de ouro", correct: false }
        ]
    },
    {
        question: "Quem eram os dois irmãos de Moisés?",
        answers: [
            { text: "Esaú e Jacó", correct: false },
            { text: "Miriã e Arão", correct: true },
            { text: "Josué e Calebe", correct: false },
            { text: "Priscila e Áquila", correct: false }
        ]
    },
    {
        question: "Quem foi o juiz hebreu que Dalila seduziu para entregar ao exército filisteu?",
        answers: [
            { text: "Sansão", correct: true },
            { text: "Salomão", correct: false },
            { text: "Samuel", correct: false },
            { text: "Saul", correct: false }
        ]
    },
    {
        question: "A Bíblia é composta por quantos livros?",
        answers: [
            { text: "88 livros", correct: false },
            { text: "37 livros", correct: false },
            { text: "66 livros", correct: true },
            { text: "100 livros", correct: false }
        ]
    },
    {
        question: "A Bíblia é dividida em:?",
        answers: [
            { text: "3 partes: Pentateuco, livros históricos e Evangelhos", correct: false },
            { text: "2 partes: Antigo Testamento e Novo Testamento", correct: true },
            { text: "3 partes: Velho Testamento, Salmos e Novo Testamento", correct: false },
            { text: "2 partes: Livros da Lei e Apocalipse", correct: false }
        ]
    },
    {
        question: "Qual é o menor versículo da Bíblia?",
        answers: [
            { text: "João 11:35", correct: false },
            { text: "Ester 8:9", correct: false },
            { text: "Êxodo 20:13", correct: false },
            { text: "Jó 3:2", correct: true }
        ]
    },
    {
        question: "Qual o nome da cidade onde Jesus nasceu?",
        answers: [
            { text: "Nazaré", correct: false },
            { text: "Belém", correct: true },
            { text: "Jerusalém", correct: false },
            { text: "Galiléia", correct: false }
        ]
    },
];

// --- 2. Referências aos Elementos do DOM ---
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const quizElement = document.getElementById('quiz');
const resultsElement = document.getElementById('results');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

// --- 3. Variáveis de Estado do Quiz ---
let currentQuestionIndex = 0;
let score = 0;

// --- 4. Funções Principais ---

/**
 * Inicia ou reinicia o quiz
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    
    // Esconde a tela de resultados e mostra a tela de quiz
    resultsElement.classList.add('hide');
    quizElement.classList.remove('hide');
    nextButton.classList.add('hide'); // Esconde o botão "Próximo" inicialmente
    
    showQuestion();
}

/**
 * Exibe a pergunta atual e suas opções de resposta
 */
function showQuestion() {
    // 1. Limpa o estado anterior
    resetState();
    
    // 2. Pega a pergunta atual
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    // 3. Cria os botões de resposta
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        
        // Armazena o valor 'correto' no próprio botão
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        
        // Adiciona o evento de clique para selecionar a resposta
        button.addEventListener('click', selectAnswer);
        
        answerButtonsElement.appendChild(button);
    });
}

/**
 * Limpa os botões de resposta anteriores
 */
function resetState() {
    // Remove todos os botões de resposta filhos do container
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
    // Esconde o botão "Próximo"
    nextButton.classList.add('hide');
}

/**
 * Chamada quando o usuário clica em uma resposta
 * @param {Event} e O evento de clique
 */
function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === 'true';

    // 1. Atualiza a pontuação
    if (isCorrect) {
        score++;
    }

    // 2. Feedback visual: Pinta os botões de verde/vermelho
    Array.from(answerButtonsElement.children).forEach(button => {
        // Marca a resposta correta em verde
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            // Se o usuário clicou na errada, marca ela em vermelho
            if (button === selectedButton) {
                button.classList.add('incorrect');
            }
        }
        // 3. Desabilita todos os botões
        button.disabled = true;
    });

    // 4. Mostra o botão "Próximo"
    nextButton.classList.remove('hide');
}

/**
 * Mostra a tela de resultados finais
 */
function showResults() {
    // Esconde o quiz e mostra os resultados
    quizElement.classList.add('hide');
    resultsElement.classList.remove('hide');
    
    // Exibe a pontuação final
    scoreElement.innerText = `Você acertou ${score} de ${questions.length} perguntas!`;
}

/**
 * Chamada quando o botão "Próximo" é clicado
 */
function handleNextButton() {
    currentQuestionIndex++;
    
    // Verifica se ainda há perguntas
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Se for a última pergunta, mostra os resultados
        showResults();
    }
}

// --- 5. Adicionando Event Listeners ---

// O que fazer quando o botão "Próximo" for clicado
nextButton.addEventListener('click', () => {
    // Se o quiz não acabou, vá para a próxima pergunta
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
});

// O que fazer quando o botão "Recomeçar" for clicado
restartButton.addEventListener('click', startQuiz);


// --- 6. Início do Script ---
// Começa o quiz assim que a página carrega
startQuiz();