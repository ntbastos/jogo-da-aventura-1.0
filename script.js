// Obter os elementos de texto e botões
const storyElement = document.getElementById("story");
const choice1Button = document.getElementById("choice1");
const choice2Button = document.getElementById("choice2");

// Função para controlar a escolha do jogador
function makeChoice(choice) {
    if (choice === 1) {
        storyElement.textContent = "Você escolheu o caminho da esquerda e encontrou um lago tranquilo. O que deseja fazer agora?";
        choice1Button.textContent = "Nadar no lago";
        choice2Button.textContent = "Caminhar pela margem";
        
        choice1Button.onclick = () => {
            storyElement.textContent = "Você nadou no lago e encontrou um baú de tesouro. Parabéns, você ganhou!";
            hideButtons();
        };
        
        choice2Button.onclick = () => {
            storyElement.textContent = "Você caminhou pela margem e foi atacado por um urso! Você perdeu!";
            hideButtons();
        };
    } else if (choice === 2) {
        storyElement.textContent = "Você escolheu o caminho da direita e entrou em uma caverna escura. O que deseja fazer agora?";
        choice1Button.textContent = "Acender uma tocha";
        choice2Button.textContent = "Seguir no escuro";
        
        choice1Button.onclick = () => {
            storyElement.textContent = "Com a tocha acesa, você encontrou um mapa secreto! Parabéns, você descobriu uma passagem!";
            hideButtons();
        };
        
        choice2Button.onclick = () => {
            storyElement.textContent = "Você tropeçou no escuro e caiu em um buraco. Você perdeu!";
            hideButtons();
        };
    }
}

// Função para esconder os botões após o fim do jogo
function hideButtons() {
    choice1Button.style.display = 'none';
    choice2Button.style.display = 'none';
}
