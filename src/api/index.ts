import express from 'express';

const router = express.Router();

router.get<{}, any>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

export default router;
