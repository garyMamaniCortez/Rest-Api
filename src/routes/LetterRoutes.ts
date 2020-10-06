import {Request, Response, Router} from 'express';
import Letter from '../models/Letter';

class LetterRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    }

    public async getLetters(req: Request, res: Response){
        const letters= await Letter.find();
        res.json(letters);
    }

    async getLetter(req: Request, res:Response):Promise<void>{
        const letter=await Letter.findOne({username:req.params.username}).populate('sender','username');
        res.json(letter);
    }

    async createLetter(req: Request, res:Response){
        const newLetter= new Letter(req.body);//revisa
        await newLetter.save(); 
        res.json({data: newLetter});
    }

    routes(){
        this.router.get('/', this.getLetters);
        this.router.get('/:username', this.getLetter);
        this.router.post('/', this.createLetter);
    }
}
const letterroutes= new LetterRoutes();
export default letterroutes.router;