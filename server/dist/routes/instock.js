"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const promises_1 = __importDefault(require("fs/promises"));
const router = (0, express_1.Router)();
router.get('/instock-cars', async (_req, res) => {
    try {
        const dataPath = path_1.default.join(__dirname, '../data/instock.json');
        const jsonData = await promises_1.default.readFile(dataPath, 'utf-8');
        const cars = JSON.parse(jsonData);
        res.json({ ...cars });
    }
    catch (error) {
        console.error('Error reading instock.json:', error);
        res.status(500).json({ error: 'Failed to read instock cars data' });
    }
});
exports.default = router;
