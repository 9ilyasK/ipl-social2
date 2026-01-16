export function validerEmail(email: string): boolean {
    if (email.includes(" ")) return false;
    if (email.indexOf("@") === -1) return false;

    const parties = email.split("@");
    if (parties.length !== 2) return false; 
    const [avant, apres] = parties;
    
    if (avant.length === 0 || apres.length === 0) return false;

    return true;
}