import mongoose from "mongoose";

const CoffeeDataSchema = new mongoose.Schema({
    id: { type: String, required: true },
    coffeName: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    size: {
        type: String, required: true,
        validator: function (value) {
            return ['small', 'medium', 'large'].includes(value);
        },
        message: props => `${props.value} is not a valid size`

    },
},
    { timestamps: true },
    {
        collection: "coffee"
    }
)

export default mongoose.model("Coffee", CoffeeDataSchema);