//user model and schema
import mongoose, {model, Schema} from 'mongoose';

mongoose.connect('mongodb://localhost:27017/secondbrainapp')

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String,

})

export const UserModel = model("User", UserSchema);

const contentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Types.ObjectId,ref : 'Tag'}],
    userId: {type: mongoose.Types.ObjectId,ref : 'User', required  : true,}
})

export const ContentModel = model("Content", contentSchema);