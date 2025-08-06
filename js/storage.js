// Storage Module - Verwaltung von localStorage
const Storage = {
    // Prefix für alle Storage Keys
    prefix: 'werkbuch_',
    
    // User Session speichern
    saveUser(userData) {
        try {
            if (!userData || typeof userData !== 'object') {
                throw new Error('Invalid user data');
            }
            localStorage.setItem(this.prefix + 'user', JSON.stringify(userData));
        } catch (error) {
            console.error('MS-15: Failed to save user:', error);
            throw error;
        }
    },
    
    // User Session laden
    getUser() {
        try {
            const data = localStorage.getItem(this.prefix + 'user');
            if (!data) return null;
            
            const userData = JSON.parse(data);
            // MS-15: Validate loaded data structure
            if (!userData || typeof userData !== 'object' || !userData.name) {
                console.warn('MS-15: Invalid user data found, clearing');
                this.clearUser();
                return null;
            }
            return userData;
        } catch (error) {
            console.error('MS-15: Failed to load user:', error);
            this.clearUser();
            return null;
        }
    },
    
    // Arbeitsbuch Daten speichern - MS-09 erweitert für Inputs und Canvas
    saveWorkbookData(pageId, data) {
        try {
            if (!pageId || typeof pageId !== 'string') {
                throw new Error('Invalid pageId');
            }
            if (!data || typeof data !== 'object') {
                throw new Error('Invalid data object');
            }
            
            const key = this.prefix + 'workbook_' + pageId;
            // MS-15: Validate data structure
            const validData = {
                timestamp: data.timestamp || new Date().toISOString(),
                inputs: data.inputs || {},
                canvases: data.canvases || {}
            };
            
            localStorage.setItem(key, JSON.stringify(validData));
        } catch (error) {
            console.error('MS-15: Failed to save workbook data:', error);
            throw error;
        }
    },
    
    // Arbeitsbuch Daten laden
    getWorkbookData(pageId) {
        try {
            if (!pageId || typeof pageId !== 'string') {
                return null;
            }
            
            const key = this.prefix + 'workbook_' + pageId;
            const data = localStorage.getItem(key);
            if (!data) return null;
            
            const parsed = JSON.parse(data);
            // MS-15: Ensure data structure integrity
            return {
                timestamp: parsed.timestamp || new Date().toISOString(),
                inputs: parsed.inputs || {},
                canvases: parsed.canvases || {}
            };
        } catch (error) {
            console.error('MS-15: Failed to load workbook data:', error);
            return null;
        }
    },
    
    // MS-09: Canvas-Zeichnung speichern
    saveCanvasData(pageId, canvasId, dataURL) {
        try {
            if (!pageId || !canvasId || typeof pageId !== 'string' || typeof canvasId !== 'string') {
                throw new Error('Invalid pageId or canvasId');
            }
            if (!dataURL || !dataURL.startsWith('data:image/')) {
                throw new Error('Invalid canvas data URL');
            }
            
            const key = this.prefix + 'canvas_' + pageId + '_' + canvasId;
            localStorage.setItem(key, dataURL);
        } catch (error) {
            console.error('MS-15: Failed to save canvas data:', error);
            throw error;
        }
    },
    
    // MS-09: Canvas-Zeichnung laden
    getCanvasData(pageId, canvasId) {
        try {
            if (!pageId || !canvasId || typeof pageId !== 'string' || typeof canvasId !== 'string') {
                return null;
            }
            
            const key = this.prefix + 'canvas_' + pageId + '_' + canvasId;
            const data = localStorage.getItem(key);
            
            // MS-15: Validate canvas data
            if (data && !data.startsWith('data:image/')) {
                console.warn('MS-15: Invalid canvas data found, clearing');
                localStorage.removeItem(key);
                return null;
            }
            
            return data;
        } catch (error) {
            console.error('MS-15: Failed to load canvas data:', error);
            return null;
        }
    },
    
    // MS-09: Alle Canvas-Daten für eine Seite löschen
    clearCanvasData(pageId) {
        try {
            if (!pageId || typeof pageId !== 'string') {
                console.warn('MS-15: Invalid pageId for canvas cleanup');
                return;
            }
            
            const keys = Object.keys(localStorage);
            const canvasPrefix = this.prefix + 'canvas_' + pageId + '_';
            let cleared = 0;
            
            keys.forEach(key => {
                if (key.startsWith(canvasPrefix)) {
                    try {
                        localStorage.removeItem(key);
                        cleared++;
                    } catch (error) {
                        console.error('MS-15: Failed to remove canvas data:', key, error);
                    }
                }
            });
            
            console.log(`MS-15: Cleared ${cleared} canvas items for page ${pageId}`);
        } catch (error) {
            console.error('MS-15: Failed to clear canvas data:', error);
        }
    },
    
    // Fortschritt speichern
    saveProgress(progress) {
        try {
            if (!progress || typeof progress !== 'object') {
                throw new Error('Invalid progress data');
            }
            
            // MS-15: Validate progress structure
            const validProgress = {
                completed: Array.isArray(progress.completed) ? progress.completed : [],
                scores: progress.scores && typeof progress.scores === 'object' ? progress.scores : {},
                timestamp: progress.timestamp || new Date().toISOString()
            };
            
            localStorage.setItem(this.prefix + 'progress', JSON.stringify(validProgress));
        } catch (error) {
            console.error('MS-15: Failed to save progress:', error);
            throw error;
        }
    },
    
    // Fortschritt laden
    getProgress() {
        try {
            const data = localStorage.getItem(this.prefix + 'progress');
            if (!data) {
                return { completed: [], scores: {}, timestamp: new Date().toISOString() };
            }
            
            const progress = JSON.parse(data);
            // MS-15: Ensure valid structure
            return {
                completed: Array.isArray(progress.completed) ? progress.completed : [],
                scores: progress.scores && typeof progress.scores === 'object' ? progress.scores : {},
                timestamp: progress.timestamp || new Date().toISOString()
            };
        } catch (error) {
            console.error('MS-15: Failed to load progress, returning defaults:', error);
            return { completed: [], scores: {}, timestamp: new Date().toISOString() };
        }
    },
    
    // Prüfungsdaten speichern
    saveExamData(examData) {
        try {
            if (!examData || typeof examData !== 'object') {
                throw new Error('Invalid exam data');
            }
            
            // MS-15: Validate exam structure
            const validExamData = {
                answers: examData.answers && typeof examData.answers === 'object' ? examData.answers : {},
                learned: examData.learned && typeof examData.learned === 'object' ? examData.learned : {},
                timestamp: examData.timestamp || new Date().toISOString()
            };
            
            localStorage.setItem(this.prefix + 'exam', JSON.stringify(validExamData));
        } catch (error) {
            console.error('MS-15: Failed to save exam data:', error);
            throw error;
        }
    },
    
    // Prüfungsdaten laden
    getExamData() {
        try {
            const data = localStorage.getItem(this.prefix + 'exam');
            if (!data) {
                return { answers: {}, learned: {}, timestamp: new Date().toISOString() };
            }
            
            const examData = JSON.parse(data);
            // MS-15: Ensure valid structure
            return {
                answers: examData.answers && typeof examData.answers === 'object' ? examData.answers : {},
                learned: examData.learned && typeof examData.learned === 'object' ? examData.learned : {},
                timestamp: examData.timestamp || new Date().toISOString()
            };
        } catch (error) {
            console.error('MS-15: Failed to load exam data, returning defaults:', error);
            return { answers: {}, learned: {}, timestamp: new Date().toISOString() };
        }
    },
    
    // Alle Arbeitsbuch-Daten laden (MS-04)
    getAllWorkbookData() {
        try {
            const keys = Object.keys(localStorage);
            const workbookData = {};
            let loadedCount = 0;
            
            keys.forEach(key => {
                if (key.startsWith(this.prefix + 'workbook_')) {
                    try {
                        const pageId = key.replace(this.prefix + 'workbook_', '');
                        const data = localStorage.getItem(key);
                        if (data) {
                            const parsed = JSON.parse(data);
                            // MS-15: Validate structure before adding
                            workbookData[pageId] = {
                                timestamp: parsed.timestamp || new Date().toISOString(),
                                inputs: parsed.inputs || {},
                                canvases: parsed.canvases || {}
                            };
                            loadedCount++;
                        }
                    } catch (error) {
                        console.error('MS-15: Failed to load workbook data for key:', key, error);
                    }
                }
            });
            
            console.log(`MS-15: Loaded ${loadedCount} workbook pages`);
            return workbookData;
        } catch (error) {
            console.error('MS-15: Failed to load all workbook data:', error);
            return {};
        }
    },
    
    // Alle Daten löschen
    clearAll() {
        try {
            const keys = Object.keys(localStorage);
            let cleared = 0;
            
            keys.forEach(key => {
                if (key.startsWith(this.prefix)) {
                    try {
                        localStorage.removeItem(key);
                        cleared++;
                    } catch (error) {
                        console.error('MS-15: Failed to remove key:', key, error);
                    }
                }
            });
            
            console.log(`MS-15: Cleared ${cleared} storage items`);
        } catch (error) {
            console.error('MS-15: Failed to clear all data:', error);
            throw error;
        }
    },
    
    // MS-15: Clear specific user data
    clearUser() {
        try {
            localStorage.removeItem(this.prefix + 'user');
        } catch (error) {
            console.error('MS-15: Failed to clear user data:', error);
        }
    }
};