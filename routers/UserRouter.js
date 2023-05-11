import { addUser } from "../controllers/UserController.js";

const UserRouter = express.Router();


CategoryRouter.get('/User/add',addUser)

export default UserRouter;