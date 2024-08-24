document.addEventListener('DOMContentLoaded', () => {
    // Código para corações
    const heartContainer = document.getElementById('heart-container');
    const numberOfHearts = 30;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '❤️';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = Math.random() * 5 + 5 + 's';
        heart.style.fontSize = Math.random() * 20 + 20 + 'px';
        heartContainer.appendChild(heart);
    }

    // Código para estrelas
    const starContainer = document.createElement('div');
    starContainer.className = 'star-container';
    document.body.appendChild(starContainer);

    function createStar() {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.animationDuration = Math.random() * 10 + 10 + 's';
        star.style.fontSize = Math.random() * 20 + 20 + 'px';
        starContainer.appendChild(star);
    }

    for (let i = 0; i < 30; i++) {
        createStar();
    }

    // Código para botões e setas
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const additionalContent = document.getElementById('additionalContent');
    const arrows = [
        document.getElementById('arrow1'),
        document.getElementById('arrow2'),
        document.getElementById('arrow3'),
        document.getElementById('arrow4'),
        document.getElementById('arrow5'),
        document.getElementById('arrow6')
    ];
    const contents = [
        document.getElementById('arrow1Content'),
        document.getElementById('arrow2Content'),
        document.getElementById('arrow3Content'),
        document.getElementById('arrow4Content'),
        document.getElementById('arrow5Content'),
        document.getElementById('arrow6Content'),
        document.getElementById('finalMessageContent')
    ];

    let currentArrowIndex = 0;

    noButton.addEventListener('click', () => {
        additionalContent.classList.add('hidden');
        moveButton();
    });

    yesButton.addEventListener('click', () => {
        additionalContent.classList.remove('hidden');
        document.getElementById('firstMessage').classList.add('hidden');
        document.getElementById('firstArrow').classList.remove('hidden');
        additionalContent.scrollIntoView({ behavior: 'smooth' });

        document.getElementById('heart-container').innerHTML = '❤️❤️❤️❤️';

        // Mostra a próxima seta de mensagem
        const showNextArrow = () => {
            if (currentArrowIndex < arrows.length) {
                arrows[currentArrowIndex].classList.remove('hidden');
                currentArrowIndex++;
            }
        };

        showNextArrow();

        arrows.forEach((arrow, index) => {
            arrow.addEventListener('click', () => {
                if (index === currentArrowIndex - 1) {
                    contents[index].classList.remove('hidden');
                    arrow.classList.add('hidden');
                    if (currentArrowIndex < arrows.length) {
                        showNextArrow();
                    }
                }
            });
        });
    });

    // Função para mover o botão "Não"
    function moveButton() {
        const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
        const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

        noButton.style.position = 'absolute';
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    }

    // Inicializa o índice de setas e setas de mensagem
    arrows[0].classList.remove('hidden'); // Exibe apenas a primeira seta ao iniciar
});

