import express from 'express'
import { saveCode } from '../controller/compilerController';
export const compilerRouter = express.Router();

compilerRouter.post('/save',saveCode)