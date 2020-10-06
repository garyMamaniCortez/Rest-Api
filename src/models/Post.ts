import {Schema, model} from 'mongoose';

const PostSchema = new Schema({
    title: {type:String, required:true},
    url:{type:String, required:true, unique:true, lowercase:true},
    content:{type:String, required:true},
    image:String,//sera la url de la imagen
    createdAt:{type:Date,default:Date.now},
    updateAt:Date
})
export default model('Post', PostSchema);