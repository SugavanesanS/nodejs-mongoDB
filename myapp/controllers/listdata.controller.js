import ListData from "../models/listdata.model.js";

export const getListData = async (req, res) => {
    try {

        const listData = await ListData.findOne();
        if (!listData) return res.status(404).json({ message: "ListData not found" });
        res.json(listData);

    } catch (error) {
        res.error(500).json({ message: error.message });
    } finally {

    }
}

