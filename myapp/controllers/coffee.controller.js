import coffeeModal from "../models/coffee.modal.js";

export const getCoffees = async (req, res) => {
    try {
        const coffees = await coffeeModal.find();
        if (!coffees) return res.status(404).json({ message: "Coffees not found" });
        if (!coffees.length) return res.status(200).json({ data: [] });
        res.json(coffees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}