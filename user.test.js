const User = require('./user');

test('Doit créer un user', () => {
    const user = new User("Ilyas", "Etudiant");
    expect(user.nom).toBe("Ilyas");
});