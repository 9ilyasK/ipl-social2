import { validerEmail } from './email';

describe('Validation Email TDD', () => {
    test('Doit valider un email simple et correct', () => {
        expect(validerEmail("eleve@vinci.be")).toBe(true);
    });
});