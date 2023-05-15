import { addUser } from "../controllers/UserController.js";

const UserRouter = express.Router();


CategoryRouter.get('/user/add',addUser)

export default UserRouter;