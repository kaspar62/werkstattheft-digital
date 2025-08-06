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
        // Input Validierung
        if (!username || !password) {
            return { 
                success: false, 
                error: 'Bitte alle Felder ausfüllen' 
            };
        }
        
        // Benutzer suchen
        const user = this.users.find(u => 
            u.name.toLowerCase() === username.toLowerCase() && 
            u.password === password
        );
        
        if (user) {
            this.currentUser = { ...user };
            delete this.currentUser.password;
            Storage.saveUser(this.currentUser);
            return { success: true, user: this.currentUser };
        }
        
        return { success: false, error: 'Falscher Benutzername oder Passwort' };
    },
    
    // Auto-Login prüfen
    checkAutoLogin() {
        const savedUser = Storage.getUser();
        if (savedUser) {
            this.currentUser = savedUser;
            return true;
        }
        return false;
    },
    
    // Benutzer abrufen
    getUser() {
        return this.currentUser;
    },
    
    // Logout
    logout() {
        this.currentUser = null;
        Storage.clearAll();
    }
};