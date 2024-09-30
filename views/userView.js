export class UserView {
    static render(viewName, data) {
        if (viewName === 'loginSuccess') {
            console.log(`¡Bienvenido ${data.user.username}! Has iniciado sesión correctamente.`);
        } else if (viewName === 'loginFailure') {
            console.log('El inicio de sesión ha fallado. Por favor, verifica tus credenciales.');
        }
    }
}