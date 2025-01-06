import crudModel from "../model/crud.model.js";

export const create=async(req,res)=>{
    try {
        const newItem=new crudModel(req.body);
        await newItem.save();
        res.status(201).json({
            message:"Added",
            newItem
        })
    } catch (error) {
        res.status(400).json({ error: err.message });
    }
}

export const getall=async(req,res)=>{
    try {
        const items = await crudModel.find();
        res.status(200).json({items});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const getone=async(req,res)=>{
    try {
        const item = await crudModel.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export const update=async(req,res)=>{
    try {
        const updatedItem = await crudModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

export const  del=async(req,res)=>{
    try {
        const deletedItem = await crudModel.findByIdAndDelete(req.params.id);
        if (!deletedItem) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}