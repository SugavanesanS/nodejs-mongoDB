
import mongoose from "mongoose";
import ListData from "../models/listdata.model.js";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";
import Coffee from "../models/coffee.modal.js";

dotenv.config();


// Fix for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



// async function insertFromFile() {
//     try {

//         console.log({ __filename, __dirname })
//         // Read JSON file
//         const filePath = path.join(__dirname, "coffee.json");

//         const rawData = fs.readFileSync(filePath, "utf8");
//         const jsonArray = JSON.parse(rawData);   // This becomes your array

//         await mongoose.connect(process.env.MONGO_URI);

//         const result = await ListData.insertMany(jsonArray);
//         console.log("Inserted:", result.length);

//         process.exit();
//     } catch (err) {
//         console.error(err);
//     }
// }

// insertFromFile();

async function insertArrayofObjects() {
    try {
        console.log({ __filename, __dirname })
        // Read JSON file
        const filePath = path.join(__dirname, "coffee.json");

        const rawData = fs.readFileSync(filePath, "utf8");
        const CoffeeArray = JSON.parse(rawData);   // This becomes your array

        await mongoose.connect(process.env.MONGO_URI);

        console.log({ CoffeeArray })

        const ops = CoffeeArray?.Coffees.map(item => ({
            updateOne: {
                filter: { id: item.id },
                update: { $set: item },
                upsert: true
            }
        }));

        await Coffee.bulkWrite(ops);

        console.log("Database updated from JSON file!");

        process.exit();
    } catch (err) {
        console.error(err);
    }
}

insertArrayofObjects();
