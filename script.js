const guitarras = {
    "strato": {
        nome: "Stratocaster",
        preco: "R$ 3.000,00",
        descricao: "A guitarra mais versátil do mundo.",
        imagem: "img/strato.jpg"
    },

    "tele": {
        nome: "Telecaster",
        preco: "R$ 4.500,00",
        descricao: "O som estalado preferido do blues.",
        imagem: "img/tele.jpg"
    },

    "sg": {
        nome: "SG",
        preco: "R$ 5.000,00",
        descricao: "Famosa nas mãos de Angus Young (AC/DC). Uma guitarra leve, com médios potentes e aquele visual 'chifrudo' icônico que respira Rock n' Roll clássico e solos cortantes.",
        imagem: "img/sg.jpg"
    },

    "warlock": {
        nome: "B.C. Rich Warlock",
        preco: "R$ 5.500,00",
        descricao: "O pesadelo dos vizinhos! Com um design agressivo e pontiagudo, é a escolha definitiva para quem toca Metal extremo. Possui captadores de alto ganho para distorções pesadas.",
        imagem: "img/warlock.jpg"
    },

    "flyingv": {
        nome: "Flying V Heritage",
        preco: "R$ 4.500,00",
        descricao: "Lançada originalmente em 1958, a Flying V é um ícone de estilo. Seu formato oferece um acesso incrível às casas mais agudas do braço, sendo perfeita para solos épicos e performances de palco.",
        imagem: "img/flyingv.jpg"
    },
    
    "ibanez": {
        nome: "Ibanez RG Series",
        preco: "R$ 3.500,00",
        descricao: "A máquina de velocidade. Conhecida pelos braços 'Wizard' super finos e confortáveis, é a favorita dos guitarristas técnicos que amam fritar no braço com precisão e clareza.",
        imagem: "img/ibanez.jpg"
    },
    
};

// Pegar o id com o nome da guitarra
const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get('id');

// Procura guitarra específica
const dados = guitarras[produtoId];

// Se encontrar, preenche o HTML
if (dados) {
    // Procura os elementos por meio dos ids e troca o conteúdo
    document.getElementById('titulo').innerText = dados.nome;
    document.getElementById('preco').innerText = dados.preco;
    document.getElementById('descricao').innerText = dados.descricao;
    document.getElementById('imagem-produto').src = dados.imagem;
    document.getElementById('imagem-produto').alt = dados.nome;
} else {
    // Caso id for inexistente
    console.error("Produto não encontrado!");
}