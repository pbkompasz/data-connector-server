import express from 'express'
import Controller from './controller'
import auth from "../../../../middleware/auth";
import CONFIG from "../../../../config"

const router = express.Router()

router.get('/', auth(), Controller.connections)
router.post('/sync', auth(), Controller.sync)
router.post('/:connectionId/sync', auth(), Controller.syncConnection)
router.put('/:connectionId', auth(), Controller.update)
router.delete('/:connectionId', auth(), Controller.disconnect)
router.get('/profiles', auth({
    scopes: ["api:connections-profiles"],
    credits: 0
}), Controller.profiles)
router.get('/status', auth({
    scopes: ["api:connections-status"],
    credits: 0
}), Controller.status)

export default router