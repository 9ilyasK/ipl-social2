export function validerEmail(email: string): boolean {
    if (email.includes(" ")) return false; 
    return true;
}