// gonna need to know about the function that makes a single note in HTML
// gonna need to know about the notes from the API
import { Note } from "./Note.js"
import { useNotes } from "./NotesProvider.js"

const eventHub = document.querySelector(".container")
const notesContainer = document.querySelector(".notesContainer")

eventHub.addEventListener("noteStateChanged", (theCustomEvent) => {
    render()
})

const render = () => {
    // should get the note data & put it on the DOM
    const notesArray = useNotes()
    
    notesContainer.innerHTML = ""
    
    for (const noteObj of notesArray) {
        notesContainer.innerHTML += Note(noteObj)
    }
}

const NotesList = () => {
    render()
}

export default NotesList