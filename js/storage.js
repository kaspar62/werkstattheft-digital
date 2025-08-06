// Storage Module - Verwaltung von localStorage
const Storage = {
    // Prefix für alle Storage Keys
    prefix: 'werkbuch_',
    
    // User Session speichern
    saveUser(userData) {
        localStorage.setItem(this.prefix + 'user', JSON.stringify(userData));
    },
    
    // User Session laden
    getUser() {
        const data = localStorage.getItem(this.prefix + 'user');
        return data ? JSON.parse(data) : null;
    },
    
    // Arbeitsbuch Daten speichern
    saveWorkbookData(pageId, data) {
        const key = this.prefix + 'workbook_' + pageId;
        localStorage.setItem(key, JSON.stringify(data));
    },
    
    // Arbeitsbuch Daten laden
    getWorkbookData(pageId) {
        const key = this.prefix + 'workbook_' + pageId;
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    },
    
    // Fortschritt speichern
    saveProgress(progress) {
        localStorage.setItem(this.prefix + 'progress', JSON.stringify(progress));
    },
    
    // Fortschritt laden
    getProgress() {
        const data = localStorage.getItem(this.prefix + 'progress');
        return data ? JSON.parse(data) : { completed: [], scores: {} };
    },
    
    // Prüfungsdaten speichern
    saveExamData(examData) {
        localStorage.setItem(this.prefix + 'exam', JSON.stringify(examData));
    },
    
    // Prüfungsdaten laden
    getExamData() {
        const data = localStorage.getItem(this.prefix + 'exam');
        return data ? JSON.parse(data) : { answers: {}, learned: {} };
    },
    
    // Alle Arbeitsbuch-Daten laden (MS-04)
    getAllWorkbookData() {
        const keys = Object.keys(localStorage);
        const workbookData = {};
        
        keys.forEach(key => {
            if (key.startsWith(this.prefix + 'workbook_')) {
                const pageId = key.replace(this.prefix + 'workbook_', '');
                const data = localStorage.getItem(key);
                if (data) {
                    workbookData[pageId] = JSON.parse(data);
                }
            }
        });
        
        return workbookData;
    },
    
    // Alle Daten löschen
    clearAll() {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith(this.prefix)) {
                localStorage.removeItem(key);
            }
        });
    }
};