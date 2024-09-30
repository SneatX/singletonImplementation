import { UserController } from './controllers/userController.js'
import { UserView } from './views/userView.js'
import { Logger } from './utils/logger.js'

const req = { username: 'santiago', password: '1878' }
const res = {
    render: (viewName, data) => UserView.render(viewName, data),
}

UserController.login(req, res)
UserController.login(req, res)

setTimeout(() => {
    Logger.getInstance().showLogs();    
}, 2000);
