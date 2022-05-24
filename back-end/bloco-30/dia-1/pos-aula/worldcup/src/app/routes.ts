import { Router } from 'express';
import TournamentCtrl from '../controllers/TournamentCtrl';

const tournament = new TournamentCtrl();
const router = Router();

router.get('/worldcups', tournament.getTournaments);

export default router;