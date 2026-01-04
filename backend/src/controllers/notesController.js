import Note from "../model/Note.js";

export const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    }
    catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

export const createNote = async(req, res) => {
    try {
        const { title, content } = req.body;
        const newNote = new Note({title,content });
        await newNote.save();
        res.status(201).json(newNote);
    }
    catch (error) {
        console.error("Error creating note:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

export const updateNote = async(req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const updated = await Note.findByIdAndUpdate(id, { title, content });
        if (!updated) {
            Note.findById(id,{title,content},{new :true});
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json({ message: `Post with id ${id} updated`, title, content });
    }
    catch (error) {
        console.error("Error updating note:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

export const deleteNote = async(req, res) => {
    try{
        const { id } = req.params;
        await Note.findByIdAndDelete(id);
        res.status(200).json({message:"Post deleted"});
    }
    catch(error){
        console.error("Error deleting note:", error);
        res.status(500).json({message:"Server Error"});
    }
};

export const getNoteById = async(req, res) => {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    }
    catch (error) {
        console.error("Error fetching note:", error);
        res.status(500).json({ message: "Server Error" });
    }
}
// export { getAllNotes, createNote, updateNote, deleteNote };