// NOTE TAKING APP

// Save a note
const notes = [];

function saveNote(content, id) {
    if (typeof content === 'string' && typeof id === 'number') {
        notes.push({content, id});
    }
}

saveNote('Pick up groceries', 1);
saveNote('Do laundry', 2);
console.log(notes);


// Get a note
function getNote(id) {
    if  (typeof id !== 'number') {
        alert(`Error: There is no note corresponding to this number. Please enter a valid number.`);
    } else {
        for (i = 0; i < notes.length; i++) {
            if (notes[i].id === id) {
                return notes[i];
            }
        }
    }
}

const firstNote = getNote(1);
console.log(firstNote);


// Log out notes
function logOutNotesFormatted() {
    for (i = 0; i < notes.length; i++) {
        console.log(`The note with id: ${notes[i].id} has the following note text: ${notes[i].content}`);
    }
}

logOutNotesFormatted(notes);


// Unique feature
// Replacing the note's content
function replaceNote(content, id) {
    for (i = 0; i < notes.length; i++) {
        if (notes[i].id === id) {
            notes[i].content = content;
        } else if (typeof id !== 'number' || id > notes.length || id < 1) {
            alert(`Please enter a valid note number.`);
        }
    }
}

// Comment on the code below to replace a note.

// replaceNote('Dentist appointment', 1);
// console.log(notes);
