import { getCriminals } from "./criminals/CriminalProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import { getNotes } from "./notes/NotesProvider.js"
import NoteForm from "./notes/NoteForm.js"
import NotesList from "./notes/NotesList.js"

getCriminals().then(CriminalList)
getConvictions().then(ConvictionSelect)

NoteForm()
getNotes().then(NotesList)
