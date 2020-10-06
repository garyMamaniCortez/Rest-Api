"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LetterSchema = new mongoose_1.Schema({
    sender: { type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User' },
    addressee: { type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User' },
    massage: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
exports.default = mongoose_1.model('Letter', LetterSchema);
