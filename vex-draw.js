VF = Vex.Flow;

var div = document.getElementById("boo");



var soprano = [];
var alto = [];
var tenor = [];
var bass = [];
var i;

const REST_PLACEHOLDER = "rest"

for (i = 0; i < 4; i++) {
    soprano[i] = i;
    alto[i] = i
    tenor[i] = i;
    bass[i] = i;
}

// soprano.push(new NoteModel("c", 4));
// var noteInput = document.getElementById("noteInput");
// var positionInput = document.getElementById("positionInput");
// var sopranoButton = document.getElementById("sopranoButton");

var sopranoNote = document.getElementById("sopranoNote");
var sopranoOctave = document.getElementById("sopranoOctave");
var sopranoPosition = document.getElementById("sopranoPosition");
var sopranoButton = document.getElementById("sopranoButton");

var altoNote = document.getElementById("altoNote");
var altoOctave = document.getElementById("altoOctave");
var altoPosition = document.getElementById("altoPosition");
var altoButton = document.getElementById("altoButton");

var tenorNote = document.getElementById("tenorNote");
var tenorOctave = document.getElementById("tenorOctave");
var tenorPosition = document.getElementById("tenorPosition");
var tenorButton = document.getElementById("tenorButton");

var bassNote = document.getElementById("bassNote");
var bassOctave = document.getElementById("bassOctave");
var bassPosition = document.getElementById("bassPosition");
var bassButton = document.getElementById("bassButton");

function draw() {
    if (div.firstChild) {
        div.removeChild(div.firstChild);
    }
    var renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);
    renderer.resize(500, 500);

    var context = renderer.getContext();
    var stave = new VF.Stave(10, 40, 400);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();

    var sopranoNotes = [];
    var altoNotes = [];
    var tenorNotes = [];
    var bassNotes = [];
    console.log(soprano);

    var i;
    for (i = 0; i < 4; i++) {
        var sopranoNote = soprano[i];
        var altoNote = alto[i];
        var tenorNote = tenor[i];
        var bassNote = bass[i];
        if (sopranoNote instanceof NoteModel) {
            vexnote = sopranoNote.name + "/" + sopranoNote.octave.toString();
            sopranoNotes[soprano.indexOf(sopranoNote)] = (new VF.StaveNote({ clef: "treble", keys: [vexnote], duration: "q" }));

        } else {

            sopranoNotes[soprano.indexOf(sopranoNote)] = (new VF.StaveNote({ clef: "treble", keys: ["d/5"], duration: "q" }));

        }

        if (altoNote instanceof NoteModel) {
            vexnote = altoNote.name + "/" + altoNote.octave.toString();
            altoNotes[alto.indexOf(altoNote)] = (new VF.StaveNote({ clef: "treble", keys: [vexnote], duration: "q" }));

        } else {

            altoNotes[alto.indexOf(altoNote)] = (new VF.StaveNote({ clef: "treble", keys: ["a/4"], duration: "q" }));

        }

        if (tenorNote instanceof NoteModel) {
            vexnote = tenorNote.name + "/" + tenorNote.octave.toString();
            tenorNotes[tenor.indexOf(tenorNote)] = (new VF.StaveNote({ clef: "treble", keys: [vexnote], duration: "q" }));

        } else {

            tenorNotes[tenor.indexOf(tenorNote)] = (new VF.StaveNote({ clef: "treble", keys: ["e/4"], duration: "q" }));

        }

        if (bassNote instanceof NoteModel) {
            vexnote = bassNote.name + "/" + bassNote.octave.toString();
            bassNotes[soprano.indexOf(bassNote)] = (new VF.StaveNote({ clef: "treble", keys: [vexnote], duration: "q" }));

        } else {

            bassNotes[bass.indexOf(bassNote)] = (new VF.StaveNote({ clef: "treble", keys: ["c/4"], duration: "q" }));

        }
    }

    
    var sopranoVoice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    sopranoVoice.addTickables(sopranoNotes);
    
    var altoVoice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    altoVoice.addTickables(altoNotes);

    var tenorVoice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    tenorVoice.addTickables(tenorNotes);

    var bassVoice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    bassVoice.addTickables(bassNotes);

    var formatter = new VF.Formatter().joinVoices([sopranoVoice, altoVoice, tenorVoice, bassVoice])
      .format([sopranoVoice, tenorVoice, altoVoice, bassVoice], 400);
    sopranoVoice.draw(context, stave);
    altoVoice.draw(context, stave);
    tenorVoice.draw(context, stave);
    bassVoice.draw(context, stave);
}

draw();

sopranoButton.addEventListener("click", function () {
    newNote = sopranoNote.value;
    notePosition = sopranoPosition.value;
    octave = sopranoOctave.value;
    console.log(newNote);
    soprano[notePosition] = new NoteModel(newNote, octave);
    draw();

});

altoButton.addEventListener("click", function () {
    newNote = altoNote.value;
    notePosition = altoPosition.value;
    octave = altoOctave.value;
    console.log(newNote);
    alto[notePosition] = new NoteModel(newNote, octave);
    draw();

});

tenorButton.addEventListener("click", function () {
    newNote = tenorNote.value;
    notePosition = tenorPosition.value;
    octave = altoOctave.value;
    console.log(newNote);
    tenor[notePosition] = new NoteModel(newNote, octave);
    draw();

});

bassButton.addEventListener("click", function () {
    newNote = bassNote.value;
    notePosition = bassPosition.value;
    octave = bassOctave.value;
    console.log(newNote);
    bass[notePosition] = new NoteModel(newNote, octave);
    draw();

});




