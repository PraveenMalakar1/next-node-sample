"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const instock_1 = __importDefault(require("./routes/instock"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api', instock_1.default);
const PORT = process.env.PORT || 5000;
app.get('/api/hello', (_req, res) => {
    res.json({ message: 'Hello from backend!' });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
