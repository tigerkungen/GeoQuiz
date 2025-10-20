// Quiz Class - Manages quiz logic and state
class Quiz {
    constructor() {
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.timeLimit = 30; // seconds per question
        this.timeRemaining = this.timeLimit;
        this.timer = null;
        this.category = '';
        this.difficulty = 'easy';
        this.questionCount = 10;
    }

    // Initialize quiz with selected options
    init(category, difficulty, questionCount) {
        this.category = category;
        this.difficulty = difficulty;
        this.questionCount = questionCount;
        this.score = 0;
        this.currentQuestionIndex = 0;
        this.userAnswers = [];
        
        // Get questions based on selection
        if (category === 'mixed') {
            this.questions = getMixedQuestions(difficulty, questionCount);
        } else {
            this.questions = getQuestions(category, difficulty, questionCount);
        }
        
        // Ensure we have enough questions
        if (this.questions.length < questionCount) {
            console.warn(`Only ${this.questions.length} questions available for selected criteria`);
            this.questionCount = this.questions.length;
        }
    }

    // Get current question
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    // Check if quiz is complete
    isComplete() {
        return this.currentQuestionIndex >= this.questions.length;
    }

    // Start timer for current question
    startTimer(callback) {
        this.timeRemaining = this.timeLimit;
        this.timer = setInterval(() => {
            this.timeRemaining--;
            callback(this.timeRemaining);
            
            if (this.timeRemaining <= 0) {
                this.stopTimer();
                this.submitAnswer(-1); // Auto-submit with no answer
            }
        }, 1000);
    }

    // Stop timer
    stopTimer() {
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    }

    // Submit answer for current question
    submitAnswer(answerIndex) {
        this.stopTimer();
        
        const currentQuestion = this.getCurrentQuestion();
        const isCorrect = answerIndex === currentQuestion.correct;
        
        // Store user answer
        this.userAnswers.push({
            questionIndex: this.currentQuestionIndex,
            userAnswer: answerIndex,
            correctAnswer: currentQuestion.correct,
            isCorrect: isCorrect,
            timeSpent: this.timeLimit - this.timeRemaining,
            question: currentQuestion.question,
            answers: currentQuestion.answers
        });
        
        // Update score
        if (isCorrect) {
            this.score++;
        }
        
        return isCorrect;
    }

    // Move to next question
    nextQuestion() {
        this.currentQuestionIndex++;
    }

    // Get quiz results
    getResults() {
        const percentage = Math.round((this.score / this.questions.length) * 100);
        
        let performanceMessage = '';
        if (percentage >= 90) {
            performanceMessage = 'Outstanding! You\'re a geography expert!';
        } else if (percentage >= 80) {
            performanceMessage = 'Excellent work! Great knowledge of geography!';
        } else if (percentage >= 70) {
            performanceMessage = 'Good job! You know your geography well!';
        } else if (percentage >= 60) {
            performanceMessage = 'Not bad! Keep studying geography!';
        } else {
            performanceMessage = 'Keep learning! Geography is fascinating!';
        }
        
        return {
            score: this.score,
            totalQuestions: this.questions.length,
            percentage: percentage,
            performanceMessage: performanceMessage,
            category: this.category,
            difficulty: this.difficulty,
            userAnswers: this.userAnswers,
            averageTime: this.calculateAverageTime()
        };
    }

    // Calculate average time per question
    calculateAverageTime() {
        if (this.userAnswers.length === 0) return 0;
        
        const totalTime = this.userAnswers.reduce((sum, answer) => sum + answer.timeSpent, 0);
        return Math.round(totalTime / this.userAnswers.length);
    }

    // Reset quiz
    reset() {
        this.stopTimer();
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.timeRemaining = this.timeLimit;
    }
}

// High Scores Manager
class HighScoreManager {
    constructor() {
        this.storageKey = 'geoquiz-highscores';
        this.maxScores = 10;
    }

    // Load high scores from localStorage
    loadScores() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading high scores:', error);
            return [];
        }
    }

    // Save high scores to localStorage
    saveScores(scores) {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(scores));
        } catch (error) {
            console.error('Error saving high scores:', error);
        }
    }

    // Add new score
    addScore(results) {
        const scores = this.loadScores();
        
        const newScore = {
            score: results.score,
            totalQuestions: results.totalQuestions,
            percentage: results.percentage,
            category: results.category,
            difficulty: results.difficulty,
            date: new Date().toISOString(),
            averageTime: results.averageTime
        };
        
        scores.push(newScore);
        
        // Sort by percentage (descending), then by score (descending)
        scores.sort((a, b) => {
            if (b.percentage !== a.percentage) {
                return b.percentage - a.percentage;
            }
            return b.score - a.score;
        });
        
        // Keep only top scores
        const topScores = scores.slice(0, this.maxScores);
        this.saveScores(topScores);
        
        return topScores;
    }

    // Get formatted high scores for display
    getFormattedScores() {
        const scores = this.loadScores();
        
        return scores.map((score, index) => {
            const date = new Date(score.date).toLocaleDateString();
            return `${index + 1}. ${score.percentage}% (${score.score}/${score.totalQuestions}) - ${score.category} - ${date}`;
        });
    }

    // Check if score qualifies as high score
    isHighScore(percentage) {
        const scores = this.loadScores();
        
        if (scores.length < this.maxScores) {
            return true;
        }
        
        const lowestScore = scores[scores.length - 1];
        return percentage > lowestScore.percentage;
    }
}