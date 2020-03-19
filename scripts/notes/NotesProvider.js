let notes = []

const eventHub = document.querySelector(".container")

/*
    Sends a message out to the application via eventHub that the state of the notes was changed
*/
const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")

    eventHub.dispatchEvent(noteStateChangedEvent)
}

/*
    Returns the copy of the notes data
*/
export const useNotes = () => {
    return notes.slice()
}


/*
    Fetches (GETs) all notes data
*/
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })
}

/*
    Creates (POSTs) a new note in the API
*/
export const saveNote = noteObj => {
    fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(noteObj)
    })
    .then(getNotes)
    .then(dispatchStateChangeEvent)
}