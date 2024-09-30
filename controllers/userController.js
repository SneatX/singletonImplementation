import { UserModel } from '../models/userModel.js';
import { Logger } from '../utils/logger.js';

export class UserController {
    static async login(req, res) {
        const logger = Logger.getInstance();
        const user = await UserModel.getUser(req.username);

        if (user && user.password === req.password) {
            logger.logInfo(`Usuario ${req.username} ha iniciado sesión.`);
            res.render('loginSuccess', { user });
        } else {
            logger.logError(`Intento fallido de inicio de sesión para el usuario ${req.username}.`);
            res.render('loginFailure');
        }
    }
}

