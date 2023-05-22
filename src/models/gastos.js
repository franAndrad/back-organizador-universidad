import mongoose, {Schema} from "mongoose";

const gastosSchema = new Schema({
    usuario:{
        type:String,
        required: true,
        minlength: 4,
        maxlength: 30
    },
    fecha:{
        type:String,
        required: true
    },
    producto:{
        type: String,
        required: true,
        minlength: 2,
        maxlength: 60,
    },
    precio:{
        type: Number,
        required: true,
        min:0,
        max: 9999
    }
});

const Gastos = mongoose.model('gastos', gastosSchema);
export default Gastos;