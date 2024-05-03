//toggle mobile link list via hamburger menu

var mobilelink = document.getElementById("mobilelink");

mobilelink.style.maxHeight = "0px";

function togglemobilelink(){
  if(mobilelink.style.maxHeight == "0px")
  {
    mobilelink.style.maxHeight = "130px";
  }
  else
  {
    mobilelink.style.maxHeight = "0px";
  }
}

//the massive array of data that is searched via functions to output data on the HTML.
var array = [
  ["C Major (Ionian)",1,0,1,1,0,1,0,1,1,0,1,0],
  ["C♯/D♭ Major (Ionian)",0,1,0,1,1,0,1,0,1,1,0,1],
  ["D Major (Ionian)",1,0,1,0,1,1,0,1,0,1,1,0],
  ["D♯/E♭ Major (Ionian)",0,1,0,1,0,1,1,0,1,0,1,1],
  ["E Major (Ionian)",1,0,1,0,1,0,1,1,0,1,0,1],
  ["F Major (Ionian)",1,1,0,1,0,1,0,1,1,0,1,0],
  ["F♯/G♭ Major (Ionian)",0,1,1,0,1,0,1,0,1,1,0,1],
  ["G Major (Ionian)",1,0,1,1,0,1,0,1,0,1,1,0],
  ["G♯/A♭ Major (Ionian)",0,1,0,1,1,0,1,0,1,0,1,1],
  ["A Major (Ionian)",1,0,1,0,1,1,0,1,0,1,0,1],
  ["A♯/B♭ Major (Ionian)",1,1,0,1,0,1,1,0,1,0,1,0],
  ["B Major (Ionian)",0,1,1,0,1,0,1,1,0,1,0,1],
  ["C Dorian",1,1,0,1,0,1,1,0,1,0,1,0],
  ["C♯/D♭ Dorian",0,1,1,0,1,0,1,1,0,1,0,1],
  ["D Dorian",1,0,1,1,0,1,0,1,1,0,1,0],
  ["D♯/E♭ Dorian",0,1,0,1,1,0,1,0,1,1,0,1],
  ["E Dorian",1,0,1,0,1,1,0,1,0,1,1,0],
  ["F Dorian",0,1,0,1,0,1,1,0,1,0,1,1],
  ["F♯/G♭ Dorian",1,0,1,0,1,0,1,1,0,1,0,1],
  ["G Dorian",1,1,0,1,0,1,0,1,1,0,1,0],
  ["G♯/A♭ Dorian",0,1,1,0,1,0,1,0,1,1,0,1],
  ["A Dorian",1,0,1,1,0,1,0,1,0,1,1,0],
  ["A♯/B♭ Dorian",0,1,0,1,1,0,1,0,1,0,1,1],
  ["B Dorian",1,0,1,0,1,1,0,1,0,1,0,1],
  ["C Phrygian",0,1,0,1,1,0,1,0,1,0,1,1],
  ["C♯/D♭ Phrygian",1,0,1,0,1,1,0,1,0,1,0,1],
  ["D Phrygian",1,1,0,1,0,1,1,0,1,0,1,0],
  ["D♯/E♭ Phrygian",0,1,1,0,1,0,1,1,0,1,0,1],
  ["E Phrygian",1,0,1,1,0,1,0,1,1,0,1,0],
  ["F Phrygian",0,1,0,1,1,0,1,0,1,1,0,1],
  ["F♯/G♭ Phrygian",1,0,1,0,1,1,0,1,0,1,1,0],
  ["G Phrygian",0,1,0,1,0,1,1,0,1,0,1,1],
  ["G♯/A♭ Phrygian",1,0,1,0,1,0,1,1,0,1,0,1],
  ["A Phrygian",1,1,0,1,0,1,0,1,1,0,1,0],
  ["A♯/B♭ Phrygian",0,1,1,0,1,0,1,0,1,1,0,1],
  ["B Phrygian",1,0,1,1,0,1,0,1,0,1,1,0],
  ["C Lydian",1,0,1,1,0,1,0,1,0,1,1,0],
  ["C♯/D♭ Lydian",0,1,0,1,1,0,1,0,1,0,1,1],
  ["D Lydian",1,0,1,0,1,1,0,1,0,1,0,1],
  ["D♯/E♭ Lydian",1,1,0,1,0,1,1,0,1,0,1,0],
  ["E Lydian",0,1,1,0,1,0,1,1,0,1,0,1],
  ["F Lydian",1,0,1,1,0,1,0,1,1,0,1,0],
  ["F♯/G♭ Lydian",0,1,0,1,1,0,1,0,1,1,0,1],
  ["G Lydian",1,0,1,0,1,1,0,1,0,1,1,0],
  ["G♯/A♭ Lydian",0,1,0,1,0,1,1,0,1,0,1,1],
  ["A Lydian",1,0,1,0,1,0,1,1,0,1,0,1],
  ["A♯/B♭ Lydian",1,1,0,1,0,1,0,1,1,0,1,0],
  ["B Lydian",0,1,1,0,1,0,1,0,1,1,0,1],
  ["C Mixolydian",1,1,0,1,0,1,0,1,1,0,1,0],
  ["C♯/D♭ Mixolydian",0,1,1,0,1,0,1,0,1,1,0,1],
  ["D Mixolydian",1,0,1,1,0,1,0,1,0,1,1,0],
  ["D♯/E♭ Mixolydian",0,1,0,1,1,0,1,0,1,0,1,1],
  ["E Mixolydian",1,0,1,0,1,1,0,1,0,1,0,1],
  ["F Mixolydian",1,1,0,1,0,1,1,0,1,0,1,0],
  ["F♯/G♭ Mixolydian",0,1,1,0,1,0,1,1,0,1,0,1],
  ["G Mixolydian",1,0,1,1,0,1,0,1,1,0,1,0],
  ["G♯/A♭ Mixolydian",0,1,0,1,1,0,1,0,1,1,0,1],
  ["A Mixolydian",1,0,1,0,1,1,0,1,0,1,1,0],
  ["A♯/B♭ Mixolydian",0,1,0,1,0,1,1,0,1,0,1,1],
  ["B Mixolydian",1,0,1,0,1,0,1,1,0,1,0,1],
  ["C Minor (Aeolian)",0,1,0,1,0,1,1,0,1,0,1,1],
  ["C♯/D♭ Minor (Aeolian)",1,0,1,0,1,0,1,1,0,1,0,1],
  ["D Minor (Aeolian)",1,1,0,1,0,1,0,1,1,0,1,0],
  ["D♯/E♭ Minor (Aeolian)",0,1,1,0,1,0,1,0,1,1,0,1],
  ["E Minor (Aeolian)",1,0,1,1,0,1,0,1,0,1,1,0],
  ["F Minor (Aeolian)",0,1,0,1,1,0,1,0,1,0,1,1],
  ["F♯/G♭ Minor (Aeolian)",1,0,1,0,1,1,0,1,0,1,0,1],
  ["G Minor (Aeolian)",1,1,0,1,0,1,1,0,1,0,1,0],
  ["G♯/A♭ Minor (Aeolian)",0,1,1,0,1,0,1,1,0,1,0,1],
  ["A Minor (Aeolian)",1,0,1,1,0,1,0,1,1,0,1,0],
  ["A♯/B♭ Minor (Aeolian)",0,1,0,1,1,0,1,0,1,1,0,1],
  ["B Minor (Aeolian)",1,0,1,0,1,1,0,1,0,1,1,0],
  ["C Locrian",0,1,0,1,1,0,1,0,1,1,0,1],
  ["C♯/D♭ Locrian",1,0,1,0,1,1,0,1,0,1,1,0],
  ["D Locrian",0,1,0,1,0,1,1,0,1,0,1,1],
  ["D♯/E♭ Locrian",1,0,1,0,1,0,1,1,0,1,0,1],
  ["E Locrian",1,1,0,1,0,1,0,1,1,0,1,0],
  ["F Locrian",0,1,1,0,1,0,1,0,1,1,0,1],
  ["F♯/G♭ Locrian",1,0,1,1,0,1,0,1,0,1,1,0],
  ["G Locrian",0,1,0,1,1,0,1,0,1,0,1,1],
  ["G♯/A♭ Locrian",1,0,1,0,1,1,0,1,0,1,0,1],
  ["A Locrian",1,1,0,1,0,1,1,0,1,0,1,0],
  ["A♯/B♭ Locrian",0,1,1,0,1,0,1,1,0,1,0,1],
  ["B Locrian",1,0,1,1,0,1,0,1,1,0,1,0],
  ["C Harmonic Minor",0,0,1,1,0,1,1,0,1,0,1,1],
  ["C♯/D♭ Harmonic Minor",1,0,0,1,1,0,1,1,0,1,0,1],
  ["D Harmonic Minor",1,1,0,0,1,1,0,1,1,0,1,0],
  ["D♯/E♭ Harmonic Minor",0,1,1,0,0,1,1,0,1,1,0,1],
  ["E Harmonic Minor",1,0,1,1,0,0,1,1,0,1,1,0],
  ["F Harmonic Minor",0,1,0,1,1,0,0,1,1,0,1,1],
  ["F♯/G♭ Harmonic Minor",1,0,1,0,1,1,0,0,1,1,0,1],
  ["G Harmonic Minor",1,1,0,1,0,1,1,0,0,1,1,0],
  ["G♯/A♭ Harmonic Minor",0,1,1,0,1,0,1,1,0,0,1,1],
  ["A Harmonic Minor",1,0,1,1,0,1,0,1,1,0,0,1],
  ["A♯/B♭ Harmonic Minor",1,1,0,1,1,0,1,0,1,1,0,0],
  ["B Harmonic Minor",0,1,1,0,1,1,0,1,0,1,1,0],
  ["C Melodic Minor",1,0,1,1,0,1,1,0,1,0,1,0],
  ["C♯/D♭ Melodic Minor",0,1,0,1,1,0,1,1,0,1,0,1],
  ["D Melodic Minor",1,0,1,0,1,1,0,1,1,0,1,0],
  ["D♯/E♭ Melodic Minor",0,1,0,1,0,1,1,0,1,1,0,1],
  ["E Melodic Minor",1,0,1,0,1,0,1,1,0,1,1,0],
  ["F Melodic Minor",0,1,0,1,0,1,0,1,1,0,1,1],
  ["F♯/G♭ Melodic Minor",1,0,1,0,1,0,1,0,1,1,0,1],
  ["G Melodic Minor",1,1,0,1,0,1,0,1,0,1,1,0],
  ["G♯/A♭ Melodic Minor",0,1,1,0,1,0,1,0,1,0,1,1],
  ["A Melodic Minor",1,0,1,1,0,1,0,1,0,1,0,1],
  ["A♯/B♭ Melodic Minor",1,1,0,1,1,0,1,0,1,0,1,0],
  ["B Melodic Minor",0,1,1,0,1,1,0,1,0,1,0,1],
  ["C Blues Minor",0,1,0,1,0,1,1,0,1,1,1],
  ["C♯/D♭ Blues Minor",1,0,1,0,1,0,1,1,0,1,1,1],
  ["D Blues Minor",1,1,0,1,0,1,0,1,1,0,1,1],
  ["D♯/E♭ Blues Minor",1,1,1,0,1,0,1,0,1,1,0,1],
  ["E Blues Minor",1,1,1,1,0,1,0,1,0,1,1,0],
  ["F Blues Minor",0,1,1,1,1,0,1,0,1,0,1,1],
  ["F♯/G♭ Blues Minor",1,0,1,1,1,1,0,1,0,1,0,1],
  ["G Blues Minor",1,1,0,1,1,1,1,0,1,0,1,0],
  ["G♯/A♭ Blues Minor",0,1,1,0,1,1,1,1,0,1,0,1],
  ["A Blues Minor",1,0,1,1,0,1,1,1,1,0,1,0],
  ["A♯/B♭ Blues Minor",0,1,0,1,1,0,1,1,1,1,0,1],
  ["B Blues Minor",1,0,1,0,1,1,0,1,1,1,1,0],
  ["C Major Hexatonic",1,0,0,1,0,1,0,1,1,0,1,0],
  ["C♯/D♭ Major Hexatonic",0,1,0,0,1,0,1,0,1,1,0,1],
  ["D Major Hexatonic",1,0,1,0,0,1,0,1,0,1,1,0],
  ["D♯/E♭ Major Hexatonic",0,1,0,1,0,0,1,0,1,0,1,1],
  ["E Major Hexatonic",1,0,1,0,1,0,0,1,0,1,0,1],
  ["F Major Hexatonic",1,1,0,1,0,1,0,0,1,0,1,0],
  ["F♯/G♭ Major Hexatonic",0,1,1,0,1,0,1,0,0,1,0,1],
  ["G Major Hexatonic",1,0,1,1,0,1,0,1,0,0,1,0],
  ["G♯/A♭ Major Hexatonic",0,1,0,1,1,0,1,0,1,0,0,1],
  ["A Major Hexatonic",1,0,1,0,1,1,0,1,0,1,0,0],
  ["A♯/B♭ Major Hexatonic",0,1,0,1,0,1,1,0,1,0,1,0],
  ["B Major Hexatonic",0,0,1,0,1,0,1,1,0,1,0,1],
  ["C Minor Hexatonic",0,1,0,1,0,1,1,0,1,0,1,0],
  ["C♯/D♭ Minor Hexatonic",0,0,1,0,1,0,1,1,0,1,0,1],
  ["D Minor Hexatonic",1,0,0,1,0,1,0,1,1,0,1,0],
  ["D♯/E♭ Minor Hexatonic",0,1,0,0,1,0,1,0,1,1,0,1],
  ["E Minor Hexatonic",1,0,1,0,0,1,0,1,0,1,1,0],
  ["F Minor Hexatonic",0,1,0,1,0,0,1,0,1,0,1,1],
  ["F♯/G♭ Minor Hexatonic",1,0,1,0,1,0,0,1,0,1,0,1],
  ["G Minor Hexatonic",1,1,0,1,0,1,0,0,1,0,1,0],
  ["G♯/A♭ Minor Hexatonic",0,1,1,0,1,0,1,0,0,1,0,1],
  ["A Minor Hexatonic",1,0,1,1,0,1,0,1,0,0,1,0],
  ["A♯/B♭ Minor Hexatonic",0,1,0,1,1,0,1,0,1,0,0,1],
  ["B Minor Hexatonic",1,0,1,0,1,1,0,1,0,1,0,0],
  ["C Major Pentatonic",1,0,0,1,0,1,0,1,0,0,1,0],
  ["C♯/D♭ Major Pentatonic",0,1,0,0,1,0,1,0,1,0,0,1],
  ["D Major Pentatonic",1,0,1,0,0,1,0,1,0,1,0,0],
  ["D♯/E♭ Major Pentatonic",0,1,0,1,0,0,1,0,1,0,1,0],
  ["E Major Pentatonic",0,0,1,0,1,0,0,1,0,1,0,1],
  ["F Major Pentatonic",1,0,0,1,0,1,0,0,1,0,1,0],
  ["F♯/G♭ Major Pentatonic",0,1,0,0,1,0,1,0,0,1,0,1],
  ["G Major Pentatonic",1,0,1,0,0,1,0,1,0,0,1,0],
  ["G♯/A♭ Major Pentatonic",0,1,0,1,0,0,1,0,1,0,0,1],
  ["A Major Pentatonic",1,0,1,0,1,0,0,1,0,1,0,0],
  ["A♯/B♭ Major Pentatonic",0,1,0,1,0,1,0,0,1,0,1,0],
  ["B Major Pentatonic",0,0,1,0,1,0,1,0,0,1,0,1],
  ["C Minor Pentatonic",0,1,0,1,0,0,1,0,1,0,1,0],
  ["C♯/D♭ Minor Pentatonic",0,0,1,0,1,0,0,1,0,1,0,1],
  ["D Minor Pentatonic",1,0,0,1,0,1,0,0,1,0,1,0],
  ["D♯/E♭ Minor Pentatonic",0,1,0,0,1,0,1,0,0,1,0,1],
  ["E Minor Pentatonic",1,0,1,0,0,1,0,1,0,0,1,0],
  ["F Minor Pentatonic",0,1,0,1,0,0,1,0,1,0,0,1],
  ["F♯/G♭ Minor Pentatonic",1,0,1,0,1,0,0,1,0,1,0,0],
  ["G Minor Pentatonic",0,1,0,1,0,1,0,0,1,0,1,0],
  ["G♯/A♭ Minor Pentatonic",0,0,1,0,1,0,1,0,0,1,0,1],
  ["A Minor Pentatonic",1,0,0,1,0,1,0,1,0,0,1,0],
  ["A♯/B♭ Minor Pentatonic",0,1,0,0,1,0,1,0,1,0,0,1],
  ["B Minor Pentatonic",1,0,1,0,0,1,0,1,0,1,0,0],
  ["C Blues",0,1,0,1,0,0,1,0,1,1,1,0],
  ["C♯/D♭ Blues",0,0,1,0,1,0,0,1,0,1,1,1],
  ["D Blues",1,0,0,1,0,1,0,0,1,0,1,1],
  ["D♯/E♭ Blues",1,1,0,0,1,0,1,0,0,1,0,1],
  ["E Blues",1,1,1,0,0,1,0,1,0,0,1,0],
  ["F Blues",0,1,1,1,0,0,1,0,1,0,0,1],
  ["F♯/G♭ Blues",1,0,1,1,1,0,0,1,0,1,0,0],
  ["G Blues",0,1,0,1,1,1,0,0,1,0,1,0],
  ["G♯/A♭ Blues",0,0,1,0,1,1,1,0,0,1,0,1],
  ["A Blues",1,0,0,1,0,1,1,1,0,0,1,0],
  ["A♯/B♭ Blues",0,1,0,0,1,0,1,1,1,0,0,1],
  ["B Blues",1,0,1,0,0,1,0,1,1,1,0,0],
  ["C Mixo Blues",0,1,0,1,0,0,1,1,1,1,1,0],
  ["C♯/D♭ Mixo Blues",0,0,1,0,1,0,0,1,1,1,1,1],
  ["D Mixo Blues",1,0,0,1,0,1,0,0,1,1,1,1],
  ["D♯/E♭ Mixo Blues",1,1,0,0,1,0,1,0,0,1,1,1],
  ["E Mixo Blues",1,1,1,0,0,1,0,1,0,0,1,1],
  ["F Mixo Blues",1,1,1,1,0,0,1,0,1,0,0,1],
  ["F♯/G♭ Mixo Blues",1,1,1,1,1,0,0,1,0,1,0,0],
  ["G Mixo Blues",0,1,1,1,1,1,0,0,1,0,1,0],
  ["G♯/A♭ Mixo Blues",0,0,1,1,1,1,1,0,0,1,0,1],
  ["A Mixo Blues",1,0,0,1,1,1,1,1,0,0,1,0],
  ["A♯/B♭ Mixo Blues",0,1,0,0,1,1,1,1,1,0,0,1],
  ["B Mixo Blues",1,0,1,0,0,1,1,1,1,1,0,0],
  ["C Diminished",1,0,1,1,0,1,1,0,1,1,0,1],
  ["C♯/D♭ Diminished",1,1,0,1,1,0,1,1,0,1,1,0],
  ["D Diminished",0,1,1,0,1,1,0,1,1,0,1,1],
  ["D♯/E♭ Diminished",1,0,1,1,0,1,1,0,1,1,0,1],
  ["E Diminished",1,1,0,1,1,0,1,1,0,1,1,0],
  ["F Diminished",0,1,1,0,1,1,0,1,1,0,1,1],
  ["F♯/G♭ Diminished",1,0,1,1,0,1,1,0,1,1,0,1],
  ["G Diminished",1,1,0,1,1,0,1,1,0,1,1,0],
  ["G♯/A♭ Diminished",0,1,1,0,1,1,0,1,1,0,1,1],
  ["A Diminished",1,0,1,1,0,1,1,0,1,1,0,1],
  ["A♯/B♭ Diminished",1,1,0,1,1,0,1,1,0,1,1,0],
  ["B Diminished",0,1,1,0,1,1,0,1,1,0,1,1],
  ["C Whole Tone",0,1,0,1,0,1,0,1,0,1,0,1],
  ["C♯/D♭ Whole Tone",1,0,1,0,1,0,1,0,1,0,1,0],
  ["D Whole Tone",0,1,0,1,0,1,0,1,0,1,0,1],
  ["D♯/E♭ Whole Tone",1,0,1,0,1,0,1,0,1,0,1,0],
  ["E Whole Tone",0,1,0,1,0,1,0,1,0,1,0,1],
  ["F Whole Tone",1,0,1,0,1,0,1,0,1,0,1,0],
  ["F♯/G♭ Whole Tone",0,1,0,1,0,1,0,1,0,1,0,1],
  ["G Whole Tone",1,0,1,0,1,0,1,0,1,0,1,0],
  ["G♯/A♭ Whole Tone",0,1,0,1,0,1,0,1,0,1,0,1],
  ["A Whole Tone",1,0,1,0,1,0,1,0,1,0,1,0],
  ["A♯/B♭ Whole Tone",0,1,0,1,0,1,0,1,0,1,0,1],
  ["B Whole Tone",1,0,1,0,1,0,1,0,1,0,1,0],
  ["C Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
  ["C♯/D♭ Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
  ["D Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
  ["D♯/E♭ Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
  ["E Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
  ["F Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
  ["F♯/G♭ Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
  ["G Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
  ["G♯/A♭ Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
  ["A Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
  ["A♯/B♭ Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
  ["B Chromatic",1,1,1,1,1,1,1,1,1,1,1,1],
/*   ["C Acoustic",1,1,0,1,0,1,0,1,0,1,1,0],
  ["C♯/D♭ Acoustic",0,1,1,0,1,0,1,0,1,0,1,1],
  ["D Acoustic",1,0,1,1,0,1,0,1,0,1,0,1],
  ["D♯/E♭ Acoustic",1,1,0,1,1,0,1,0,1,0,1,0],
  ["E Acoustic",0,1,1,0,1,1,0,1,0,1,0,1],
  ["F Acoustic",1,0,1,1,0,1,1,0,1,0,1,0],
  ["F♯/G♭ Acoustic",0,1,0,1,1,0,1,1,0,1,0,1],
  ["G Acoustic",1,0,1,0,1,1,0,1,1,0,1,0],
  ["G♯/A♭ Acoustic",0,1,0,1,0,1,1,0,1,1,0,1],
  ["A Acoustic",1,0,1,0,1,0,1,1,0,1,1,0],
  ["A♯/B♭ Acoustic",0,1,0,1,0,1,0,1,1,0,1,1],
  ["B Acoustic",1,0,1,0,1,0,1,0,1,1,0,1],
  ["C Algerian",0,0,1,1,0,1,1,0,0,1,1,1],
  ["C♯/D♭ Algerian",1,0,0,1,1,0,1,1,0,0,1,1],
  ["D Algerian",1,1,0,0,1,1,0,1,1,0,0,1],
  ["D♯/E♭ Algerian",1,1,1,0,0,1,1,0,1,1,0,0],
  ["E Algerian",0,1,1,1,0,0,1,1,0,1,1,0],
  ["F Algerian",0,0,1,1,1,0,0,1,1,0,1,1],
  ["F♯/G♭ Algerian",1,0,0,1,1,1,0,0,1,1,0,1],
  ["G Algerian",1,1,0,0,1,1,1,0,0,1,1,0],
  ["G♯/A♭ Algerian",0,1,1,0,0,1,1,1,0,0,1,1],
  ["A Algerian",1,0,1,1,0,0,1,1,1,0,0,1],
  ["A♯/B♭ Algerian",1,1,0,1,1,0,0,1,1,1,0,0],
  ["B Algerian",0,1,1,0,1,1,0,0,1,1,1,0],
  ["C Altered",0,1,0,1,1,0,1,1,0,1,0,1],
  ["C♯/D♭ Altered",1,0,1,0,1,1,0,1,1,0,1,0],
  ["D Altered",0,1,0,1,0,1,1,0,1,1,0,1],
  ["D♯/E♭ Altered",1,0,1,0,1,0,1,1,0,1,1,0],
  ["E Altered",0,1,0,1,0,1,0,1,1,0,1,1],
  ["F Altered",1,0,1,0,1,0,1,0,1,1,0,1],
  ["F♯/G♭ Altered",1,1,0,1,0,1,0,1,0,1,1,0],
  ["G Altered",0,1,1,0,1,0,1,0,1,0,1,1],
  ["G♯/A♭ Altered",1,0,1,1,0,1,0,1,0,1,0,1],
  ["A Altered",1,1,0,1,1,0,1,0,1,0,1,0],
  ["A♯/B♭ Altered",0,1,1,0,1,1,0,1,0,1,0,1],
  ["B Altered",1,0,1,1,0,1,1,0,1,0,1,0], */
  ["C Augmented",0,0,1,1,0,0,1,1,0,0,1,1],
  ["C♯/D♭ Augmented",1,0,0,1,1,0,0,1,1,0,0,1],
  ["D Augmented",1,1,0,0,1,1,0,0,1,1,0,0],
  ["D♯/E♭ Augmented",0,1,1,0,0,1,1,0,0,1,1,0],
  ["E Augmented",0,0,1,1,0,0,1,1,0,0,1,1],
  ["F Augmented",1,0,0,1,1,0,0,1,1,0,0,1],
  ["F♯/G♭ Augmented",1,1,0,0,1,1,0,0,1,1,0,0],
  ["G Augmented",0,1,1,0,0,1,1,0,0,1,1,0],
  ["G♯/A♭ Augmented",0,0,1,1,0,0,1,1,0,0,1,1],
  ["A Augmented",1,0,0,1,1,0,0,1,1,0,0,1],
  ["A♯/B♭ Augmented",1,1,0,0,1,1,0,0,1,1,0,0],
  ["B Augmented",0,1,1,0,0,1,1,0,0,1,1,0],
  ["C Bebop Dominant",1,1,1,1,0,1,0,1,1,0,1,0],
  ["C♯/D♭ Bebop Dominant",0,1,1,1,1,0,1,0,1,1,0,1],
  ["D Bebop Dominant",1,0,1,1,1,1,0,1,0,1,1,0],
  ["D♯/E♭ Bebop Dominant",0,1,0,1,1,1,1,0,1,0,1,1],
  ["E Bebop Dominant",1,0,1,0,1,1,1,1,0,1,0,1],
  ["F Bebop Dominant",1,1,0,1,0,1,1,1,1,0,1,0],
  ["F♯/G♭ Bebop Dominant",0,1,1,0,1,0,1,1,1,1,0,1],
  ["G Bebop Dominant",1,0,1,1,0,1,0,1,1,1,1,0],
  ["G♯/A♭ Bebop Dominant",0,1,0,1,1,0,1,0,1,1,1,1],
  ["A Bebop Dominant",1,0,1,0,1,1,0,1,0,1,1,1],
  ["A♯/B♭ Bebop Dominant",1,1,0,1,0,1,1,0,1,0,1,1],
  ["B Bebop Dominant",1,1,1,0,1,0,1,1,0,1,0,1],
  ["C Double Harmonic",0,0,1,1,1,0,0,1,1,0,1,1],
  ["C♯/D♭ Double Harmonic",1,0,0,1,1,1,0,0,1,1,0,1],
  ["D Double Harmonic",1,1,0,0,1,1,1,0,0,1,1,0],
  ["D♯/E♭ Double Harmonic",0,1,1,0,0,1,1,1,0,0,1,1],
  ["E Double Harmonic",1,0,1,1,0,0,1,1,1,0,0,1],
  ["F Double Harmonic",1,1,0,1,1,0,0,1,1,1,0,0],
  ["F♯/G♭ Double Harmonic",0,1,1,0,1,1,0,0,1,1,1,0],
  ["G Double Harmonic",0,0,1,1,0,1,1,0,0,1,1,1],
  ["G♯/A♭ Double Harmonic",1,0,0,1,1,0,1,1,0,0,1,1],
  ["A Double Harmonic",1,1,0,0,1,1,0,1,1,0,0,1],
  ["A♯/B♭ Double Harmonic",1,1,1,0,0,1,1,0,1,1,0,0],
  ["B Double Harmonic",0,1,1,1,0,0,1,1,0,1,1,0],
  ["C Enigmatic",0,1,1,1,1,0,0,1,0,1,0,1],
  ["C♯/D♭ Enigmatic",1,0,1,1,1,1,0,0,1,0,1,0],
  ["D Enigmatic",0,1,0,1,1,1,1,0,0,1,0,1],
  ["D♯/E♭ Enigmatic",1,0,1,0,1,1,1,1,0,0,1,0],
  ["E Enigmatic",0,1,0,1,0,1,1,1,1,0,0,1],
  ["F Enigmatic",1,0,1,0,1,0,1,1,1,1,0,0],
  ["F♯/G♭ Enigmatic",0,1,0,1,0,1,0,1,1,1,1,0],
  ["G Enigmatic",0,0,1,0,1,0,1,0,1,1,1,1],
  ["G♯/A♭ Enigmatic",1,0,0,1,0,1,0,1,0,1,1,1],
  ["A Enigmatic",1,1,0,0,1,0,1,0,1,0,1,1],
  ["A♯/B♭ Enigmatic",1,1,1,0,0,1,0,1,0,1,0,1],
  ["B Enigmatic",1,1,1,1,0,0,1,0,1,0,1,0],
/*   ["C Flamenco",0,0,1,1,1,0,0,1,1,0,1,1],
  ["C♯/D♭ Flamenco",1,0,0,1,1,1,0,0,1,1,0,1],
  ["D Flamenco",1,1,0,0,1,1,1,0,0,1,1,0],
  ["D♯/E♭ Flamenco",0,1,1,0,0,1,1,1,0,0,1,1],
  ["E Flamenco",1,0,1,1,0,0,1,1,1,0,0,1],
  ["F Flamenco",1,1,0,1,1,0,0,1,1,1,0,0],
  ["F♯/G♭ Flamenco",0,1,1,0,1,1,0,0,1,1,1,0],
  ["G Flamenco",0,0,1,1,0,1,1,0,0,1,1,1],
  ["G♯/A♭ Flamenco",1,0,0,1,1,0,1,1,0,0,1,1],
  ["A Flamenco",1,1,0,0,1,1,0,1,1,0,0,1],
  ["A♯/B♭ Flamenco",1,1,1,0,0,1,1,0,1,1,0,0],
  ["B Flamenco",0,1,1,1,0,0,1,1,0,1,1,0],
  ["C Gypsy",0,1,0,1,0,1,1,0,0,1,1,1],
  ["C♯/D♭ Gypsy",1,0,1,0,1,0,1,1,0,0,1,1],
  ["D Gypsy",1,1,0,1,0,1,0,1,1,0,0,1],
  ["D♯/E♭ Gypsy",1,1,1,0,1,0,1,0,1,1,0,0],
  ["E Gypsy",0,1,1,1,0,1,0,1,0,1,1,0],
  ["F Gypsy",0,0,1,1,1,0,1,0,1,0,1,1],
  ["F♯/G♭ Gypsy",1,0,0,1,1,1,0,1,0,1,0,1],
  ["G Gypsy",1,1,0,0,1,1,1,0,1,0,1,0],
  ["G♯/A♭ Gypsy",0,1,1,0,0,1,1,1,0,1,0,1],
  ["A Gypsy",1,0,1,1,0,0,1,1,1,0,1,0],
  ["A♯/B♭ Gypsy",0,1,0,1,1,0,0,1,1,1,0,1],
  ["B Gypsy",1,0,1,0,1,1,0,0,1,1,1,0],
  ["C Half Diminished",0,1,0,1,0,1,1,0,1,1,0,1],
  ["C♯/D♭ Half Diminished",1,0,1,0,1,0,1,1,0,1,1,0],
  ["D Half Diminished",0,1,0,1,0,1,0,1,1,0,1,1],
  ["D♯/E♭ Half Diminished",1,0,1,0,1,0,1,0,1,1,0,1],
  ["E Half Diminished",1,1,0,1,0,1,0,1,0,1,1,0],
  ["F Half Diminished",0,1,1,0,1,0,1,0,1,0,1,1],
  ["F♯/G♭ Half Diminished",1,0,1,1,0,1,0,1,0,1,0,1],
  ["G Half Diminished",1,1,0,1,1,0,1,0,1,0,1,0],
  ["G♯/A♭ Half Diminished",0,1,1,0,1,1,0,1,0,1,0,1],
  ["A Half Diminished",1,0,1,1,0,1,1,0,1,0,1,0],
  ["A♯/B♭ Half Diminished",0,1,0,1,1,0,1,1,0,1,0,1],
  ["B Half Diminished",1,0,1,0,1,1,0,1,1,0,1,0],
  ["C Harmonic Major",0,0,1,1,0,1,1,0,1,0,1,1],
  ["C♯/D♭ Harmonic Major",1,0,0,1,1,0,1,1,0,1,0,1],
  ["D Harmonic Major",1,1,0,0,1,1,0,1,1,0,1,0],
  ["D♯/E♭ Harmonic Major",0,1,1,0,0,1,1,0,1,1,0,1],
  ["E Harmonic Major",1,0,1,1,0,0,1,1,0,1,1,0],
  ["F Harmonic Major",0,1,0,1,1,0,0,1,1,0,1,1],
  ["F♯/G♭ Harmonic Major",1,0,1,0,1,1,0,0,1,1,0,1],
  ["G Harmonic Major",1,1,0,1,0,1,1,0,0,1,1,0],
  ["G♯/A♭ Harmonic Major",0,1,1,0,1,0,1,1,0,0,1,1],
  ["A Harmonic Major",1,0,1,1,0,1,0,1,1,0,0,1],
  ["A♯/B♭ Harmonic Major",1,1,0,1,1,0,1,0,1,1,0,0],
  ["B Harmonic Major",0,1,1,0,1,1,0,1,0,1,1,0],
  ["C Hirajoshi",0,0,1,1,0,0,0,1,0,1,1,0],
  ["C♯/D♭ Hirajoshi",0,0,0,1,1,0,0,0,1,0,1,1],
  ["D Hirajoshi",1,0,0,0,1,1,0,0,0,1,0,1],
  ["D♯/E♭ Hirajoshi",1,1,0,0,0,1,1,0,0,0,1,0],
  ["E Hirajoshi",0,1,1,0,0,0,1,1,0,0,0,1],
  ["F Hirajoshi",1,0,1,1,0,0,0,1,1,0,0,0],
  ["F♯/G♭ Hirajoshi",0,1,0,1,1,0,0,0,1,1,0,0],
  ["G Hirajoshi",0,0,1,0,1,1,0,0,0,1,1,0],
  ["G♯/A♭ Hirajoshi",0,0,0,1,0,1,1,0,0,0,1,1],
  ["A Hirajoshi",1,0,0,0,1,0,1,1,0,0,0,1],
  ["A♯/B♭ Hirajoshi",1,1,0,0,0,1,0,1,1,0,0,0],
  ["B Hirajoshi",0,1,1,0,0,0,1,0,1,1,0,0],
  ["C Hungarian Minor",0,0,1,1,0,1,1,0,0,1,1,1],
  ["C♯/D♭ Hungarian Minor",1,0,0,1,1,0,1,1,0,0,1,1],
  ["D Hungarian Minor",1,1,0,0,1,1,0,1,1,0,0,1],
  ["D♯/E♭ Hungarian Minor",1,1,1,0,0,1,1,0,1,1,0,0],
  ["E Hungarian Minor",0,1,1,1,0,0,1,1,0,1,1,0],
  ["F Hungarian Minor",0,0,1,1,1,0,0,1,1,0,1,1],
  ["F♯/G♭ Hungarian Minor",1,0,0,1,1,1,0,0,1,1,0,1],
  ["G Hungarian Minor",1,1,0,0,1,1,1,0,0,1,1,0],
  ["G♯/A♭ Hungarian Minor",0,1,1,0,0,1,1,1,0,0,1,1],
  ["A Hungarian Minor",1,0,1,1,0,0,1,1,1,0,0,1],
  ["A♯/B♭ Hungarian Minor",1,1,0,1,1,0,0,1,1,1,0,0],
  ["B Hungarian Minor",0,1,1,0,1,1,0,0,1,1,1,0], */
  ["C In",0,0,0,1,1,0,0,0,1,0,1,1],
  ["C♯/D♭ In",1,0,0,0,1,1,0,0,0,1,0,1],
  ["D In",1,1,0,0,0,1,1,0,0,0,1,0],
  ["D♯/E♭ In",0,1,1,0,0,0,1,1,0,0,0,1],
  ["E In",1,0,1,1,0,0,0,1,1,0,0,0],
  ["F In",0,1,0,1,1,0,0,0,1,1,0,0],
  ["F♯/G♭ In",0,0,1,0,1,1,0,0,0,1,1,0],
  ["G In",0,0,0,1,0,1,1,0,0,0,1,1],
  ["G♯/A♭ In",1,0,0,0,1,0,1,1,0,0,0,1],
  ["A In",1,1,0,0,0,1,0,1,1,0,0,0],
  ["A♯/B♭ In",0,1,1,0,0,0,1,0,1,1,0,0],
  ["B In",0,0,1,1,0,0,0,1,0,1,1,0],
  ["C Insen",0,1,0,1,1,0,0,0,1,0,1,0],
  ["C♯/D♭ Insen",0,0,1,0,1,1,0,0,0,1,0,1],
  ["D Insen",1,0,0,1,0,1,1,0,0,0,1,0],
  ["D♯/E♭ Insen",0,1,0,0,1,0,1,1,0,0,0,1],
  ["E Insen",1,0,1,0,0,1,0,1,1,0,0,0],
  ["F Insen",0,1,0,1,0,0,1,0,1,1,0,0],
  ["F♯/G♭ Insen",0,0,1,0,1,0,0,1,0,1,1,0],
  ["G Insen",0,0,0,1,0,1,0,0,1,0,1,1],
  ["G♯/A♭ Insen",1,0,0,0,1,0,1,0,0,1,0,1],
  ["A Insen",1,1,0,0,0,1,0,1,0,0,1,0],
  ["A♯/B♭ Insen",0,1,1,0,0,0,1,0,1,0,0,1],
  ["B Insen",1,0,1,1,0,0,0,1,0,1,0,0],
  ["C Istrian",0,0,0,1,1,0,1,1,0,1,1,0],
  ["C♯/D♭ Istrian",0,0,0,0,1,1,0,1,1,0,1,1],
  ["D Istrian",1,0,0,0,0,1,1,0,1,1,0,1],
  ["D♯/E♭ Istrian",1,1,0,0,0,0,1,1,0,1,1,0],
  ["E Istrian",0,1,1,0,0,0,0,1,1,0,1,1],
  ["F Istrian",1,0,1,1,0,0,0,0,1,1,0,1],
  ["F♯/G♭ Istrian",1,1,0,1,1,0,0,0,0,1,1,0],
  ["G Istrian",0,1,1,0,1,1,0,0,0,0,1,1],
  ["G♯/A♭ Istrian",1,0,1,1,0,1,1,0,0,0,0,1],
  ["A Istrian",1,1,0,1,1,0,1,1,0,0,0,0],
  ["A♯/B♭ Istrian",0,1,1,0,1,1,0,1,1,0,0,0],
  ["B Istrian",0,0,1,1,0,1,1,0,1,1,0,0],
/*   ["C Iwato",0,1,0,1,1,0,0,0,1,1,0,0],
  ["C♯/D♭ Iwato",0,0,1,0,1,1,0,0,0,1,1,0],
  ["D Iwato",0,0,0,1,0,1,1,0,0,0,1,1],
  ["D♯/E♭ Iwato",1,0,0,0,1,0,1,1,0,0,0,1],
  ["E Iwato",1,1,0,0,0,1,0,1,1,0,0,0],
  ["F Iwato",0,1,1,0,0,0,1,0,1,1,0,0],
  ["F♯/G♭ Iwato",0,0,1,1,0,0,0,1,0,1,1,0],
  ["G Iwato",0,0,0,1,1,0,0,0,1,0,1,1],
  ["G♯/A♭ Iwato",1,0,0,0,1,1,0,0,0,1,0,1],
  ["A Iwato",1,1,0,0,0,1,1,0,0,0,1,0],
  ["A♯/B♭ Iwato",0,1,1,0,0,0,1,1,0,0,0,1],
  ["B Iwato",1,0,1,1,0,0,0,1,1,0,0,0],
  ["C Lydian Augmented",1,0,1,1,0,1,0,1,0,1,0,1],
  ["C♯/D♭ Lydian Augmented",1,1,0,1,1,0,1,0,1,0,1,0],
  ["D Lydian Augmented",0,1,1,0,1,1,0,1,0,1,0,1],
  ["D♯/E♭ Lydian Augmented",1,0,1,1,0,1,1,0,1,0,1,0],
  ["E Lydian Augmented",0,1,0,1,1,0,1,1,0,1,0,1],
  ["F Lydian Augmented",1,0,1,0,1,1,0,1,1,0,1,0],
  ["F♯/G♭ Lydian Augmented",0,1,0,1,0,1,1,0,1,1,0,1],
  ["G Lydian Augmented",1,0,1,0,1,0,1,1,0,1,1,0],
  ["G♯/A♭ Lydian Augmented",0,1,0,1,0,1,0,1,1,0,1,1],
  ["A Lydian Augmented",1,0,1,0,1,0,1,0,1,1,0,1],
  ["A♯/B♭ Lydian Augmented",1,1,0,1,0,1,0,1,0,1,1,0],
  ["B Lydian Augmented",0,1,1,0,1,0,1,0,1,0,1,1], */
  ["C Bebop Major",1,0,1,1,0,1,0,1,1,0,1,1],
  ["C♯/D♭ Bebop Major",1,1,0,1,1,0,1,0,1,1,0,1],
  ["D Bebop Major",1,1,1,0,1,1,0,1,0,1,1,0],
  ["D♯/E♭ Bebop Major",0,1,1,1,0,1,1,0,1,0,1,1],
  ["E Bebop Major",1,0,1,1,1,0,1,1,0,1,0,1],
  ["F Bebop Major",1,1,0,1,1,1,0,1,1,0,1,0],
  ["F♯/G♭ Bebop Major",0,1,1,0,1,1,1,0,1,1,0,1],
  ["G Bebop Major",1,0,1,1,0,1,1,1,0,1,1,0],
  ["G♯/A♭ Bebop Major",0,1,0,1,1,0,1,1,1,0,1,1],
  ["A Bebop Major",1,0,1,0,1,1,0,1,1,1,0,1],
  ["A♯/B♭ Bebop Major",1,1,0,1,0,1,1,0,1,1,1,0],
  ["B Bebop Major",0,1,1,0,1,0,1,1,0,1,1,1],
  ["C Melodic Minor Bebop",1,0,1,1,0,1,1,0,1,0,1,1],
  ["C♯/D♭ Melodic Minor Bebop",1,1,0,1,1,0,1,1,0,1,0,1],
  ["D Melodic Minor Bebop",1,1,1,0,1,1,0,1,1,0,1,0],
  ["D♯/E♭ Melodic Minor Bebop",0,1,1,1,0,1,1,0,1,1,0,1],
  ["E Melodic Minor Bebop",1,0,1,1,1,0,1,1,0,1,1,0],
  ["F Melodic Minor Bebop",0,1,0,1,1,1,0,1,1,0,1,1],
  ["F♯/G♭ Melodic Minor Bebop",1,0,1,0,1,1,1,0,1,1,0,1],
  ["G Melodic Minor Bebop",1,1,0,1,0,1,1,1,0,1,1,0],
  ["G♯/A♭ Melodic Minor Bebop",0,1,1,0,1,0,1,1,1,0,1,1],
  ["A Melodic Minor Bebop",1,0,1,1,0,1,0,1,1,1,0,1],
  ["A♯/B♭ Melodic Minor Bebop",1,1,0,1,1,0,1,0,1,1,1,0],
  ["B Melodic Minor Bebop",0,1,1,0,1,1,0,1,0,1,1,1],
  ["C Locrian Bebop",1,0,1,1,1,1,0,1,1,0,1,0],
  ["C♯/D♭ Locrian Bebop",0,1,0,1,1,1,1,0,1,1,0,1],
  ["D Locrian Bebop",1,0,1,0,1,1,1,1,0,1,1,0],
  ["D♯/E♭ Locrian Bebop",0,1,0,1,0,1,1,1,1,0,1,1],
  ["E Locrian Bebop",1,0,1,0,1,0,1,1,1,1,0,1],
  ["F Locrian Bebop",1,1,0,1,0,1,0,1,1,1,1,0],
  ["F♯/G♭ Locrian Bebop",0,1,1,0,1,0,1,0,1,1,1,1],
  ["G Locrian Bebop",1,0,1,1,0,1,0,1,0,1,1,1],
  ["G♯/A♭ Locrian Bebop",1,1,0,1,1,0,1,0,1,0,1,1],
  ["A Locrian Bebop",1,1,1,0,1,1,0,1,0,1,0,1],
  ["A♯/B♭ Locrian Bebop",1,1,1,1,0,1,1,0,1,0,1,0],
  ["B Locrian Bebop",0,1,1,1,1,0,1,1,0,1,0,1],
/*   ["C Major Locrian",0,1,0,1,0,1,0,1,1,1,0,1],
  ["C♯/D♭ Major Locrian",1,0,1,0,1,0,1,0,1,1,1,0],
  ["D Major Locrian",0,1,0,1,0,1,0,1,0,1,1,1],
  ["D♯/E♭ Major Locrian",1,0,1,0,1,0,1,0,1,0,1,1],
  ["E Major Locrian",1,1,0,1,0,1,0,1,0,1,0,1],
  ["F Major Locrian",1,1,1,0,1,0,1,0,1,0,1,0],
  ["F♯/G♭ Major Locrian",0,1,1,1,0,1,0,1,0,1,0,1],
  ["G Major Locrian",1,0,1,1,1,0,1,0,1,0,1,0],
  ["G♯/A♭ Major Locrian",0,1,0,1,1,1,0,1,0,1,0,1],
  ["A Major Locrian",1,0,1,0,1,1,1,0,1,0,1,0],
  ["A♯/B♭ Major Locrian",0,1,0,1,0,1,1,1,0,1,0,1],
  ["B Major Locrian",1,0,1,0,1,0,1,1,1,0,1,0], */
  ["C Neapolitan Major",1,0,1,1,1,0,1,0,1,0,1,0],
  ["C♯/D♭ Neapolitan Major",0,1,0,1,1,1,0,1,0,1,0,1],
  ["D Neapolitan Major",1,0,1,0,1,1,1,0,1,0,1,0],
  ["D♯/E♭ Neapolitan Major",0,1,0,1,0,1,1,1,0,1,0,1],
  ["E Neapolitan Major",1,0,1,0,1,0,1,1,1,0,1,0],
  ["F Neapolitan Major",0,1,0,1,0,1,0,1,1,1,0,1],
  ["F♯/G♭ Neapolitan Major",1,0,1,0,1,0,1,0,1,1,1,0],
  ["G Neapolitan Major",0,1,0,1,0,1,0,1,0,1,1,1],
  ["G♯/A♭ Neapolitan Major",1,0,1,0,1,0,1,0,1,0,1,1],
  ["A Neapolitan Major",1,1,0,1,0,1,0,1,0,1,0,1],
  ["A♯/B♭ Neapolitan Major",1,1,1,0,1,0,1,0,1,0,1,0],
  ["B Neapolitan Major",0,1,1,1,0,1,0,1,0,1,0,1],
  ["C Neapolitan Minor",0,0,1,1,1,0,1,0,1,0,1,1],
  ["C♯/D♭ Neapolitan Minor",1,0,0,1,1,1,0,1,0,1,0,1],
  ["D Neapolitan Minor",1,1,0,0,1,1,1,0,1,0,1,0],
  ["D♯/E♭ Neapolitan Minor",0,1,1,0,0,1,1,1,0,1,0,1],
  ["E Neapolitan Minor",1,0,1,1,0,0,1,1,1,0,1,0],
  ["F Neapolitan Minor",0,1,0,1,1,0,0,1,1,1,0,1],
  ["F♯/G♭ Neapolitan Minor",1,0,1,0,1,1,0,0,1,1,1,0],
  ["G Neapolitan Minor",0,1,0,1,0,1,1,0,0,1,1,1],
  ["G♯/A♭ Neapolitan Minor",1,0,1,0,1,0,1,1,0,0,1,1],
  ["A Neapolitan Minor",1,1,0,1,0,1,0,1,1,0,0,1],
  ["A♯/B♭ Neapolitan Minor",1,1,1,0,1,0,1,0,1,1,0,0],
  ["B Neapolitan Minor",0,1,1,1,0,1,0,1,0,1,1,0],
  ["C Persian",0,0,1,1,1,0,0,1,1,1,0,1],
  ["C♯/D♭ Persian",1,0,0,1,1,1,0,0,1,1,1,0],
  ["D Persian",0,1,0,0,1,1,1,0,0,1,1,1],
  ["D♯/E♭ Persian",1,0,1,0,0,1,1,1,0,0,1,1],
  ["E Persian",1,1,0,1,0,0,1,1,1,0,0,1],
  ["F Persian",1,1,1,0,1,0,0,1,1,1,0,0],
  ["F♯/G♭ Persian",0,1,1,1,0,1,0,0,1,1,1,0],
  ["G Persian",0,0,1,1,1,0,1,0,0,1,1,1],
  ["G♯/A♭ Persian",1,0,0,1,1,1,0,1,0,0,1,1],
  ["A Persian",1,1,0,0,1,1,1,0,1,0,0,1],
  ["A♯/B♭ Persian",1,1,1,0,0,1,1,1,0,1,0,0],
  ["B Persian",0,1,1,1,0,0,1,1,1,0,1,0],
  ["C Pfluke",1,0,1,1,0,1,1,0,0,1,1,0],
  ["C♯/D♭ Pfluke",0,1,0,1,1,0,1,1,0,0,1,1],
  ["D Pfluke",1,0,1,0,1,1,0,1,1,0,0,1],
  ["D♯/E♭ Pfluke",1,1,0,1,0,1,1,0,1,1,0,0],
  ["E Pfluke",0,1,1,0,1,0,1,1,0,1,1,0],
  ["F Pfluke",0,0,1,1,0,1,0,1,1,0,1,1],
  ["F♯/G♭ Pfluke",1,0,0,1,1,0,1,0,1,1,0,1],
  ["G Pfluke",1,1,0,0,1,1,0,1,0,1,1,0],
  ["G♯/A♭ Pfluke",0,1,1,0,0,1,1,0,1,0,1,1],
  ["A Pfluke",1,0,1,1,0,0,1,1,0,1,0,1],
  ["A♯/B♭ Pfluke",1,1,0,1,1,0,0,1,1,0,1,0],
  ["B Pfluke",0,1,1,0,1,1,0,0,1,1,0,1],
/*   ["C Phrygian Dominant",0,1,0,1,1,0,0,1,1,0,1,1],
  ["C♯/D♭ Phrygian Dominant",1,0,1,0,1,1,0,0,1,1,0,1],
  ["D Phrygian Dominant",1,1,0,1,0,1,1,0,0,1,1,0],
  ["D♯/E♭ Phrygian Dominant",0,1,1,0,1,0,1,1,0,0,1,1],
  ["E Phrygian Dominant",1,0,1,1,0,1,0,1,1,0,0,1],
  ["F Phrygian Dominant",1,1,0,1,1,0,1,0,1,1,0,0],
  ["F♯/G♭ Phrygian Dominant",0,1,1,0,1,1,0,1,0,1,1,0],
  ["G Phrygian Dominant",0,0,1,1,0,1,1,0,1,0,1,1],
  ["G♯/A♭ Phrygian Dominant",1,0,0,1,1,0,1,1,0,1,0,1],
  ["A Phrygian Dominant",1,1,0,0,1,1,0,1,1,0,1,0],
  ["A♯/B♭ Phrygian Dominant",0,1,1,0,0,1,1,0,1,1,0,1],
  ["B Phrygian Dominant",1,0,1,1,0,0,1,1,0,1,1,0], */
  ["C Prometheus",1,1,0,1,0,1,0,1,0,1,0,0],
  ["C♯/D♭ Prometheus",0,1,1,0,1,0,1,0,1,0,1,0],
  ["D Prometheus",0,0,1,1,0,1,0,1,0,1,0,1],
  ["D♯/E♭ Prometheus",1,0,0,1,1,0,1,0,1,0,1,0],
  ["E Prometheus",0,1,0,0,1,1,0,1,0,1,0,1],
  ["F Prometheus",1,0,1,0,0,1,1,0,1,0,1,0],
  ["F♯/G♭ Prometheus",0,1,0,1,0,0,1,1,0,1,0,1],
  ["G Prometheus",1,0,1,0,1,0,0,1,1,0,1,0],
  ["G♯/A♭ Prometheus",0,1,0,1,0,1,0,0,1,1,0,1],
  ["A Prometheus",1,0,1,0,1,0,1,0,0,1,1,0],
  ["A♯/B♭ Prometheus",0,1,0,1,0,1,0,1,0,0,1,1],
  ["B Prometheus",1,0,1,0,1,0,1,0,1,0,0,1],
  ["C Tritone",0,1,0,1,1,0,0,1,0,1,1,0],
  ["C♯/D♭ Tritone",0,0,1,0,1,1,0,0,1,0,1,1],
  ["D Tritone",1,0,0,1,0,1,1,0,0,1,0,1],
  ["D♯/E♭ Tritone",1,1,0,0,1,0,1,1,0,0,1,0],
  ["E Tritone",0,1,1,0,0,1,0,1,1,0,0,1],
  ["F Tritone",1,0,1,1,0,0,1,0,1,1,0,0],
  ["F♯/G♭ Tritone",0,1,0,1,1,0,0,1,0,1,1,0],
  ["G Tritone",0,0,1,0,1,1,0,0,1,0,1,1],
  ["G♯/A♭ Tritone",1,0,0,1,0,1,1,0,0,1,0,1],
  ["A Tritone",1,1,0,0,1,0,1,1,0,0,1,0],
  ["A♯/B♭ Tritone",0,1,1,0,0,1,0,1,1,0,0,1],
  ["B Tritone",1,0,1,1,0,0,1,0,1,1,0,0],
  ["C Ukrainian Dorian",1,1,0,1,1,0,1,0,0,1,1,0],
  ["C♯/D♭ Ukrainian Dorian",0,1,1,0,1,1,0,1,0,0,1,1],
  ["D Ukrainian Dorian",1,0,1,1,0,1,1,0,1,0,0,1],
  ["D♯/E♭ Ukrainian Dorian",1,1,0,1,1,0,1,1,0,1,0,0],
  ["E Ukrainian Dorian",0,1,1,0,1,1,0,1,1,0,1,0],
  ["F Ukrainian Dorian",0,0,1,1,0,1,1,0,1,1,0,1],
  ["F♯/G♭ Ukrainian Dorian",1,0,0,1,1,0,1,1,0,1,1,0],
  ["G Ukrainian Dorian",0,1,0,0,1,1,0,1,1,0,1,1],
  ["G♯/A♭ Ukrainian Dorian",1,0,1,0,0,1,1,0,1,1,0,1],
  ["A Ukrainian Dorian",1,1,0,1,0,0,1,1,0,1,1,0],
  ["A♯/B♭ Ukrainian Dorian",0,1,1,0,1,0,0,1,1,0,1,1],
  ["B Ukrainian Dorian",1,0,1,1,0,1,0,0,1,1,0,1]
/*   ["C Yo",0,1,0,1,0,0,1,0,1,0,1,0],
  ["C♯/D♭ Yo",0,0,1,0,1,0,0,1,0,1,0,1],
  ["D Yo",1,0,0,1,0,1,0,0,1,0,1,0],
  ["D♯/E♭ Yo",0,1,0,0,1,0,1,0,0,1,0,1],
  ["E Yo",1,0,1,0,0,1,0,1,0,0,1,0],
  ["F Yo",0,1,0,1,0,0,1,0,1,0,0,1],
  ["F♯/G♭ Yo",1,0,1,0,1,0,0,1,0,1,0,0],
  ["G Yo",0,1,0,1,0,1,0,0,1,0,1,0],
  ["G♯/A♭ Yo",0,0,1,0,1,0,1,0,0,1,0,1],
  ["A Yo",1,0,0,1,0,1,0,1,0,0,1,0],
  ["A♯/B♭ Yo",0,1,0,0,1,0,1,0,1,0,0,1],
  ["B Yo",1,0,1,0,0,1,0,1,0,1,0,0] */
];

function changedisplaykey() {
  const tone = document.getElementById("Select1").value; //from the tone dropdown menu selector.
  const mode = document.getElementById("Select2").value; //from the scale dropdowm menu selector.
  const key = tone + " " + mode;
  console.log(key);
  document.getElementById("displayresults").innerHTML = key; //displays the results of the two dropdown selections.
  var tone2 = document.getElementById("Select1").value;
  var mode2 = document.getElementById("Select2").value;
  var key2 = tone2 + " " + mode2;
 //displays the results of the array search function from the dropdown selections.
 
 //Highlight cells scripts

 const CT = document.getElementById("C T"); 
 const CS = document.getElementById("C S"); 
 const CL = document.getElementById("C L"); 
 const CM = document.getElementById("C M"); 
 const CR = document.getElementById("C R"); 
 var result3 = displayLastName2(key2);
     if (result3 > 0) {

       CT.classList.remove("white");
       CT.classList.add("white-highlight");
       CS.classList.remove("white");
       CS.classList.add("white-highlight");
       CL.classList.remove("white");
       CL.classList.add("white-highlight");
       CM.classList.remove("white");
       CM.classList.add("white-highlight");
       CR.classList.remove("white");
       CR.classList.add("white-highlight");
     } else {
       CT.classList.remove("white-highlight");
       CT.classList.add("white");
       CS.classList.add("white");
       CS.classList.remove("white-highlight");
       CL.classList.add("white");
       CL.classList.remove("white-highlight");
       CM.classList.add("white");
       CM.classList.remove("white-highlight");
       CR.classList.add("white");
       CR.classList.remove("white-highlight");
     }
     
 const CsharpL = document.getElementById("Csharp L");  
 const CsharpM = document.getElementById("Csharp M"); 
 const CsharpR = document.getElementById("Csharp R"); 
 var result4 = displayLastName3(key2);
     if (result4 > 0) {

       CsharpL.classList.remove("black");
       CsharpL.classList.add("black-highlight");
       CsharpM.classList.remove("black");
       CsharpM.classList.add("black-highlight");
       CsharpR.classList.remove("black");
       CsharpR.classList.add("black-highlight");
     } else {
       CsharpL.classList.add("black");
       CsharpL.classList.remove("black-highlight");
       CsharpM.classList.add("black");
       CsharpM.classList.remove("black-highlight");
       CsharpR.classList.add("black");
       CsharpR.classList.remove("black-highlight");
     }

 const DT = document.getElementById("D T"); 
 const DS = document.getElementById("D S"); 
 const DL = document.getElementById("D L"); 
 const DML = document.getElementById("D ML"); 
 const DM = document.getElementById("D M"); 
 const DMR = document.getElementById("D MR"); 
 const DR = document.getElementById("D R"); 
 var result5 = displayLastName4(key2);
     if (result5 > 0) {

       DT.classList.remove("white");
       DT.classList.add("white-highlight");
       DS.classList.remove("white");
       DS.classList.add("white-highlight");
       DL.classList.remove("white");
       DL.classList.add("white-highlight");
       DML.classList.remove("white");
       DML.classList.add("white-highlight");
       DM.classList.remove("white");
       DM.classList.add("white-highlight");
       DMR.classList.remove("white");
       DMR.classList.add("white-highlight");
       DR.classList.remove("white");
       DR.classList.add("white-highlight");
     } else {
       DT.classList.remove("white-highlight");
       DT.classList.add("white");
       DS.classList.add("white");
       DS.classList.remove("white-highlight");
       DL.classList.add("white");
       DL.classList.remove("white-highlight");
       DML.classList.add("white");
       DML.classList.remove("white-highlight");
       DM.classList.add("white");
       DM.classList.remove("white-highlight");
       DMR.classList.add("white");
       DMR.classList.remove("white-highlight");
       DR.classList.add("white");
       DR.classList.remove("white-highlight");
     }
 const DsharpL = document.getElementById("Dsharp L");  
 const DsharpM = document.getElementById("Dsharp M"); 
 const DsharpR = document.getElementById("Dsharp R"); 
 var result6 = displayLastName5(key2);
     if (result6 > 0) {

       DsharpL.classList.remove("black");
       DsharpL.classList.add("black-highlight");
       DsharpM.classList.remove("black");
       DsharpM.classList.add("black-highlight");
       DsharpR.classList.remove("black");
       DsharpR.classList.add("black-highlight");
     } else {
       DsharpL.classList.add("black");
       DsharpL.classList.remove("black-highlight");
       DsharpM.classList.add("black");
       DsharpM.classList.remove("black-highlight");
       DsharpR.classList.add("black");
       DsharpR.classList.remove("black-highlight");
     }
 const ET = document.getElementById("E T"); 
 const ES = document.getElementById("E S"); 
 const EL = document.getElementById("E L"); 
 const EM = document.getElementById("E M"); 
 const ER = document.getElementById("E R"); 
 var result7 = displayLastName6(key2);
     if (result7 > 0) {

       ET.classList.remove("white");
       ET.classList.add("white-highlight");
       ES.classList.remove("white");
       ES.classList.add("white-highlight");
       EL.classList.remove("white");
       EL.classList.add("white-highlight");
       EM.classList.remove("white");
       EM.classList.add("white-highlight");
       ER.classList.remove("white");
       ER.classList.add("white-highlight");
     } else {
       ET.classList.remove("white-highlight");
       ET.classList.add("white");
       ES.classList.add("white");
       ES.classList.remove("white-highlight");
       EL.classList.add("white");
       EL.classList.remove("white-highlight");
       EM.classList.add("white");
       EM.classList.remove("white-highlight");
       ER.classList.add("white");
       ER.classList.remove("white-highlight");
     }
 const FT = document.getElementById("F T"); 
 const FS = document.getElementById("F S"); 
 const FL = document.getElementById("F L"); 
 const FM = document.getElementById("F M"); 
 const FR = document.getElementById("F R"); 
 var result8 = displayLastName7(key2);
     if (result8 > 0) {

       FT.classList.remove("white");
       FT.classList.add("white-highlight");
       FS.classList.remove("white");
       FS.classList.add("white-highlight");
       FL.classList.remove("white");
       FL.classList.add("white-highlight");
       FM.classList.remove("white");
       FM.classList.add("white-highlight");
       FR.classList.remove("white");
       FR.classList.add("white-highlight");
     } else {
       FT.classList.remove("white-highlight");
       FT.classList.add("white");
       FS.classList.add("white");
       FS.classList.remove("white-highlight");
       FL.classList.add("white");
       FL.classList.remove("white-highlight");
       FM.classList.add("white");
       FM.classList.remove("white-highlight");
       FR.classList.add("white");
       FR.classList.remove("white-highlight");
     }
 const FsharpL = document.getElementById("Fsharp L");  
 const FsharpM = document.getElementById("Fsharp M"); 
 const FsharpR = document.getElementById("Fsharp R"); 
 var result9 = displayLastName8(key2);
     if (result9 > 0) {

       FsharpL.classList.remove("black");
       FsharpL.classList.add("black-highlight");
       FsharpM.classList.remove("black");
       FsharpM.classList.add("black-highlight");
       FsharpR.classList.remove("black");
       FsharpR.classList.add("black-highlight");
     } else {
       FsharpL.classList.add("black");
       FsharpL.classList.remove("black-highlight");
       FsharpM.classList.add("black");
       FsharpM.classList.remove("black-highlight");
       FsharpR.classList.add("black");
       FsharpR.classList.remove("black-highlight");
     }

 const GT = document.getElementById("G T"); 
 const GS = document.getElementById("G S"); 
 const GL = document.getElementById("G L"); 
 const GML = document.getElementById("G ML"); 
 const GM = document.getElementById("G M"); 
 const GMR = document.getElementById("G MR"); 
 const GR = document.getElementById("G R"); 
 var result10 = displayLastName9(key2);
     if (result10 > 0) {

       GT.classList.remove("white");
       GT.classList.add("white-highlight");
       GS.classList.remove("white");
       GS.classList.add("white-highlight");
       GL.classList.remove("white");
       GL.classList.add("white-highlight");
       GML.classList.remove("white");
       GML.classList.add("white-highlight");
       GM.classList.remove("white");
       GM.classList.add("white-highlight");
       GMR.classList.remove("white");
       GMR.classList.add("white-highlight");
       GR.classList.remove("white");
       GR.classList.add("white-highlight");
     } else {
       GT.classList.remove("white-highlight");
       GT.classList.add("white");
       GS.classList.add("white");
       GS.classList.remove("white-highlight");
       GL.classList.add("white");
       GL.classList.remove("white-highlight");
       GML.classList.add("white");
       GML.classList.remove("white-highlight");
       GM.classList.add("white");
       GM.classList.remove("white-highlight");
       GMR.classList.add("white");
       GMR.classList.remove("white-highlight");
       GR.classList.add("white");
       GR.classList.remove("white-highlight");
     } 
 const GsharpL = document.getElementById("Gsharp L");  
 const GsharpM = document.getElementById("Gsharp M"); 
 const GsharpR = document.getElementById("Gsharp R"); 
 var result11 = displayLastName10(key2);
     if (result11 > 0) {

       GsharpL.classList.remove("black");
       GsharpL.classList.add("black-highlight");
       GsharpM.classList.remove("black");
       GsharpM.classList.add("black-highlight");
       GsharpR.classList.remove("black");
       GsharpR.classList.add("black-highlight");
     } else {
       GsharpL.classList.add("black");
       GsharpL.classList.remove("black-highlight");
       GsharpM.classList.add("black");
       GsharpM.classList.remove("black-highlight");
       GsharpR.classList.add("black");
       GsharpR.classList.remove("black-highlight");
     }
 const AT = document.getElementById("A T"); 
 const AS = document.getElementById("A S"); 
 const AL = document.getElementById("A L"); 
 const AML = document.getElementById("A ML"); 
 const AM = document.getElementById("A M"); 
 const AMR = document.getElementById("A MR"); 
 const AR = document.getElementById("A R"); 
 var result12 = displayLastName11(key2);
     if (result12 > 0) {

       AT.classList.remove("white");
       AT.classList.add("white-highlight");
       AS.classList.remove("white");
       AS.classList.add("white-highlight");
       AL.classList.remove("white");
       AL.classList.add("white-highlight");
       AML.classList.remove("white");
       AML.classList.add("white-highlight");
       AM.classList.remove("white");
       AM.classList.add("white-highlight");
       AMR.classList.remove("white");
       AMR.classList.add("white-highlight");
       AR.classList.remove("white");
       AR.classList.add("white-highlight");
     } else {
       AT.classList.remove("white-highlight");
       AT.classList.add("white");
       AS.classList.add("white");
       AS.classList.remove("white-highlight");
       AL.classList.add("white");
       AL.classList.remove("white-highlight");
       AML.classList.add("white");
       AML.classList.remove("white-highlight");
       AM.classList.add("white");
       AM.classList.remove("white-highlight");
       AMR.classList.add("white");
       AMR.classList.remove("white-highlight");
       AR.classList.add("white");
       AR.classList.remove("white-highlight");
     } 
 const AsharpL = document.getElementById("Asharp L");  
 const AsharpM = document.getElementById("Asharp M"); 
 const AsharpR = document.getElementById("Asharp R"); 
 var result13 = displayLastName12(key2);
     if (result13 > 0) {

       AsharpL.classList.remove("black");
       AsharpL.classList.add("black-highlight");
       AsharpM.classList.remove("black");
       AsharpM.classList.add("black-highlight");
       AsharpR.classList.remove("black");
       AsharpR.classList.add("black-highlight");
     } else {
       AsharpL.classList.add("black");
       AsharpL.classList.remove("black-highlight");
       AsharpM.classList.add("black");
       AsharpM.classList.remove("black-highlight");
       AsharpR.classList.add("black");
       AsharpR.classList.remove("black-highlight");
     }
 const BT = document.getElementById("B T"); 
 const BS = document.getElementById("B S"); 
 const BL = document.getElementById("B L"); 
 const BM = document.getElementById("B M"); 
 const BR = document.getElementById("B R"); 
 var result14 = displayLastName13(key2);
     if (result14 > 0) {

       BT.classList.remove("white");
       BT.classList.add("white-highlight");
       BS.classList.remove("white");
       BS.classList.add("white-highlight");
       BL.classList.remove("white");
       BL.classList.add("white-highlight");
       BM.classList.remove("white");
       BM.classList.add("white-highlight");
       BR.classList.remove("white");
       BR.classList.add("white-highlight");
     } else {
       BT.classList.remove("white-highlight");
       BT.classList.add("white");
       BS.classList.add("white");
       BS.classList.remove("white-highlight");
       BL.classList.add("white");
       BL.classList.remove("white-highlight");
       BM.classList.add("white");
       BM.classList.remove("white-highlight");
       BR.classList.add("white");
       BR.classList.remove("white-highlight");
     }

  }
  //array search mapping functions.

  function displayLastName2(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[4];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
  
    function displayLastName3(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[5];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
  
    function displayLastName4(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[6];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
    function displayLastName5(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[7];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
    function displayLastName6(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[8];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
    function displayLastName7(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[9];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
    function displayLastName8(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[10];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
    function displayLastName9(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[11];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
    function displayLastName10(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[12];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
    function displayLastName11(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[1];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
    function displayLastName12(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[2];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
    function displayLastName13(inputName) {
  
  return array
    .map(function(name, index) {
      console.log('first map: ', index, name);
      if (name[0] === inputName)
      return name[3];
      return null;
    })
  
    .filter(function(element) {
      console.log('filter: ', element);
      return element !== null;
      })[0];
  
    };
  //event listener that loads the results upon change in dropdown selection.
  document.getElementById("Select1").addEventListener("change", changedisplaykey);
  document.getElementById("Select2").addEventListener("change", changedisplaykey);
  
