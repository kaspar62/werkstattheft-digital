// Auth Module - Mit GitHub Gist Integration
const Auth = {
    // Fallback Benutzer (falls Gist nicht erreichbar)
    users: [
        { name: 'Demo User', class: 'Demo', password: 'demo123' }
    ],
    
    // Gist URL - Live-Daten von GitHub Gist
    gistUrl: 'https://gist.githubusercontent.com/kaspar62/f46f16d621bef3f4998297ba3f2c2d7a/raw/ea84a22061475fd3ad2dfcbe81872a50dafc52f6/werkstattheft-users.json',
    
    // Aktueller Benutzer
    currentUser: null,
    
    // Initialisierung - Lade Benutzer vom Gist
    async init() {
        try {
            console.log('Lade Benutzerdaten...');
            const response = await fetch(this.gistUrl);
            
            if (response.ok) {
                const data = await response.json();
                this.users = data.users;
                console.log(`${this.users.length} Benutzer geladen`);
            } else {
                console.warn('Gist nicht erreichbar, verwende Fallback');
            }
        } catch (error) {
            console.error('Fehler beim Laden der Benutzerdaten:', error);
            console.warn('Verwende Fallback-Benutzer');
        }
    },
    
    // Login Funktion (unverändert)
    login(username, password) {
        if (!username || typeof username !== 'string' || username.trim() === '') {
            return { 
                success: false, 
                error: 'Bitte Namen eingeben' 
            };
        }
        
        if (!password || typeof password !== 'string' || password.trim() === '') {
            return { 
                success: false, 
                error: 'Bitte Passwort eingeben' 
            };
        }
        
        const cleanUsername = username.trim();
        const cleanPassword = password.trim();
        
        const user = this.users.find(u => {
            if (!u.name || !u.password) {
                console.warn('Invalid user data found:', u);
                return false;
            }
            return u.name.toLowerCase().trim() === cleanUsername.toLowerCase() && 
                   u.password === cleanPassword;
        });
        
        if (user) {
            this.currentUser = { 
                name: user.name,
                class: user.class
            };
            
            try {
                Storage.saveUser(this.currentUser);
                return { success: true, user: this.currentUser };
            } catch (error) {
                console.error('Failed to save user:', error);
                return { 
                    success: false, 
                    error: 'Fehler beim Speichern. Bitte erneut versuchen.' 
                };
            }
        }
        
        return { success: false, error: 'Falscher Benutzername oder Passwort' };
    },
    
    // Auto-Login prüfen
    checkAutoLogin() {
        try {
            const savedUser = Storage.getUser();
            if (savedUser && savedUser.name && savedUser.class) {
                this.currentUser = {
                    name: savedUser.name,
                    class: savedUser.class
                };
                return true;
            }
        } catch (error) {
            console.error('Auto-login failed:', error);
            try {
                Storage.clearUser();
            } catch (clearError) {
                console.error('Failed to clear corrupted user data:', clearError);
            }
        }
        return false;
    },
    
    // Benutzer abrufen
    getUser() {
        return this.currentUser ? { ...this.currentUser } : null;
    },
    
    // Validiere aktuellen User
    isAuthenticated() {
        return this.currentUser !== null && 
               this.currentUser.name && 
               this.currentUser.class;
    },
    
    // Logout
    logout() {
        this.currentUser = null;
        try {
            Storage.clearAll();
        } catch (error) {
            console.error('Logout cleanup failed:', error);
            try {
                Storage.clearUser();
            } catch (clearError) {
                console.error('Failed to clear user data:', clearError);
            }
        }
    }
};

// Initialisiere Auth beim Laden
window.addEventListener('DOMContentLoaded', async () => {
    await Auth.init();
});