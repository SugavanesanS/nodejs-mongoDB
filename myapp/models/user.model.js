import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
    {
        name: { type: String, trim: true, unique: [true,"Name already exists, please use another name"] },
        email: { type: String, required: true, unique: [true,"Email already exists, please use another email"] },
        password: { type: String, required: true, minlength: [6, "Password must be at least 10 characters"] },
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model("User", userSchema);
