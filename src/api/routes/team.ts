import { createTeam, getTeamById } from "@api/controllers/team";
import { Router } from "express";

const router = Router();

router.post("/create-team", async (request, response) => 
    createTeam(request, response))

router.get("/:team_id", async (request, response) => 
    getTeamById(request, response))

export default router;