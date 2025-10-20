// Main Application Logic
class GeoQuizApp {
    constructor() {
        this.quiz = new Quiz();
        this.highScoreManager = new HighScoreManager();
        this.selectedCategory = '';
        this.selectedAnswerIndex = -1;
        
        this.initializeElements();
        this.bindEvents();
        this.loadHighScores();
        this.showScreen('start-screen');
    }

    // Initialize DOM elements
    initializeElements() {
        // Screens
        this.startScreen = document.getElementById('start-screen');
        this.quizScreen = document.getElementById('quiz-screen');
        this.resultsScreen = document.getElementById('results-screen');
        
        // Start screen elements
        this.categoryButtons = document.querySelectorAll('.category-btn');
        this.difficultyRadios = document.querySelectorAll('input[name="difficulty"]');
        this.startQuizBtn = document.getElementById('start-quiz-btn');
        
        // Quiz screen elements
        this.questionCounter = document.getElementById('question-counter');
        this.timer = document.getElementById('timer');
        this.progressFill = document.getElementById('progress-fill');
        this.questionText = document.getElementById('question-text');
        this.questionImage = document.getElementById('question-image');
        this.answerButtons = document.querySelectorAll('.answer-btn');
        this.nextBtn = document.getElementById('next-btn');
        
        // Results screen elements
        this.finalScore = document.getElementById('final-score');
        this.totalQuestions = document.getElementById('total-questions');
        this.scorePercentage = document.getElementById('score-percentage');
        this.performanceMessage = document.getElementById('performance-message');
        this.resultsBreakdown = document.getElementById('results-breakdown');
        this.playAgainBtn = document.getElementById('play-again-btn');
        this.changeCategoryBtn = document.getElementById('change-category-btn');
        
        // Other elements
        this.scoreDisplay = document.getElementById('score');
        this.highScoresList = document.getElementById('high-scores-list');
    }

    // Bind event listeners
    bindEvents() {
        // Category selection
        this.categoryButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.selectCategory(e.target.dataset.category));
        });
        
        // Start quiz
        this.startQuizBtn.addEventListener('click', () => this.startQuiz());
        
        // Answer selection
        this.answerButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.selectAnswer(parseInt(e.target.dataset.answer)));
        });
        
        // Next question
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        
        // Results screen buttons
        this.playAgainBtn.addEventListener('click', () => this.playAgain());
        this.changeCategoryBtn.addEventListener('click', () => this.changeCategory());
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => this.handleKeyPress(e));
    }

    // Handle keyboard input
    handleKeyPress(e) {
        if (this.quizScreen.classList.contains('active')) {
            // Number keys 1-4 for answers
            if (e.key >= '1' && e.key <= '4') {
                const answerIndex = parseInt(e.key) - 1;
                this.selectAnswer(answerIndex);
            }
            // Enter key for next question
            else if (e.key === 'Enter' && !this.nextBtn.disabled) {
                this.nextQuestion();
            }
        }
    }

    // Show specific screen
    showScreen(screenId) {
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show selected screen
        document.getElementById(screenId).classList.add('active');
        
        // Add fade-in animation
        document.getElementById(screenId).classList.add('fade-in');
        setTimeout(() => {
            document.getElementById(screenId).classList.remove('fade-in');
        }, 500);
    }

    // Select quiz category
    selectCategory(category) {
        this.selectedCategory = category;
        
        // Update button states
        this.categoryButtons.forEach(btn => {
            btn.classList.remove('selected');
            if (btn.dataset.category === category) {
                btn.classList.add('selected');
            }
        });
        
        // Enable start button
        this.startQuizBtn.disabled = false;
    }

    // Start the quiz
    startQuiz() {
        if (!this.selectedCategory) {
            alert('Please select a category first!');
            return;
        }
        
        // Get selected difficulty
        const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked').value;
        
        // Get question count based on difficulty
        const questionCounts = {
            'easy': 10,
            'medium': 15,
            'hard': 20
        };
        
        const questionCount = questionCounts[selectedDifficulty];
        
        // Initialize quiz
        this.quiz.init(this.selectedCategory, selectedDifficulty, questionCount);
        
        // Reset score display
        this.updateScoreDisplay();
        
        // Show quiz screen and load first question
        this.showScreen('quiz-screen');
        this.loadCurrentQuestion();
    }

    // Load and display current question
    loadCurrentQuestion() {
        const currentQuestion = this.quiz.getCurrentQuestion();
        
        if (!currentQuestion) {
            this.showResults();
            return;
        }
        
        // Reset answer selection
        this.selectedAnswerIndex = -1;
        this.nextBtn.disabled = true;
        
        // Update question counter
        this.questionCounter.textContent = `Question ${this.quiz.currentQuestionIndex + 1} of ${this.quiz.questions.length}`;
        
        // Update progress bar
        const progress = (this.quiz.currentQuestionIndex / this.quiz.questions.length) * 100;
        this.progressFill.style.width = `${progress}%`;
        
        // Display question
        this.questionText.textContent = currentQuestion.question;
        
        // Clear question image (placeholder for future image support)
        this.questionImage.innerHTML = '';
        
        // Display answer options
        this.answerButtons.forEach((btn, index) => {
            btn.textContent = currentQuestion.answers[index];
            btn.classList.remove('selected', 'correct', 'incorrect');
            btn.disabled = false;
        });
        
        // Start timer
        this.quiz.startTimer((timeRemaining) => {
            this.timer.textContent = `${timeRemaining}s`;
            
            // Change color when time is running out
            if (timeRemaining <= 10) {
                this.timer.style.color = '#e53e3e';
                this.timer.classList.add('pulse');
            } else {
                this.timer.style.color = '#e53e3e';
                this.timer.classList.remove('pulse');
            }
        });
    }

    // Select an answer
    selectAnswer(answerIndex) {
        if (this.quiz.timer === null) return; // Question already answered
        
        this.selectedAnswerIndex = answerIndex;
        
        // Update button states
        this.answerButtons.forEach((btn, index) => {
            btn.classList.remove('selected');
            if (index === answerIndex) {
                btn.classList.add('selected');
            }
        });
        
        // Enable next button
        this.nextBtn.disabled = false;
        
        // Auto-submit answer after selection
        setTimeout(() => {
            this.submitCurrentAnswer();
        }, 500);
    }

    // Submit current answer
    submitCurrentAnswer() {
        if (this.selectedAnswerIndex === -1) return;
        
        const isCorrect = this.quiz.submitAnswer(this.selectedAnswerIndex);
        const currentQuestion = this.quiz.getCurrentQuestion();
        
        // Show correct/incorrect answers
        this.answerButtons.forEach((btn, index) => {
            btn.disabled = true;
            
            if (index === currentQuestion.correct) {
                btn.classList.add('correct');
            } else if (index === this.selectedAnswerIndex && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });
        
        // Update score display
        this.updateScoreDisplay();
        
        // Enable next button
        this.nextBtn.disabled = false;
        this.nextBtn.focus();
    }

    // Move to next question
    nextQuestion() {
        this.quiz.nextQuestion();
        
        if (this.quiz.isComplete()) {
            this.showResults();
        } else {
            this.loadCurrentQuestion();
        }
    }

    // Update score display
    updateScoreDisplay() {
        this.scoreDisplay.textContent = this.quiz.score;
    }

    // Show quiz results
    showResults() {
        const results = this.quiz.getResults();
        
        // Display results
        this.finalScore.textContent = results.score;
        this.totalQuestions.textContent = results.totalQuestions;
        this.scorePercentage.textContent = `${results.percentage}%`;
        this.performanceMessage.textContent = results.performanceMessage;
        
        // Create detailed breakdown
        this.createResultsBreakdown(results);
        
        // Check if it's a high score
        if (this.highScoreManager.isHighScore(results.percentage)) {
            this.highScoreManager.addScore(results);
            this.loadHighScores();
        }
        
        // Show results screen
        this.showScreen('results-screen');
    }

    // Create detailed results breakdown
    createResultsBreakdown(results) {
        const breakdown = document.createElement('div');
        breakdown.innerHTML = `
            <div style="margin-bottom: 15px;">
                <strong>Quiz Summary:</strong><br>
                Category: ${results.category.charAt(0).toUpperCase() + results.category.slice(1)}<br>
                Difficulty: ${results.difficulty.charAt(0).toUpperCase() + results.difficulty.slice(1)}<br>
                Average Time per Question: ${results.averageTime}s
            </div>
            <div style="margin-bottom: 15px;">
                <strong>Correct Answers: ${results.score}</strong><br>
                <strong>Incorrect Answers: ${results.totalQuestions - results.score}</strong>
            </div>
        `;
        
        // Add question-by-question breakdown
        if (results.userAnswers.length > 0) {
            const questionList = document.createElement('div');
            questionList.innerHTML = '<strong>Question Review:</strong>';
            
            results.userAnswers.forEach((answer, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.style.cssText = 'margin: 10px 0; padding: 10px; border-radius: 5px; font-size: 0.9em;';
                questionDiv.style.backgroundColor = answer.isCorrect ? '#c6f6d5' : '#fed7d7';
                
                questionDiv.innerHTML = `
                    <strong>Q${index + 1}:</strong> ${answer.question}<br>
                    <span style="color: ${answer.isCorrect ? '#2d5016' : '#742a2a'};">
                        Your Answer: ${answer.userAnswer >= 0 ? answer.answers[answer.userAnswer] : 'No answer'}
                        ${answer.isCorrect ? ' ✓' : ' ✗'}
                    </span>
                    ${!answer.isCorrect ? `<br><span style="color: #2d5016;">Correct: ${answer.answers[answer.correctAnswer]}</span>` : ''}
                `;
                questionList.appendChild(questionDiv);
            });
            
            breakdown.appendChild(questionList);
        }
        
        this.resultsBreakdown.innerHTML = '';
        this.resultsBreakdown.appendChild(breakdown);
    }

    // Load and display high scores
    loadHighScores() {
        const scores = this.highScoreManager.getFormattedScores();
        
        if (scores.length === 0) {
            this.highScoresList.innerHTML = '<p>No high scores yet!</p>';
        } else {
            this.highScoresList.innerHTML = scores.map(score => `<div>${score}</div>`).join('');
        }
    }

    // Play again with same settings
    playAgain() {
        this.quiz.reset();
        this.startQuiz();
    }

    // Change category (go back to start)
    changeCategory() {
        this.quiz.reset();
        this.selectedCategory = '';
        
        // Reset category selection
        this.categoryButtons.forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Reset difficulty to easy
        document.querySelector('input[name="difficulty"][value="easy"]').checked = true;
        
        // Disable start button
        this.startQuizBtn.disabled = true;
        
        // Show start screen
        this.showScreen('start-screen');
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new GeoQuizApp();
    
    // Make app globally accessible for debugging
    window.geoQuizApp = app;
});