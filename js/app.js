// Main App Module - Hauptanwendungslogik
const App = {
    // App initialisieren
    init() {
        // Auto-Login prüfen
        if (Auth.checkAutoLogin()) {
            this.showMainApp();
        } else {
            this.setupLoginForm();
        }
        
        // Event Listener für Navigation
        this.setupNavigation();
    },
    
    // Login Form Setup
    setupLoginForm() {
        const loginBtn = document.getElementById('loginBtn');
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        
        loginBtn.addEventListener('click', () => this.handleLogin());
        
        // Enter-Taste Support
        [usernameInput, passwordInput].forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleLogin();
                }
            });
        });
    },
    
    // Login verarbeiten
    handleLogin() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const errorDiv = document.getElementById('loginError');
        const loginBtn = document.getElementById('loginBtn');
        const loginForm = document.querySelector('.login-form');
        
        if (!username || !password) {
            errorDiv.textContent = 'Bitte Name und Passwort eingeben';
            errorDiv.classList.add('show');
            loginForm.classList.add('shake');
            setTimeout(() => loginForm.classList.remove('shake'), 500);
            return;
        }
        
        // Loading-Animation starten
        loginBtn.classList.add('loading');
        loginBtn.disabled = true;
        errorDiv.classList.remove('show');
        
        // Simuliere kurze Verzögerung für bessere UX
        setTimeout(() => {
            const result = Auth.login(username, password);
            
            loginBtn.classList.remove('loading');
            loginBtn.disabled = false;
            
            if (result.success) {
                // Erfolgs-Animation
                loginForm.classList.add('login-success');
                setTimeout(() => {
                    this.showMainApp();
                }, 300);
            } else {
                // Fehler-Animation
                errorDiv.textContent = result.error;
                errorDiv.classList.add('show');
                loginForm.classList.add('shake');
                setTimeout(() => loginForm.classList.remove('shake'), 500);
            }
        }, 800);
    },
    
    // Hauptanwendung anzeigen
    showMainApp() {
        const user = Auth.getUser();
        
        // Screens wechseln
        document.getElementById('loginScreen').classList.remove('active');
        document.getElementById('mainApp').classList.add('active');
        
        // Benutzerinfo anzeigen
        document.getElementById('userName').textContent = user.name;
        document.getElementById('userClass').textContent = user.class;
        
        // Startseite Benutzerinfo
        document.querySelectorAll('.user-name-display').forEach(el => {
            el.textContent = user.name;
        });
        document.querySelectorAll('.user-class-display').forEach(el => {
            el.textContent = user.class;
        });
        
        // Login-Zeit anzeigen (MS-04 Profil-Info)
        const now = new Date();
        const timeString = now.toLocaleTimeString('de-DE', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        const loginTimeEl = document.getElementById('loginTime');
        if (loginTimeEl) {
            loginTimeEl.textContent = timeString;
        }
        
        // Module initialisieren
        Progress.init();
        Exam.init();
        
        // Workbook Menü initialisieren
        Workbook.initMenu();
        
        // Fortschritt anzeigen
        Progress.updateDisplay();
        
        // Homepage Statistiken aktualisieren (MS-04)
        this.updateHomepageStats();
        
        // Navigation aktivieren
        this.activateNavigation();
    },
    
    // Navigation Setup
    setupNavigation() {
        const navButtons = document.querySelectorAll('.nav-btn');
        
        navButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const section = btn.dataset.section;
                this.navigateTo(section);
            });
        });
    },
    
    // Navigation aktivieren nach Login
    activateNavigation() {
        // Erste Tab als aktiv setzen
        this.navigateTo('start');
    },
    
    // Navigation zu Section
    navigateTo(section) {
        console.log('MS-03: Navigating to:', section);
        
        // Navigation Buttons aktualisieren
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.section === section);
        });
        
        // Sections aktualisieren
        document.querySelectorAll('.content-section').forEach(sec => {
            sec.classList.remove('active');
        });
        
        const targetSection = document.getElementById(section + 'Section');
        if (targetSection) {
            targetSection.classList.add('active');
            console.log('MS-03: Section activated:', section);
            
            // Spezielle Aktionen pro Section (MINIMAL für MS-03)
            switch(section) {
                case 'exam':
                    // Nur Platzhalter für MS-03
                    const examContent = document.getElementById('examContent');
                    if (examContent && !examContent.hasChildNodes()) {
                        examContent.innerHTML = '<p>Prüfungsbereich - Layout bereit für MS-11</p><p><small>Umlaut-Test: Größe, Rückgabe, Prüfung, Lösung, Wärme, Stärke</small></p>';
                    }
                    break;
                case 'progress':
                    // Nur Basis-Anzeige für MS-03
                    Progress.updateDisplay();
                    break;
                case 'workbook':
                    // Menu initialisieren für MS-03
                    Workbook.initMenu();
                    break;
                case 'start':
                    // Start ist bereits komplett
                    break;
            }
        } else {
            console.error('MS-03: Section not found:', section + 'Section');
        }
    },
    
    // Homepage Statistiken aktualisieren (MS-04)
    updateHomepageStats() {
        const completedTopicsEl = document.getElementById('completedTopics');
        const progressPercentEl = document.getElementById('progressPercent');
        
        if (completedTopicsEl && progressPercentEl) {
            // Einfache Berechnung basierend auf gespeicherten Daten
            const workbookData = Storage.getAllWorkbookData();
            const totalTopics = Workbook.topics.length;
            const completedCount = Object.keys(workbookData).length;
            const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
            
            completedTopicsEl.textContent = completedCount;
            progressPercentEl.textContent = progressPercent + '%';
        }
    }
};

// App starten wenn DOM geladen
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});