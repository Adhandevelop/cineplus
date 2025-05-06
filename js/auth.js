// Base de datos simulada de usuarios
const users = {
    'usuario@example.com': {
        password: 'usuario123',
        name: 'Usuario Normal',
        role: 'user'
    },
    'admin@example.com': {
        password: 'admin123',
        name: 'Administrador',
        role: 'admin'
    }
};

// Función para manejar el inicio de sesión
function login(email, password) {
    const user = users[email];
    if (user && user.password === password) {
        // Crear objeto de usuario sin la contraseña
        const userInfo = {
            name: user.name,
            email: email,
            role: user.role
        };
        // Guardar los datos del usuario en localStorage
        localStorage.setItem('user', JSON.stringify(userInfo));
        return userInfo;
    }
    return null;
}

// Función para verificar si el usuario está autenticado
function checkAuth() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
        return JSON.parse(userStr);
    }
    return null;
}

// Función para cerrar sesión
function logout() {
    localStorage.removeItem('user');
    // Redirigir según el rol del usuario
    const user = checkAuth();
    if (user && user.role === 'admin') {
        window.location.href = '../login admin/login.html';
    } else {
        window.location.href = '../inicio/index.html';
    }
}

// Función para verificar si el usuario es administrador
function isAdmin() {
    const user = checkAuth();
    return user && user.role === 'admin';
}

// Redirigir si no está autenticado como usuario normal
function requireAuth() {
    const user = checkAuth();
    if (!user) {
        window.location.href = '../login-user/login.html';
    } else if (user.role === 'admin') {
        window.location.href = '../admin/admin.html';
    }
    return user;
}

// Redirigir si no es administrador
function requireAdmin() {
    const user = checkAuth();
    if (!user || user.role !== 'admin') {
        window.location.href = '../login admin/login.html';
    }
    return user;
}

// Función para redirigir según el rol después del login
function redirectByRole(user) {
    if (user.role === 'admin') {
        window.location.href = '../admin/admin.html';
    } else {
        window.location.href = '../inicio/index.html';
    }
}