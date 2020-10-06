"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Letter_1 = __importDefault(require("../models/Letter"));
class LetterRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    getLetters(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const letters = yield Letter_1.default.find();
            res.json(letters);
        });
    }
    getLetter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const letter = yield Letter_1.default.findOne({ username: req.params.username }).populate('sender', 'username');
            res.json(letter);
        });
    }
    createLetter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newLetter = new Letter_1.default(req.body); //revisa
            yield newLetter.save();
            res.json({ data: newLetter });
        });
    }
    routes() {
        this.router.get('/', this.getLetters);
        this.router.get('/:username', this.getLetter);
        this.router.post('/', this.createLetter);
    }
}
const letterroutes = new LetterRoutes();
exports.default = letterroutes.router;
