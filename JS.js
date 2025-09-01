        // Dados do quiz com caminhos para imagens locais
        const quizData = [
            {
                imageUrl: "gif/goku.gif", 
                question: "Qual é o nome deste anime?",
                options: ["One Piece", "Naruto", "Bleach", "Dragon Ball"],
                correct: 3
            },
             {
                imageUrl: "gif/naruto.gif", 
                question: "Qual é o nome deste anime?",
                options: ["One Piece", "Naruto", "Bleach", "Dragon Ball"],
                correct: 1
            },
         {
                imageUrl: "gif/luffy.gif",
                question: "Qual é o nome deste anime?",
                options: ["Fairy Tail", "One Piece", "Black Clover", "My Hero Academia"],
                correct: 1
            },
                        {
                imageUrl: "gif/ichigo.gif",
                question: "Qual é o nome deste anime?",
                options: ["Bleach", "Jujutsu Kaisen", "Demon Slayer", "Fire Force"],
                correct: 0
            },
            {
                imageUrl: "gif/tanjero.gif",
                question: "Qual é o nome deste anime?",
                options: ["Jujutsu Kaisen", "Demon Slayer", "Chainsaw Man", "Hell's Paradise"],
                correct: 1
            },
            {
                imageUrl: "gif/midorya.gif",
                question: "Qual é o nome deste anime?",
                options: ["One Punch Man", "My Hero Academia", "Tiger & Bunny", "Mob Psycho 100"],
                correct: 1
            },
            {
                imageUrl: "gif/gon.gif",
                question: "Qual é o nome deste anime?",
                options: ["Yu Yu Hakusho", "Hunter x Hunter", "JoJo's Bizarre Adventure", "Bleach"],
                correct: 1
            },
            {
                imageUrl: "gif/death.gif",
                question: "Qual é o nome deste anime?",
                options: ["Death Note", "Code Geass", "Monster", "Psycho-Pass"],
                correct: 0
            },
            {
                imageUrl: "gif/jujutsu.gif",
                question: "Qual é o nome deste anime?",
                options: ["Bleach", "Jujutsu Kaisen", "Demon Slayer", "Fire Force"],
                correct: 1
            },
            {
                imageUrl: "gif/saitama.gif",
                question: "Qual é o nome deste anime?",
                options: ["Dragon Ball Z", "One Punch Man", "Naruto", "Fist of the North Star"],
                correct: 1
            },
            {
                imageUrl: "gif/meliodas.gif",
                question: "Qual é o nome deste anime?",
                options: ["Bleach", "Nanatsu no Taizu", "Soul Eater", "Blue Exorcist"],
                correct: 1
            },
             {
                imageUrl: "gif/Itachi.gif",
                question: "Qual é o nome deste Personagem?",
                options: ["Itachi Uchiha", "Uchiha Obito", "Sasuke Uchiha", "Madara Uchiha"],
                correct: 0
            },
               {
                imageUrl: "gif/Madara.gif",
                question: "Qual é o nome deste Personagem?",
                options: ["Itachi Uchiha", "Uchiha Obito", "Sasuke Uchiha", "Madara Uchiha"],
                correct: 3
            },
            {
                imageUrl: "gif/gaara.gif",
                question: "Qual é o nome deste Personagem?",
                options: ["Kakashi Hatake", "Nagato Uzumaki", "Minato Namikaze", "Gaara"],
                correct: 3
            },
            {
                imageUrl: "gif/ichigo.gif",
                question: "Qual é o nome deste Personagem?",
                options: ["Renji Abarai", "Uryu Ishida", "Ichigo Kurosaki", "Kisuke Urahara"],
                correct: 2
            },
            {
                imageUrl: "gif/urahara.gif",
                question: "Qual é o nome deste Personagem?",
                options: ["Kisuke Urahara", "Uryu Ishida", "Tōshirō Hitsugaya", "Orihime Inoue"],
                correct: 0
            },
                        {
                imageUrl: "gif/byakuya.gif",
                question: "Qual é o nome deste Personagem?",
                options: ["Renji Abarai", "Uryu Ishida", "Gin Ichimaru", "Byakuya Kuchiki"],
                correct: 3
            },
            {
                imageUrl: "gif/kenpachi.gif",
                question: "Qual é o nome deste Personagem?",
                options: ["Renji Abarai", "Kenpachi Zaraki", "Gin Ichimaru", "Grimmjow"],
                correct: 1
            },
            {
                imageUrl: "gif/hellsing.gif",
                question: "Qual é o nome deste Anime ?",
                options: ["Hellsing Ultimate", "Fate Stay Night", "High Card", "Overlord"],
                correct: 0
            },
            {
                imageUrl: "gif/fate.gif",
                question: "Qual é o nome deste Anime ?",
                options: ["Norogame Arigato", "High School", "Fate Stay Night", "Tenki no ko"],
                correct: 2
            }
        ];
        
        // Elementos DOM
        const animeImageEl = document.getElementById('anime-image');
        const optionsContainerEl = document.getElementById('options-container');
        const nextBtnEl = document.getElementById('next-btn');
        const questionCountEl = document.getElementById('question-count');
        const scoreEl = document.getElementById('score');
        const correctEl = document.getElementById('correct');
        const hamburgerEl = document.querySelector('.hamburger');
        const navLinksEl = document.querySelector('.nav-links');
        
        // Variáveis de estado
        let currentQuestion = 0;
        let score = 0;
        let correctAnswers = 0;
        let answered = false;
        
        // Função para carregar a pergunta atual
        function loadQuestion() {
            const quizItem = quizData[currentQuestion];
            
            // Exibe a imagem com overlay
            animeImageEl.innerHTML = `
                <img src="${quizItem.imageUrl}" alt="Cena do anime" onerror="this.onerror=null; this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22600%22 viewBox=%220 0 800 600%22%3E%3Crect fill=%22%232c2c54%22 width=%22800%22 height=%22600%22/%3E%3Ctext fill=%22%23ffffff%22 font-family=%22Arial%22 font-size=%2230%22 x=%22400%22 y=%22300%22 text-anchor=%22middle%22%3EImagem não encontrada%3C/text%3E%3C/svg%3E'" loading="lazy">
                <div class="image-overlay">${quizItem.question}</div>
            `;
            
            // Limpa as opções anteriores
            optionsContainerEl.innerHTML = '';
            
            // Adiciona as novas opções
            quizItem.options.forEach((option, index) => {
                const optionBtn = document.createElement('button');
                optionBtn.classList.add('option-btn');
                optionBtn.textContent = option;
                optionBtn.addEventListener('click', () => selectOption(index));
                optionsContainerEl.appendChild(optionBtn);
            });
            
            // Atualiza contador de perguntas
            questionCountEl.textContent = `${currentQuestion + 1}/${quizData.length}`;
            
            // Reseta o estado de resposta
            answered = false;
            nextBtnEl.style.display = 'none';
        }
        
        // Função para selecionar uma opção
        function selectOption(selectedIndex) {
            if (answered) return;
            
            answered = true;
            const quizItem = quizData[currentQuestion];
            const options = document.querySelectorAll('.option-btn');
            
            // Marca a resposta correta
            options[quizItem.correct].classList.add('correct');
            
            // Verifica se a resposta está correta
            if (selectedIndex === quizItem.correct) {
                score += 5;
                correctAnswers++;
                scoreEl.textContent = score;
                correctEl.textContent = correctAnswers;
            } else {
                // Marca a resposta errada
                options[selectedIndex].classList.add('incorrect');
            }
            
            // Mostra o botão de próxima pergunta
            nextBtnEl.style.display = 'block';
        }
        
        // Função para mostrar resultados finais
        function showResults() {
            const quizContainer = document.querySelector('.quiz-container');
            quizContainer.innerHTML = `
                <div class="results-container">
                    <h2>Quiz Concluído!</h2>
                    <p>Sua pontuação final:</p>
                    <div class="final-score">${score}</div>
                    <p>Você acertou ${correctAnswers} de ${quizData.length} perguntas</p>
                    <br>
                    <a href="Index.html" class="restart-btn">Jogar Novamente</a><i class="fas fa-redo"></i>
                </div>
            `;
        }
        // Evento para o botão de próxima pergunta
        nextBtnEl.addEventListener('click', () => {
            currentQuestion++;
            
            if (currentQuestion < quizData.length) {
                loadQuestion();
            } else {
                showResults();
            }
        });
        
        // Menu hamburger para mobile
        hamburgerEl.addEventListener('click', () => {
            navLinksEl.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksEl.classList.remove('active');
            });
        });
        
        // Inicializa o quiz
        loadQuestion();