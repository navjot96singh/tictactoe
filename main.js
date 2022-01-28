let fields = []; // eine Array for Croos and circle

let CurrentShape = 'croos';

function fillupfield(id) {
    if (CurrentShape == 'cross') { // wenn cross True ist dann benutze
        CurrentShape = 'circle' // das hier
        document.getElementById('player-1').classList.remove('player_inactive');
        document.getElementById('player-2').classList.add('player_inactive');
    } else {
        CurrentShape = 'cross'; // wenn es Cross false ist dann nimm cross
        document.getElementById('player-2').classList.remove('player_inactive');
        document.getElementById('player-1').classList.add('player_inactive');

    }

    fields[id] = CurrentShape;
    console.log(fields);
    draw();
    showWinner();
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

function showWinner() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) { // Horizontal vom 1 bis 3
        winner = fields[0];

    }
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) { // Horizontal vom 4 bis 6
        winner = fields[3];
    }
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) { // Horizontal vom 7 bis 9
        winner = fields[6];

    }
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) { // Vertical vom 1 bis 7
        winner = fields[0];

    }
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) { // Vertical vom 2 bis 8
        winner = fields[1];

    }
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) { // Vertical vom 3 bis 9
        winner = fields[2];

    }
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) { // cross vom 1 bis 9
        winner = fields[0];
    }
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) { // cross vom 3 bis 7
        winner = fields[2];
    }
    if (winner) { // to show the value of winner, wenn hier es hjier nicht stehen würde, dann kommet winner undefined. deswegen es gibt den Wert nur dann, wenn jmd gewonnen hat.

        console.log('Winner is', winner);
    }
}