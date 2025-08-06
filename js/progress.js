// Progress Module - MS-13: Fortschrittsverwaltung & Statistiken
const Progress = {
    progressData: null,
    
    // Initialisierung
    init() {
        this.progressData = Storage.getProgress();
        
        // MS-13: Erweiterte Analytics beim Start berechnen
        this.calculateAdvancedStats();
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
    
    // MS-13: Erweiterte Statistiken anzeigen
    showStats() {
        const statsContent = document.getElementById('statsContent');
        if (!statsContent) return;
        
        const stats = this.calculateAdvancedStats();
        
        statsContent.innerHTML = `
            <div class="stats-overview">
                <h3>📊 Lernfortschritt Übersicht</h3>
                
                <!-- Hauptstatistiken -->
                <div class="stats-grid">
                    <div class="stat-card primary">
                        <div class="stat-icon">🎯</div>
                        <div class="stat-content">
                            <h4>Gesamtfortschritt</h4>
                            <p class="stat-number">${stats.totalProgress}%</p>
                            <p class="stat-detail">${stats.completedPages} von ${stats.totalPages} Seiten</p>
                        </div>
                    </div>
                    <div class="stat-card success">
                        <div class="stat-icon">✅</div>
                        <div class="stat-content">
                            <h4>Gemeisterte Fragen</h4>
                            <p class="stat-number">${stats.masteredQuestions}</p>
                            <p class="stat-detail">${stats.masteryRate}% der getesteten Fragen</p>
                        </div>
                    </div>
                    <div class="stat-card info">
                        <div class="stat-icon">🧠</div>
                        <div class="stat-content">
                            <h4>Prüfungsstatistik</h4>
                            <p class="stat-number">${stats.totalAttempts}</p>
                            <p class="stat-detail">${stats.successRate}% Erfolgsrate</p>
                        </div>
                    </div>
                    <div class="stat-card warning">
                        <div class="stat-icon">📚</div>
                        <div class="stat-content">
                            <h4>Schwache Bereiche</h4>
                            <p class="stat-number">${stats.weakAreas.length}</p>
                            <p class="stat-detail">Bereiche unter 70%</p>
                        </div>
                    </div>
                </div>
                
                <!-- Detaillierte Bereiche -->
                ${this.renderProgressBreakdown(stats)}
                ${this.renderWrongAnswers(stats)}
                ${this.renderMotivationalMessage(stats)}
            </div>
        `;
    },
    
    // MS-13: Erweiterte Statistiken berechnen
    calculateAdvancedStats() {
        const allWorkbookData = Storage.getAllWorkbookData();
        const examData = Storage.getExamData();
        
        // Seitenfortschritt
        let totalPages = 0;
        let completedPages = 0;
        
        Workbook.topics.forEach(topic => {
            totalPages += topic.pages.length;
            topic.pages.forEach(page => {
                if (allWorkbookData[page.id]) {
                    completedPages++;
                }
            });
        });
        
        const totalProgress = totalPages > 0 ? Math.round((completedPages / totalPages) * 100) : 0;
        
        // Prüfungsstatistiken
        let totalAttempts = 0;
        let totalCorrect = 0;
        let masteredQuestions = 0;
        let totalQuestions = 0;
        
        Object.values(examData.learned || {}).forEach(questionData => {
            totalAttempts += questionData.attempts || 0;
            totalCorrect += questionData.correct || 0;
            totalQuestions++;
            
            if (questionData.mastered) {
                masteredQuestions++;
            }
        });
        
        const successRate = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;
        const masteryRate = totalQuestions > 0 ? Math.round((masteredQuestions / totalQuestions) * 100) : 0;
        
        // Schwache Bereiche identifizieren
        const weakAreas = this.identifyWeakAreas(examData);
        const wrongAnswers = this.getDetailedWrongAnswers(examData);
        
        return {
            totalPages,
            completedPages,
            totalProgress,
            totalAttempts,
            totalCorrect,
            successRate,
            masteredQuestions,
            totalQuestions,
            masteryRate,
            weakAreas,
            wrongAnswers
        };
    },
    
    // MS-13: Schwache Bereiche identifizieren
    identifyWeakAreas(examData) {
        const weakAreas = [];
        const topicPerformance = {};
        
        // Performance pro Thema berechnen
        Object.entries(examData.learned || {}).forEach(([questionId, data]) => {
            const parts = questionId.split('_');
            const pageId = parts[0];
            
            // Finde das Thema für diese Seite
            let topicId = null;
            for (let topic of Workbook.topics) {
                if (topic.pages.some(page => page.id === pageId)) {
                    topicId = topic.id;
                    break;
                }
            }
            
            if (topicId) {
                if (!topicPerformance[topicId]) {
                    topicPerformance[topicId] = {
                        attempts: 0,
                        correct: 0,
                        title: Workbook.topics.find(t => t.id === topicId)?.title || 'Unbekannt'
                    };
                }
                
                topicPerformance[topicId].attempts += data.attempts || 0;
                topicPerformance[topicId].correct += data.correct || 0;
            }
        });
        
        // Bereiche mit <70% Erfolgsrate als schwach markieren
        Object.entries(topicPerformance).forEach(([topicId, performance]) => {
            const rate = performance.attempts > 0 ? (performance.correct / performance.attempts) : 0;
            if (rate < 0.7 && performance.attempts >= 2) { // Mindestens 2 Versuche
                weakAreas.push({
                    topicId,
                    title: performance.title,
                    rate: Math.round(rate * 100),
                    attempts: performance.attempts,
                    correct: performance.correct
                });
            }
        });
        
        return weakAreas.sort((a, b) => a.rate - b.rate); // Schlechteste zuerst
    },
    
    // MS-13: Detaillierte falsche Antworten
    getDetailedWrongAnswers(examData) {
        const wrongAnswers = [];
        
        Object.entries(examData.learned || {}).forEach(([questionId, data]) => {
            const wrongCount = data.attempts - data.correct;
            if (wrongCount > 0 && !data.mastered) {
                // Finde die ursprüngliche Frage
                const parts = questionId.split('_');
                const pageId = parts[0];
                const inputIndex = parts[1];
                
                let questionText = 'Unbekannte Frage';
                let topicTitle = 'Unbekannt';
                
                // Suche die Frage in den Workbook-Daten
                for (let topic of Workbook.topics) {
                    const page = topic.pages.find(p => p.id === pageId);
                    if (page) {
                        topicTitle = topic.title;
                        if (page.inputs && page.inputs[parseInt(inputIndex.replace('input_', ''))]) {
                            const input = page.inputs[parseInt(inputIndex.replace('input_', ''))];
                            questionText = input.placeholder || page.title;
                        } else {
                            questionText = page.title;
                        }
                        break;
                    }
                }
                
                wrongAnswers.push({
                    questionId,
                    questionText,
                    topicTitle,
                    wrongCount,
                    attempts: data.attempts,
                    correctStreak: data.correctStreak || 0,
                    needsReview: !data.mastered
                });
            }
        });
        
        return wrongAnswers.sort((a, b) => b.wrongCount - a.wrongCount); // Meiste Fehler zuerst
    },
    
    // MS-13: Fortschritts-Breakdown rendern
    renderProgressBreakdown(stats) {
        if (stats.weakAreas.length === 0) {
            return `<div class="progress-breakdown">
                <h4>🌟 Alle Bereiche stark!</h4>
                <p>Du meisterst alle getesteten Bereiche mit über 70% Erfolgsrate.</p>
            </div>`;
        }
        
        const weakAreasHtml = stats.weakAreas.map(area => `
            <div class="weak-area-item">
                <div class="weak-area-header">
                    <strong>${area.title}</strong>
                    <span class="weak-area-rate ${area.rate < 50 ? 'critical' : 'warning'}">${area.rate}%</span>
                </div>
                <div class="weak-area-details">
                    ${area.correct} von ${area.attempts} richtig • ${area.attempts - area.correct} Fehler
                </div>
            </div>
        `).join('');
        
        return `
            <div class="progress-breakdown">
                <h4>⚠️ Bereiche zum Verbessern</h4>
                <div class="weak-areas-list">
                    ${weakAreasHtml}
                </div>
            </div>
        `;
    },
    
    // MS-13: Falsche Antworten rendern
    renderWrongAnswers(stats) {
        if (stats.wrongAnswers.length === 0) {
            return `<div class="wrong-answers-section">
                <h4>🎯 Perfekte Leistung!</h4>
                <p>Keine Fragen zum Wiederholen vorhanden.</p>
            </div>`;
        }
        
        const wrongAnswersHtml = stats.wrongAnswers.slice(0, 10).map(answer => `
            <div class="wrong-answer-item ${answer.correctStreak >= 2 ? 'improving' : ''}">
                <div class="question-info">
                    <strong>${answer.questionText}</strong>
                    <span class="topic-tag">${answer.topicTitle}</span>
                </div>
                <div class="answer-stats">
                    <span class="error-count">❌ ${answer.wrongCount}x falsch</span>
                    <span class="attempt-count">${answer.attempts} Versuche</span>
                    ${answer.correctStreak > 0 ? `<span class="streak">🔥 ${answer.correctStreak}x richtig</span>` : ''}
                </div>
            </div>
        `).join('');
        
        return `
            <div class="wrong-answers-section">
                <h4>📚 Fragen zum Wiederholen (${stats.wrongAnswers.length})</h4>
                <div class="wrong-answers-list">
                    ${wrongAnswersHtml}
                </div>
                ${stats.wrongAnswers.length > 10 ? `<p class="show-more">... und ${stats.wrongAnswers.length - 10} weitere</p>` : ''}
            </div>
        `;
    },
    
    // MS-13: Motivationsnachricht rendern
    renderMotivationalMessage(stats) {
        let message = '';
        let icon = '';
        let className = '';
        
        if (stats.totalProgress >= 100) {
            icon = '🏆';
            message = 'Fantastisch! Du hast alle Arbeitsbuch-Seiten abgeschlossen!';
            className = 'celebration';
        } else if (stats.totalProgress >= 80) {
            icon = '🚀';
            message = 'Super! Du bist kurz vor dem Ziel. Noch wenige Seiten bis 100%!';
            className = 'excellent';
        } else if (stats.totalProgress >= 60) {
            icon = '💪';
            message = 'Gut gemacht! Du hast schon über die Hälfte geschafft. Weiter so!';
            className = 'good';
        } else if (stats.totalProgress >= 30) {
            icon = '📈';
            message = 'Du machst Fortschritte! Jede abgeschlossene Seite bringt dich dem Ziel näher.';
            className = 'progress';
        } else {
            icon = '🌱';
            message = 'Jede Reise beginnt mit dem ersten Schritt. Du bist auf dem richtigen Weg!';
            className = 'start';
        }
        
        // Zusätzliche Mastery-Motivation
        if (stats.masteredQuestions > 0) {
            message += ` Du hast bereits ${stats.masteredQuestions} Fragen gemeistert!`;
        }
        
        return `
            <div class="motivational-message ${className}">
                <div class="motivation-icon">${icon}</div>
                <div class="motivation-text">
                    <p>${message}</p>
                    ${stats.totalProgress < 100 ? `<p class="next-goal">Ziel: ${Math.ceil((100 - stats.totalProgress) / 10) * 10}% erreichen</p>` : ''}
                </div>
            </div>
        `;
    },
    
    // Themen zum Wiederholen (Legacy für Kompatibilität)
    getReviewTopics(examData) {
        const stats = this.calculateAdvancedStats();
        return stats.weakAreas.length > 0 ? 
            stats.weakAreas.map(area => `<li>${area.title} (${area.rate}% richtig)</li>`).join('') :
            '<li>Keine Themen zum Wiederholen</li>';
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