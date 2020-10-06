import {Request, Response, Router} from 'express';
import Post from '../models/Post';
class PostRoutes{
    router: Router;
    constructor(){
        this.router=Router();
        this.routes();
    }

    public async getPosts(req: Request, res: Response){
        const posts= await Post.find();
        res.json(posts);
    }

    async getPost(req: Request, res:Response):Promise<void>{
        const post=await Post.findOne({url:req.params.url});
        res.json(post);
    }

    async deletePost(req: Request, res:Response){
        const {url}=req.params;
        await Post.findOneAndDelete({url});
        res.json({response: 'Post Deleted'});
    }

    async createPost(req: Request, res:Response){
        const{title,url,content,image}=req.body;
        const newPost= new Post({title,url, content,image});
        await newPost.save(); 
        res.json({data: newPost});
    }

    async updatePost(req: Request, res:Response){
        const {url}=req.params;
        const post= await Post.findOneAndUpdate({url}, req.body,{new:true});
        res.json(post);
    }

    routes(){
        this.router.get('/', this.getPosts);
        this.router.get('/:url', this.getPost);
        this.router.post('/', this.createPost);
        this.router.put('/:url',this.updatePost);
        this.router.delete('/:url',this.deletePost);
    }
}
const postroutes= new PostRoutes();
export default postroutes.router;