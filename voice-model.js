class VoiceModel {
    constructor(voiceType, length, notes=[]) {
        this.notes = notes;
        this.voiceType = voiceType;
        this.length = length;
    }

    setNote(position, pitch, octave){
        this.notes[position] = {pitch: pitch, octave: octave};
    }

    getNotes(){return this.notes;}
    getLength(){return this.length;}
}