import express from 'express';
import { getUserInfo } from './users.controller.js';
import { deleteUserInfo } from './users.controller.js';

const router = express.Router();

router.route('/')
    .get(getUserInfo)
    .delete(deleteUserInfo)



export default router;