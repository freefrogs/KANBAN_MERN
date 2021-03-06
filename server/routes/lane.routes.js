import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';

const router = new Router();

//get all lanes
router.route('/lanes').get(LaneController.getLanes);

//add new lane
router.route('/lanes').post(LaneController.addLane);

//delete lane by lane Id
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

//edit lane by lane Id
router.route('/lanes/:laneId').put(LaneController.editLane);

export default router;
