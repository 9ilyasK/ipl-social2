export function validerEmail(email: string): boolean {
    if (email.includes(" ")) return false;
    
    if (email.indexOf("@") === -1) return false; // Ajout
    
    return true;
}