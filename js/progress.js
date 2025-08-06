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
    
    // MS-09: Anzeige aktualisieren mit Seiten-basiertem Fortschritt
    updateDisplay() {
        // Berechne Fortschritt basierend auf gespeicherten Seiten, nicht Themen
        const allWorkbookData = Storage.getAllWorkbookData();
        let totalPages = 0;
        let completedPages = 0;
        
        // Alle Seiten durchgehen
        Workbook.topics.forEach(topic => {
            totalPages += topic.pages.length;
            topic.pages.forEach(page => {
                if (allWorkbookData[page.id]) {
                    completedPages++;
                }
            });
        });
        
        const percentage = totalPages > 0 ? Math.round((completedPages / totalPages) * 100) : 0;
        
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        
        if (progressFill) {
            progressFill.style.width = percentage + '%';
        }
        
        if (progressText) {
            progressText.textContent = `${completedPages} von ${totalPages} Seiten (${percentage}%)`;
        }
        
        // MS-09: Detaillierte Fortschrittsanzeige
        this.showDetailedProgress();
        
        // Motivations-Nachricht
        if (percentage === 100) {
            this.showCongratulations();
        }
    },
    
    // MS-09: Detaillierter Fortschritt pro Thema
    showDetailedProgress() {
        const detailsContent = document.getElementById('progressDetails');
        if (!detailsContent) return;
        
        const allWorkbookData = Storage.getAllWorkbookData();
        let html = '<div class="progress-topics">';
        
        Workbook.topics.forEach(topic => {
            let topicCompleted = 0;
            let topicTotal = topic.pages.length;
            
            topic.pages.forEach(page => {
                if (allWorkbookData[page.id]) {
                    topicCompleted++;
                }
            });
            
            const topicPercent = topicTotal > 0 ? Math.round((topicCompleted / topicTotal) * 100) : 0;
            const isComplete = topicPercent === 100;
            
            html += `
                <div class="topic-progress ${isComplete ? 'complete' : ''}">
                    <h4>${topic.title}</h4>
                    <div class="topic-progress-bar">
                        <div class="topic-progress-fill" style="width: ${topicPercent}%"></div>
                    </div>
                    <span class="topic-progress-text">${topicCompleted} / ${topicTotal} Seiten</span>
                </div>
            `;
        });
        
        html += '</div>';
        detailsContent.innerHTML = html;
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
                    <h4>Pr�fungsversuche</h4>
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
    
    // Gl�ckw�nsche anzeigen
    showCongratulations() {
        const message = document.createElement('div');
        message.className = 'congratulations';
        message.innerHTML = `
            <h2>Herzlichen Gl�ckwunsch!</h2>
            <p>Du hast alle Themen abgeschlossen!</p>
        `;
        
        const progressContent = document.getElementById('progressContent');
        if (progressContent && !progressContent.querySelector('.congratulations')) {
            progressContent.insertBefore(message, progressContent.firstChild);
        }
    }
};