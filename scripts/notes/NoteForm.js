import {saveNote} from "./NotesProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")

// Handle browser-generated click event in component
contentTarget.addEventListener("click", (clickEvent) => {
    if (clickEvent.target.id === "saveNote") {

        // Make a new object representation of a note
        const newNote = {
            // Key/value pairs here
            note: document.querySelector("#note-text_note").value,
            criminal: document.querySelector("#note-text_criminal").value
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.innerHTML = `
    <div>
        <form>
            <fieldset>
                <label>Note:</label>
                <input type="text" id="note-text_note">
            </fieldset>
            <fieldset>
                <label>Criminal:</label>
                <input type="text" id="note-text_criminal">
            </fieldset>
        </form>
        <button id="saveNote">Save Note</button>
    </div>
    `
}

const NoteForm = () => {
    render()
}

export default NoteForm