const cMajChord = ["C4", "E4", "G4"];
const dMajChord = ["D4", "F#4", "A4"];
const eMajChord = ["E4", "G#4", "B4"];
const fMajChord = ["F4", "A4", "C5"];
const gMajChord = ["G4", "B4", "D5"];
const aMajChord = ["A4", "C#5", "E5"];
const bMajChord = ["B4", "D#5", "F#5"];

const cMinChord = ["C4", "Eb4", "G4"];
const dMinChord = ["D4", "F4", "A4"];
const eMinChord = ["E4", "G4", "B4"];
const fMinChord = ["F4", "Ab4", "C5"];
const gMinChord = ["G4", "Bb4", "D5"];
const aMinChord = ["A4", "C5", "E5"];
const bMinChord = ["B4", "D5", "F#5"];

const cAugChord = ["C4", "E4", "G#4"];
const dAugChord = ["D4", "F#4", "Bb4"];
const eAugChord = ["E4", "G#4", "C4"];
const fAugChord = ["F4", "A4", "C#5"];
const gAugChord = ["G4", "B4", "D#5"];
const aAugChord = ["A4", "C#5", "F5"];
const bAugChord = ["B4", "D#5", "G5"];

const cMaj7Chord = ["C4", "E4", "G4", "B4"];
const dMaj7Chord = ["D4", "F#4", "A4", "C#5"];
const eMaj7Chord = ["E4", "G#4", "B4", "D#5"];
const fMaj7Chord = ["F4", "A4", "C5", "E5"];
const gMaj7Chord = ["G4", "B4", "D5", "F#5"];
const aMaj7Chord = ["A4", "C#5", "E5", "G#5"];
const bMaj7Chord = ["B4", "D#5", "F#5", "A#5"];


const majorChords = [cMajChord, dMajChord, eMajChord, fMajChord, gMajChord, aMajChord, bMajChord];
const minorChords = [cMinChord, dMinChord, eMinChord, fMinChord, gMinChord, aMinChord, bMinChord];
const augmentedChords = [cAugChord, dAugChord, eAugChord, fAugChord, gAugChord, aAugChord, bAugChord];
const major7Chords = [cMaj7Chord, dMaj7Chord, eMaj7Chord, fMaj7Chord, gMaj7Chord, aMaj7Chord, bMaj7Chord];

const majChordNames = ["C Major", "D Major", "E Major", "F Major", "G Major", "A Major", "B Major"];
const minChordNames = ["C Minor", "D Minor", "E Minor", "F Minor", "G Minor", "A Minor", "B Minor"];
const augChordNames = ["C Major Aug", "D Major Aug", "E Major Aug", "F Major Aug", "G Major Aug", "A Major Aug", "B Major Aug"];
const maj7ChordNames = ["C Major 7th", "D Major 7th", "E Major 7th", "F Major 7th", "G Major 7th", "A Major 7th", "B Major 7th"];

const chordNames = [majChordNames, minChordNames, augChordNames, maj7ChordNames];
const allChords = [majorChords, minorChords, augmentedChords, major7Chords];


export { allChords, chordNames };