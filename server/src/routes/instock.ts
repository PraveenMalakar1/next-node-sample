import { Router, Request, Response } from 'express';
import path from 'path';
import fs from 'fs/promises';

const router = Router();

router.get('/instock-cars', async (_req: Request, res: Response) => {
    try {
        const dataPath = path.join(__dirname, '../data/instock.json');
        const jsonData = await fs.readFile(dataPath, 'utf-8');
        const cars = JSON.parse(jsonData);
        res.json({ ...cars });
    } catch (error) {
        console.error('Error reading instock.json:', error);
        res.status(500).json({ error: 'Failed to read instock cars data' });
    }
});

export default router;
