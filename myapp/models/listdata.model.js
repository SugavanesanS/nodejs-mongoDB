import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
    {
        "id": { type: String, required: true, unique: true },
        "image": { type: String, required: false },
        "coffeName": { type: String, required: true },
        "ingredient": { type: String, required: true },
        "price": { type: Number, required: true },
        "cartStatus": { type: Boolean, required: true },
        "isfavorite": { type: Boolean, required: true },
        "iscart": { type: Boolean, required: true },
        "size": {
            type: String, required: true,
            validator: function (v) {
                return ['small', 'medium', 'large'].includes(v);
            },
            message: props => `${props.value} is not a valid size`
        }
    },
    {
        timestamps: true
    }
)

const listDataSchema = new mongoose.Schema({
    cappucino: [ItemSchema],
    latte: [ItemSchema],
    espresso: [ItemSchema],
    americano: [ItemSchema],
},
    {
        collection: "listdata"
    })

export default mongoose.model("ListData", listDataSchema);