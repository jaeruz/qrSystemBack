import express from 'express'
import { getUsers, registerUsers } from '../controllers/users.js'


const router = express.Router();

router.get('/', getUsers);
router.post('/',registerUsers);

export default router;