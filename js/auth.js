// Auth Module - Einfache Authentifizierung
const Auth = {
    // Test-Benutzer
    users: [
        { name: 'Kaspar Haessig', class: 'B26c', password: '001b26c' },
        { name: 'Kim Kellerman', class: 'B26b', password: '001b26b' },
        { name: 'Heike Beer', class: 'B26b', password: '002b26b' }
    ],
    
    // Aktueller Benutzer
    currentUser: null,
    
    // Login Funktion
    login(username, password) {
        // MS-15: Verbesserte Input Validierung
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
        
        // MS-15: Sichere String-Behandlung
        const cleanUsername = username.trim();
        const cleanPassword = password.trim();
        
        // Benutzer suchen mit robusterer Vergleichslogik
        const user = this.users.find(u => {
            if (!u.name || !u.password) {
                console.warn('MS-15: Invalid user data found:', u);
                return false;
            }
            return u.name.toLowerCase().trim() === cleanUsername.toLowerCase() && 
                   u.password === cleanPassword;
        });
        
        if (user) {
            // MS-15: Sichere User-Objekterstellung
            this.currentUser = { 
                name: user.name,
                class: user.class
            };
            
            // MS-15: Error-Handling für Storage
            try {
                Storage.saveUser(this.currentUser);
                return { success: true, user: this.currentUser };
            } catch (error) {
                console.error('MS-15: Failed to save user:', error);
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
                // MS-15: Validiere gespeicherte User-Daten
                this.currentUser = {
                    name: savedUser.name,
                    class: savedUser.class
                };
                return true;
            }
        } catch (error) {
            console.error('MS-15: Auto-login failed:', error);
            // MS-15: Clear corrupted data
            try {
                Storage.clearUser();
            } catch (clearError) {
                console.error('MS-15: Failed to clear corrupted user data:', clearError);
            }
        }
        return false;
    },
    
    // Benutzer abrufen
    getUser() {
        // MS-15: Defensive Kopie zurückgeben
        return this.currentUser ? { ...this.currentUser } : null;
    },
    
    // MS-15: Validiere aktuellen User
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
            console.error('MS-15: Logout cleanup failed:', error);
            // Try alternative cleanup
            try {
                Storage.clearUser();
            } catch (clearError) {
                console.error('MS-15: Failed to clear user data:', clearError);
            }
        }
    }
};