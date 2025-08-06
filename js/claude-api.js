// Claude API Module - MS-12: KI-Integration für intelligente Antwortbewertung
const ClaudeAPI = {
    // API Configuration
    apiKey: null,
    baseUrl: 'https://api.anthropic.com/v1/messages',
    
    // API Status
    isConfigured: false,
    isAvailable: true,
    lastError: null,
    
    // MS-12: API initialisieren
    init() {
        // API Key aus Environment oder localStorage laden
        this.loadApiKey();
        this.testConnection();
    },
    
    // MS-12: API Key laden
    loadApiKey() {
        // Versuche API Key aus verschiedenen Quellen zu laden
        this.apiKey = localStorage.getItem('claude_api_key') || 
                      window.CLAUDE_API_KEY || 
                      null;
        
        this.isConfigured = !!this.apiKey;
        
        if (!this.isConfigured) {
            console.warn('MS-12: Claude API Key nicht konfiguriert - Fallback auf lokale Bewertung');
        }
    },
    
    // MS-12: API Key setzen (für Setup)
    setApiKey(apiKey) {
        if (!apiKey || typeof apiKey !== 'string') {
            console.error('MS-12: Ungültiger API Key');
            return false;
        }
        
        this.apiKey = apiKey;
        this.isConfigured = true;
        
        // Optional: In localStorage speichern (Vorsicht: Sicherheit!)
        // localStorage.setItem('claude_api_key', apiKey);
        
        return true;
    },
    
    // MS-12: Verbindung testen
    async testConnection() {
        if (!this.isConfigured) {
            this.isAvailable = false;
            return false;
        }
        
        try {
            // Einfacher Test-Request
            const response = await this.makeRequest([{
                role: 'user',
                content: 'Test'
            }], 10); // Kurze Antwort
            
            this.isAvailable = true;
            this.lastError = null;
            console.log('MS-12: Claude API verfügbar');
            return true;
        } catch (error) {
            this.isAvailable = false;
            this.lastError = error.message;
            console.warn('MS-12: Claude API nicht verfügbar:', error.message);
            return false;
        }
    },
    
    // MS-12: API Request durchführen
    async makeRequest(messages, maxTokens = 100) {
        if (!this.isConfigured) {
            throw new Error('API Key nicht konfiguriert');
        }
        
        const requestBody = {
            model: 'claude-3-haiku-20240307', // Schnelles, günstiges Modell für Bewertungen
            max_tokens: maxTokens,
            messages: messages
        };
        
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': this.apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify(requestBody)
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(`API Error ${response.status}: ${errorData.error?.message || 'Unknown error'}`);
        }
        
        const data = await response.json();
        return data.content[0].text.trim();
    },
    
    // MS-12: Intelligente Antwortbewertung
    async evaluateAnswer(userAnswer, correctAnswer, questionText) {
        // Fallback auf lokale Bewertung wenn API nicht verfügbar
        if (!this.isAvailable) {
            return this.fallbackEvaluation(userAnswer, correctAnswer);
        }
        
        try {
            const prompt = this.buildEvaluationPrompt(userAnswer, correctAnswer, questionText);
            
            const messages = [{
                role: 'user',
                content: prompt
            }];
            
            const response = await this.makeRequest(messages, 150);
            return this.parseEvaluationResponse(response, userAnswer, correctAnswer);
            
        } catch (error) {
            console.warn('MS-12: API-Fehler, Fallback auf lokale Bewertung:', error.message);
            this.lastError = error.message;
            return this.fallbackEvaluation(userAnswer, correctAnswer);
        }
    },
    
    // MS-12: Evaluation-Prompt erstellen
    buildEvaluationPrompt(userAnswer, correctAnswer, questionText) {
        return `Du bist ein Lehrer für Werkunterricht und bewertest Schülerantworten.

FRAGE: ${questionText}
KORREKTE ANTWORT: ${correctAnswer}
SCHÜLERANTWORT: ${userAnswer}

Bewerte die Schülerantwort:
- Ist sie inhaltlich korrekt? (auch bei anderen Wortlauten)
- Enthält sie die wichtigsten Punkte?
- Ist sie fachlich richtig?

Antworte NUR in diesem Format:
BEWERTUNG: [richtig/falsch]
BEGRÜNDUNG: [Kurze Erklärung in 1-2 Sätzen]

Beispiel:
BEWERTUNG: richtig
BEGRÜNDUNG: Die Antwort enthält die wichtigsten Sicherheitsaspekte, auch wenn sie anders formuliert ist.`;
    },
    
    // MS-12: API-Antwort parsen
    parseEvaluationResponse(apiResponse, userAnswer, correctAnswer) {
        try {
            const lines = apiResponse.split('\n');
            let isCorrect = false;
            let explanation = 'KI-Bewertung durchgeführt';
            
            // Parse Bewertung
            const bewertungLine = lines.find(line => line.startsWith('BEWERTUNG:'));
            if (bewertungLine) {
                isCorrect = bewertungLine.toLowerCase().includes('richtig');
            }
            
            // Parse Begründung
            const begründungLine = lines.find(line => line.startsWith('BEGRÜNDUNG:'));
            if (begründungLine) {
                explanation = begründungLine.replace('BEGRÜNDUNG:', '').trim();
            }
            
            return {
                isCorrect: isCorrect,
                explanation: explanation,
                method: 'claude-api',
                userAnswer: userAnswer,
                correctAnswer: correctAnswer
            };
            
        } catch (error) {
            console.warn('MS-12: Fehler beim Parsen der API-Antwort:', error);
            return this.fallbackEvaluation(userAnswer, correctAnswer);
        }
    },
    
    // MS-12: Fallback auf lokale Bewertung
    fallbackEvaluation(userAnswer, correctAnswer) {
        // Verwende die bestehende simple Textvergleichs-Logik
        const userClean = userAnswer.toLowerCase().trim();
        const correctClean = correctAnswer.toLowerCase().trim();
        
        let isCorrect = false;
        let explanation = '';
        
        // Exakter Vergleich
        if (userClean === correctClean) {
            isCorrect = true;
            explanation = 'Exakt richtig';
        }
        // Teilstring-Vergleich
        else if (correctClean.includes(userClean) && userClean.length >= 3) {
            isCorrect = true;
            explanation = 'Enthält die richtige Antwort';
        }
        // Umgekehrt
        else if (userClean.includes(correctClean) && correctClean.length >= 3) {
            isCorrect = true;
            explanation = 'Enthält wichtige Aspekte der richtigen Antwort';
        }
        else {
            isCorrect = false;
            explanation = 'Entspricht nicht der erwarteten Antwort';
        }
        
        return {
            isCorrect: isCorrect,
            explanation: explanation,
            method: 'local-fallback',
            userAnswer: userAnswer,
            correctAnswer: correctAnswer
        };
    },
    
    // MS-12: Status-Info für UI
    getStatus() {
        return {
            configured: this.isConfigured,
            available: this.isAvailable,
            lastError: this.lastError,
            usingFallback: !this.isAvailable
        };
    }
};