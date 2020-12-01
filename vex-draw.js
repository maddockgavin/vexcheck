VF = Vex.Flow;

var div = document.getElementById("boo");
var soprano = [];
soprano.push(new NoteModel("c", 4));
var noteInput = document.getElementById("noteInput");
var sopranoButton = document.getElementById("sopranoButton");


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

    var notes = []
    console.log(soprano);
    for(const note of soprano) {
        console.log(note);
        console.log("name: " + note.getName());
        console.log("octave: " + note.octave);
        vexnote = note.name + "/" + note.octave.toString();
        console.log(vexnote);

        notes.push(new VF.StaveNote({ clef: "treble", keys: [vexnote], duration: "q" }));
    }

    var voice = new VF.Voice({ num_beats: 1, beat_value: 4 });
    voice.addTickables(notes);
    
    var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);
    voice.draw(context, stave);
}

draw();

sopranoButton.addEventListener("click", function() {
    newNote = noteInput.value;
    console.log(newNote);
    soprano[0] = new NoteModel(newNote, 4);
    draw();

});




