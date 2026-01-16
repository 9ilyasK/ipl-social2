import { validerEmail } from './email';

describe('Validation Email TDD', () => {
    test('Doit valider un email simple et correct', () => {
        expect(validerEmail("eleve@vinci.be")).toBe(true);
    });

    test('Doit rejeter les emails avec espaces', () => {
        expect(validerEmail("eleve @vinci.be")).toBe(false);
    });

    test('Doit rejeter si pas de @', () => {
        expect(validerEmail("elevevinci.be")).toBe(false);
    });

    test('Doit rejeter si rien avant ou après le @', () => {
        expect(validerEmail("@vinci.be")).toBe(false);
        expect(validerEmail("eleve@")).toBe(false);
    });

    test('Doit avoir un point dans le domaine mais pas à la fin', () => {
        expect(validerEmail("eleve@vinci")).toBe(false);
        expect(validerEmail("eleve@vinci.")).toBe(false);
    });
});
