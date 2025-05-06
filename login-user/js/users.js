// Simulación de una base de datos de usuarios
const users = [
    {
        id: 1,
        username: 'user12345',
        password: 'contraseña12345',
        name: 'Usuario Demo',
        email: 'usuario@demo.com',
        role: 'user'
    },
    {
        id: 2,
        username: 'admin',
        password: 'admin123',
        name: 'Administrador',
        email: 'admin@cineplus.com',
        role: 'admin'
    }
];

// Función para validar usuario
function validateUser(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    return null;
}

// Función para simular obtención de datos del usuario
function getUserData(userId) {
    const user = users.find(u => u.id === userId);
    if (user) {
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
    return null;
}