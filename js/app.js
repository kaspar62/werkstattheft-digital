// Main App Module - Hauptanwendungslogik
const App = {
    // App initialisieren
    async init() {
        // WICHTIG: Warte auf Auth-Initialisierung
        await Auth.init();
        
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
        
        // Login-Zeit anzeigen
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
        // Workbook Menü initialisieren
        Workbook.initMenu();
        
        // Homepage Statistiken aktualisieren
        this.updateHomepageStats();
        
        // Zur Startseite navigieren
        this.navigateTo('start');
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
    
    // Navigation zu Section
    navigateTo(section) {
        console.log('Navigating to:', section);
        
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
            console.log('Section activated:', section);
            
            // Spezielle Aktionen pro Section
            switch(section) {
                case 'workbook':
                    // Menu initialisieren
                    Workbook.initMenu();
                    break;
                case 'start':
                    // Start ist bereits komplett
                    break;
            }
        } else {
            console.error('Section not found:', section + 'Section');
        }
    },
    
    // Homepage Statistiken aktualisieren
    updateHomepageStats() {
        const savedPagesEl = document.getElementById('savedPages');
        
        if (savedPagesEl) {
            // Zähle gespeicherte Seiten
            const workbookData = Storage.getAllWorkbookData();
            const savedCount = Object.keys(workbookData).length;
            
            savedPagesEl.textContent = savedCount;
        }
    },
    
    // Logout-Funktion
    logout() {
        // Auth-System logout
        Auth.logout();
        
        // Zurück zum Login-Screen
        document.getElementById('mainApp').classList.remove('active');
        document.getElementById('loginScreen').classList.add('active');
        
        // Login-Form zurücksetzen
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        document.getElementById('loginError').classList.remove('show');
    }
};

// App starten wenn DOM geladen
document.addEventListener('DOMContentLoaded', async () => {
    await App.init();
});