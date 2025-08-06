// Exam Module - MS-11: Basis-Prüfungssystem ohne KI
const Exam = {
    currentQuestion: null,
    examData: null,
    currentQuestionIndex: 0,
    availableQuestions: [],
    
    // Prüfung initialisieren
    init() {
        this.examData = Storage.getExamData();
        this.buildQuestionPool();
        
        // MS-12: Claude API initialisieren
        ClaudeAPI.init();
    },
    
    // MS-11: Fragenpool aus gespeicherten Arbeitsbuch-Antworten erstellen
    buildQuestionPool() {
        this.availableQuestions = [];
        const allWorkbookData = Storage.getAllWorkbookData();
        
        // Alle gespeicherten Seiten durchgehen
        Object.keys(allWorkbookData).forEach(pageId => {
            const pageData = allWorkbookData[pageId];
            const page = this.findPageById(pageId);
            
            if (page && pageData.inputs) {
                // Fragen aus dieser Seite extrahieren
                const questions = this.extractQuestionsFromPage(page, pageData);
                this.availableQuestions = this.availableQuestions.concat(questions);
            }
        });
        
        console.log('MS-11: Fragenpool erstellt mit', this.availableQuestions.length, 'Fragen');
    },
    
    // Seite anhand ID finden
    findPageById(pageId) {
        for (let topic of Workbook.topics) {
            const page = topic.pages.find(p => p.id === pageId);
            if (page) {
                return { ...page, topicTitle: topic.title };
            }
        }
        return null;
    },
    
    // MS-11: Fragen aus Seite extrahieren
    extractQuestionsFromPage(page, pageData) {
        const questions = [];
        
        // Einfache Strategie: Alle nicht-leeren Inputs als potentielle Fragen
        Object.keys(pageData.inputs).forEach(inputKey => {
            const answer = pageData.inputs[inputKey];
            
            if (answer && answer.trim().length > 2) {
                // Vereinfachte Fragenerstellung
                let questionText = `${page.title}`;
                
                // Wenn es placeholder info gibt, nutze diese
                if (page.inputs) {
                    const inputIndex = parseInt(inputKey.replace('input_', ''));
                    if (page.inputs[inputIndex] && page.inputs[inputIndex].placeholder) {
                        questionText += ` - ${page.inputs[inputIndex].placeholder}`;
                    }
                }
                
                questions.push({
                    id: `${page.id}_${inputKey}`,
                    pageId: page.id,
                    topic: page.topicTitle,
                    question: questionText,
                    correctAnswer: answer.trim(),
                    difficulty: answer.length > 20 ? 'medium' : 'easy'
                });
            }
        });
        
        return questions;
    },
    
    // MS-11: Prüfungsinhalt anzeigen
    showExamContent() {
        const content = document.getElementById('examContent');
        
        // Fragenpool aktualisieren
        this.buildQuestionPool();
        
        if (this.availableQuestions.length === 0) {
            content.innerHTML = `
                <div class="exam-container">
                    <h3>📚 Prüfungsmodus</h3>
                    <div class="exam-info">
                        <p>Es sind noch keine Fragen verfügbar.</p>
                        <p>Beantworte zuerst einige Fragen im <strong>Arbeitsbuch</strong>, dann kannst du hier dein Wissen testen!</p>
                        <button class="btn btn-primary" onclick="App.showSection('workbook')">
                            Zum Arbeitsbuch
                        </button>
                    </div>
                </div>
            `;
            return;
        }
        
        content.innerHTML = `
            <div class="exam-container">
                <h3>📝 Prüfung</h3>
                <div class="exam-info">
                    <p><strong>${this.availableQuestions.length} Fragen</strong> aus deinen Arbeitsbuch-Antworten verfügbar</p>
                    <button class="btn btn-primary" onclick="Exam.startRandomExam()">
                        Zufällige Prüfung starten
                    </button>
                </div>
                
                <div id="questionArea" class="question-area mt-20" style="display:none;">
                    <div class="question-header">
                        <span id="questionCounter"></span>
                        <span id="questionTopic" class="question-topic"></span>
                    </div>
                    <div id="questionText" class="question-text"></div>
                    <textarea 
                        id="examAnswer" 
                        class="exam-input" 
                        placeholder="Deine Antwort..."
                        rows="3"
                    ></textarea>
                    <div class="exam-buttons">
                        <button class="btn btn-primary" onclick="Exam.checkAnswer()">
                            Antwort prüfen
                        </button>
                        <button class="btn btn-secondary" onclick="Exam.showHint()">
                            Hinweis
                        </button>
                        <button class="btn" onclick="Exam.nextQuestion()">
                            Nächste Frage
                        </button>
                    </div>
                    <div id="feedback" class="feedback mt-20"></div>
                </div>
            </div>
        `;
    },
    
    // MS-11: Zufällige Prüfung starten
    startRandomExam() {
        if (this.availableQuestions.length === 0) return;
        
        // Zufällige Frage auswählen
        this.currentQuestionIndex = Math.floor(Math.random() * this.availableQuestions.length);
        this.currentQuestion = this.availableQuestions[this.currentQuestionIndex];
        
        this.showCurrentQuestion();
    },
    
    // MS-11: Aktuelle Frage anzeigen
    showCurrentQuestion() {
        if (!this.currentQuestion) return;
        
        document.getElementById('questionArea').style.display = 'block';
        document.getElementById('questionCounter').textContent = `Frage ${this.currentQuestionIndex + 1} von ${this.availableQuestions.length}`;
        document.getElementById('questionTopic').textContent = this.currentQuestion.topic;
        document.getElementById('questionText').textContent = this.currentQuestion.question;
        document.getElementById('examAnswer').value = '';
        document.getElementById('feedback').innerHTML = '';
    },
    
    // MS-11: Nächste Frage
    nextQuestion() {
        if (this.availableQuestions.length === 0) return;
        
        // Nächste zufällige Frage
        this.currentQuestionIndex = Math.floor(Math.random() * this.availableQuestions.length);
        this.currentQuestion = this.availableQuestions[this.currentQuestionIndex];
        
        this.showCurrentQuestion();
    },
    
    // MS-11: Hinweis anzeigen
    showHint() {
        if (!this.currentQuestion) return;
        
        const correctAnswer = this.currentQuestion.correctAnswer;
        const hintLength = Math.min(3, Math.floor(correctAnswer.length / 3));
        const hint = correctAnswer.substring(0, hintLength) + '...';
        
        const feedback = document.getElementById('feedback');
        feedback.innerHTML = `<p class="hint">💡 Hinweis: Beginnt mit "${hint}"</p>`;
        feedback.className = 'feedback mt-20 hint';
    },
    
    // MS-12: Intelligente Antwort prüfen (Claude API + Fallback)
    async checkAnswer() {
        const userAnswer = document.getElementById('examAnswer').value;
        if (!userAnswer.trim()) {
            alert('Bitte gib eine Antwort ein!');
            return;
        }
        
        if (!this.currentQuestion) return;
        
        const feedback = document.getElementById('feedback');
        const checkButton = document.querySelector('button[onclick="Exam.checkAnswer()"]');
        
        // Loading-Anzeige
        feedback.innerHTML = `<p class="loading">🤖 Bewerte Antwort...</p>`;
        feedback.className = 'feedback mt-20 loading';
        checkButton.disabled = true;
        
        try {
            // MS-12: Claude API für intelligente Bewertung
            const evaluation = await ClaudeAPI.evaluateAnswer(
                userAnswer.trim(), 
                this.currentQuestion.correctAnswer, 
                this.currentQuestion.question
            );
            
            this.showEvaluationResult(evaluation);
            this.updateLearningProgress(this.currentQuestion.id, evaluation.isCorrect);
            
        } catch (error) {
            console.error('MS-12: Fehler bei Antwortbewertung:', error);
            
            // Fallback auf lokale Bewertung
            const correct = this.compareAnswers(userAnswer.trim(), this.currentQuestion.correctAnswer);
            const fallbackEvaluation = {
                isCorrect: correct,
                explanation: correct ? 'Textvergleich erfolgreich' : 'Textvergleich negativ',
                method: 'local-fallback',
                userAnswer: userAnswer.trim(),
                correctAnswer: this.currentQuestion.correctAnswer
            };
            
            this.showEvaluationResult(fallbackEvaluation);
            this.updateLearningProgress(this.currentQuestion.id, correct);
        }
        
        checkButton.disabled = false;
    },
    
    // MS-12: Bewertungsergebnis anzeigen
    showEvaluationResult(evaluation) {
        const feedback = document.getElementById('feedback');
        const status = ClaudeAPI.getStatus();
        
        if (evaluation.isCorrect) {
            feedback.innerHTML = `
                <p class="success">✅ Richtig!</p>
                <p><strong>Deine Antwort:</strong> ${evaluation.userAnswer}</p>
                <p><strong>Bewertung:</strong> ${evaluation.explanation}</p>
                ${!status.available ? '<p class="api-status">📱 Lokale Bewertung</p>' : '<p class="api-status">🤖 KI-Bewertung</p>'}
            `;
            feedback.className = 'feedback mt-20 success';
        } else {
            feedback.innerHTML = `
                <p class="error">❌ Nicht richtig</p>
                <p><strong>Deine Antwort:</strong> ${evaluation.userAnswer}</p>
                <p><strong>Bewertung:</strong> ${evaluation.explanation}</p>
                <p><strong>Richtige Antwort:</strong> ${evaluation.correctAnswer}</p>
                ${!status.available ? '<p class="api-status">📱 Lokale Bewertung</p>' : '<p class="api-status">🤖 KI-Bewertung</p>'}
            `;
            feedback.className = 'feedback mt-20 error';
        }
    },
    
    // MS-11: Einfacher Antwortvergleich
    compareAnswers(userAnswer, correctAnswer) {
        // Basis-Textvergleich (case-insensitive, ohne Leerzeichen am Anfang/Ende)
        const userClean = userAnswer.toLowerCase().trim();
        const correctClean = correctAnswer.toLowerCase().trim();
        
        // Exakter Vergleich
        if (userClean === correctClean) return true;
        
        // Teilstring-Vergleich (wenn User-Antwort in richtiger Antwort enthalten)
        if (correctClean.includes(userClean) && userClean.length >= 3) return true;
        
        // Umgekehrt (wenn richtige Antwort in User-Antwort enthalten)
        if (userClean.includes(correctClean) && correctClean.length >= 3) return true;
        
        return false;
    },
    
    // MS-11: Lernfortschritt aktualisieren (für 3x-Regel vorbereitet)
    updateLearningProgress(questionId, correct) {
        if (!this.examData.learned[questionId]) {
            this.examData.learned[questionId] = { 
                correct: 0, 
                attempts: 0, 
                correctStreak: 0,  // MS-11: Für 3x-Regel
                mastered: false    // MS-11: Nach 3x richtig
            };
        }
        
        const questionData = this.examData.learned[questionId];
        questionData.attempts++;
        
        if (correct) {
            questionData.correct++;
            questionData.correctStreak++;
            
            // MS-11: 3x-richtig-Regel
            if (questionData.correctStreak >= 3) {
                questionData.mastered = true;
            }
        } else {
            questionData.correctStreak = 0; // Reset bei falscher Antwort
        }
        
        Storage.saveExamData(this.examData);
        Progress.updateStats();
    }
};