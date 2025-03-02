import note from "../model/UserModel.js";

 export const getNotes = async (req, res) => {
    try {
        const response = await note.findAll();
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
 };

export const getNoteById = async (req, res) => {
    try {
        const response = await note.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const createNote = async (req, res) => {
    try {
        await note.create(req.body);
        res.status(201).json({msg: "Note Created"})
    } catch (error) {
        
    }
}

export const updateNote = async (req, res) => {
    try {
        await note.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Note Updated"})
    } catch {
        console.log(error.message);
    }
}

export const deleteNote = async (req, res) => {
    try {
        await note.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Note Deleted"})
    } catch {
        console.log(error.message);
    }
}