let fields = []; // eine Array for Croos and circle

let CurrentShape = 'croos';

function fillupfield(id) {
    if (CurrentShape == 'cross') { // wenn cross True ist dann benutze
        CurrentShape = 'circle' // das hier
    } else {
        CurrentShape = 'cross'; // wenn es Cross false ist dann nimm cross
    }

    fields[id] = CurrentShape;
    draw();
}

function draw() { // to remove the class of current img
    for (let i = 0; i < fields.length; i++) {
        let field = fields[i];
        if (field == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }
        if (field == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}