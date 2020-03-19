export const Note = (noteObj) => {
    return `
        <div class="note">
            <h4>${noteObj.note}</h4>
            <p>${noteObj.criminal}</p>
        </div>
    `
}