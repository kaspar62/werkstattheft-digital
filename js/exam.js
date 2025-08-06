// Exam Module - Prüfungsfunktionalität
const Exam = {
    currentQuestion: null,
    examData: null,
    
    // Prüfung initialisieren
    init() {
        this.examData = Storage.getExamData();
    },
    
    // Prüfungsinhalt anzeigen
    showExamContent() {
        const content = document.getElementById('examContent');
        
        content.innerHTML = `
            <div class="exam-container">
                <h3>Wähle ein Thema für die Prüfung:</h3>
                <div class="topic-selection">
                    ${this.getTopicButtons()}
                </div>
                <div id="questionArea" class="question-area mt-20" style="display:none;">
                    <div id="questionText"></div>
                    <textarea 
                        id="examAnswer" 
                        class="exam-input" 
                        placeholder="Deine Antwort..."
                        rows="4"
                    ></textarea>
                    <button class="btn mt-20" onclick="Exam.checkAnswer()">
                        Antwort prüfen
                    </button>
                    <div id="feedback" class="feedback mt-20"></div>
                </div>
            </div>
        `;
    },
    
    // Themen-Buttons generieren
    getTopicButtons() {
        return Workbook.topics.map(topic => `
            <button 
                class="btn topic-btn" 
                onclick="Exam.startExam('${topic.id}')"
            >
                ${topic.title}
            </button>
        `).join('');
    },
    
    // Prüfung starten
    startExam(topicId) {
        const topic = Workbook.topics.find(t => t.id === topicId);
        if (!topic) return;
        
        // Platzhalter Frage (später durch Claude API)
        this.currentQuestion = {
            topic: topic.title,
            question: `Beispielfrage zu ${topic.title}: Was sind die wichtigsten Sicherheitsregeln?`,
            topicId: topicId
        };
        
        // Frage anzeigen
        document.getElementById('questionArea').style.display = 'block';
        document.getElementById('questionText').innerHTML = `
            <h4>${this.currentQuestion.topic}</h4>
            <p>${this.currentQuestion.question}</p>
        `;
        document.getElementById('examAnswer').value = '';
        document.getElementById('feedback').innerHTML = '';
    },
    
    // Antwort prüfen (Platzhalter)
    checkAnswer() {
        const answer = document.getElementById('examAnswer').value;
        if (!answer.trim()) {
            alert('Bitte gib eine Antwort ein!');
            return;
        }
        
        // Platzhalter Bewertung (später durch Claude API)
        const isCorrect = answer.length > 10;
        
        const feedback = document.getElementById('feedback');
        if (isCorrect) {
            feedback.innerHTML = '<p class="success">Richtig! Gut gemacht!</p>';
            feedback.className = 'feedback mt-20 success';
            
            // Fortschritt speichern
            this.updateLearningProgress(this.currentQuestion.topicId, true);
        } else {
            feedback.innerHTML = '<p class="error">Leider nicht richtig. Versuche es nochmal!</p>';
            feedback.className = 'feedback mt-20 error';
            
            this.updateLearningProgress(this.currentQuestion.topicId, false);
        }
    },
    
    // Lernfortschritt aktualisieren
    updateLearningProgress(topicId, correct) {
        if (!this.examData.learned[topicId]) {
            this.examData.learned[topicId] = { correct: 0, attempts: 0 };
        }
        
        this.examData.learned[topicId].attempts++;
        if (correct) {
            this.examData.learned[topicId].correct++;
        }
        
        Storage.saveExamData(this.examData);
        Progress.updateStats();
    }
};