fs = require('fs')

const getNotes = () => {
    const notes = loadNotes()
    let check = 1
    for(let key in notes){
        console.log(key)
        check = 0
    }
    return check
}

const readNote = (title) => {
    const notes = loadNotes()
    for(let key in notes){
        if(key === title){
            console.log(notes[key])
            return 0
        }
    }
    console.log("The note does not exist!")
    return 1
}
const addNote = (title,body) => {
    const notes = loadNotes()
    for(let key in notes){
        if(key === title){
            console.log("Note title already exists!")
            return 1
        }
    }
    notes[title] = body
    return saveNotes(notes)
}

const deleteNote = (title) => {
    const notes = loadNotes()
    for(let key in notes){
        if(key === title){
            delete notes[key]
            saveNotes(notes)
            return 0
        }
    }
    console.log("The note does not exist!")
    return 1
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const stringified = dataBuffer.toString()
        return JSON.parse(stringified)
    }catch(e){
        return {}
    }
}

const saveNotes = (notes) => {
    try{
        const stringified = JSON.stringify(notes)
        fs.writeFileSync('notes.json',stringified)
        return 0
    }catch(e){
        return 1
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote,
    getNotes: getNotes,
    readNote: readNote
}