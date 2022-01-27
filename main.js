let fields = []; // eine Array for Croos and circle

let CurrentShape = 'croos';

function fillupfield(id) {
    if (CurrentShape == 'cross') { // wenn cross True ist dann benutze
        CurrentShape = 'circle' // das hier
    } else {
        CurrentShape = 'cross'; // wenn es Cross false ist dann nimm cross
    }

    fields[id] = CurrentShape;
    console.log(fields)
}