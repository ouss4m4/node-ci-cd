import { Router } from "express";
const router = Router();

router.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

router.get("/ping", (req, res) => {
  res.send("pong");
});

router.get("/ecs", (req, res) => {
  res.send("running_bruv");
});

export default router;
