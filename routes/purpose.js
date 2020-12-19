import express from 'express'
import { getUsers, registerUsers } from '../controllers/users.js'
import {getPurposes,addPurpose} from '../controllers/purpose.js'

const router = express.Router();

router.get('/', getPurposes);
router.post('/',addPurpose);

export default router;