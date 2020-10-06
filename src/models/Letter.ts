import {Schema, model} from 'mongoose';

const LetterSchema = new Schema({
    sender:{type: Schema.Types.ObjectId,
        ref: 'User'},
    addressee:{type: Schema.Types.ObjectId,
        ref: 'User'},
    massage:{type:String, required:true},
    createdAt:{type:Date,default:Date.now}
})
export default model('Letter', LetterSchema);