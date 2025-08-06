// Progress Module - Fortschrittsverwaltung
const Progress = {
    progressData: null,
    
    // Initialisierung
    init() {
        this.progressData = Storage.getProgress();
    },
    
    // Fortschritt aktualisieren
    updateProgress(topicId) {
        if (!this.progressData.completed.includes(topicId)) {
            this.progressData.completed.push(topicId);
            Storage.saveProgress(this.progressData);
        }
        this.updateDisplay();
    },
    
    // Anzeige aktualisieren
    updateDisplay() {
        const totalTopics = Workbook.topics.length;
        const completedTopics = this.progressData.completed.length;
        const percentage = Math.round((completedTopics / totalTopics) * 100);
        
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) {
            progressFill.style.width = percentage + '%';
        }
        
        if (progressText) {
            progressText.textContent = percentage + '%';
        }
        
        // Motivations-Nachricht
        if (percentage === 100) {
            this.showCongratulations();
        }
    },
    
    // Statistiken anzeigen
    showStats() {
        const statsContent = document.getElementById('statsContent');
        if (!statsContent) return;
        
        const examData = Storage.getExamData();
        const completedTopics = this.progressData.completed.length;
        const totalTopics = Workbook.topics.length;
        
        let totalAttempts = 0;
        let totalCorrect = 0;
        
        Object.values(examData.learned || {}).forEach(topic => {
            totalAttempts += topic.attempts || 0;
            totalCorrect += topic.correct || 0;
        });
        
        statsContent.innerHTML = `
            <div class="stats-grid">
                <div class="stat-card">
                    <h4>Abgeschlossene Themen</h4>
                    <p class="stat-number">${completedTopics} / ${totalTopics}</p>
                </div>
                <div class="stat-card">
                    <h4>Prüfungsversuche</h4>
                    <p class="stat-number">${totalAttempts}</p>
                </div>
                <div class="stat-card">
                    <h4>Richtige Antworten</h4>
                    <p class="stat-number">${totalCorrect}</p>
                </div>
                <div class="stat-card">
                    <h4>Erfolgsrate</h4>
                    <p class="stat-number">${totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0}%</p>
                </div>
            </div>
            
            <div class="wrong-answers mt-20">
                <h4>Themen zum Wiederholen:</h4>
                <ul id="reviewTopics">
                    ${this.getReviewTopics(examData)}
                </ul>
            </div>
        `;
    },
    
    // Themen zum Wiederholen
    getReviewTopics(examData) {
        const topics = [];
        
        Object.entries(examData.learned || {}).forEach(([topicId, data]) => {
            const successRate = data.attempts > 0 ? (data.correct / data.attempts) : 0;
            if (successRate < 0.7) {
                const topic = Workbook.topics.find(t => t.id === topicId);
                if (topic) {
                    topics.push(`<li>${topic.title} (${Math.round(successRate * 100)}% richtig)</li>`);
                }
            }
        });
        
        return topics.length > 0 ? topics.join('') : '<li>Keine Themen zum Wiederholen</li>';
    },
    
    // Statistiken aktualisieren
    updateStats() {
        if (document.getElementById('progressSection').classList.contains('active')) {
            this.showStats();
        }
    },
    
    // Glückwünsche anzeigen
    showCongratulations() {
        const message = document.createElement('div');
        message.className = 'congratulations';
        message.innerHTML = `
            <h2>Herzlichen Glückwunsch!</h2>
            <p>Du hast alle Themen abgeschlossen!</p>
        `;
        
        const progressContent = document.getElementById('progressContent');
        if (progressContent && !progressContent.querySelector('.congratulations')) {
            progressContent.insertBefore(message, progressContent.firstChild);
        }
    }
};