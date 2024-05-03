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

//show/hide row and column toggle functions, for adding frets and strings

function toggleColumn(n) {
  var currentClass = document.getElementById("mytable").className;
  if (currentClass.indexOf("show" + n) != -1) {
    document.getElementById("mytable").className = currentClass.replace("show" + n, "");
  } else {
    document.getElementById("mytable").className += " " + "show" + n;
  }
}

function toggleRowHighE(){
  var subRow = document.getElementById("highEString");
  subRow.style.display = subRow.style.display === 'none' ? 'table-row' : 'none';    
}

function toggleRowHighB(){
  var subRow = document.getElementById("highBString");
  subRow.style.display = subRow.style.display === 'none' ? 'table-row' : 'none';    
}

function toggleRowLowB(){
  var subRow = document.getElementById("lowBString");
  subRow.style.display = subRow.style.display === 'none' ? 'table-row' : 'none';    
}

function toggleRowLowG(){
  var subRow = document.getElementById("lowGString");
  subRow.style.display = subRow.style.display === 'none' ? 'table-row' : 'none';    
}

//shift row cells left toggle, for detuning function.

/* 

Need to build out class based substitutions. Currently, all these functions do is shift the innerHTML text left and 
replace the leftmost cell's innerHTML with the rightmost cell's innerHTML. Not exactly functional! So, we need to do several things in these new Detune functions:

1) cells moved from the far right, or index[35], to index[0] need their .col5 class removed, class .rotate text and .highlight (or lack thereof) class from newly shifted cells at index[12] added, 
or whatever they were at index[11] prior to the shift to the left.
2) cells moved to index [1] need their .rotate-text class removed and to shift their remaining classes to the next cells to the right of them.
3) cells that moved left at index[2-12], or further depending on whether or not index[13-24] are shown, need add their .highlight classes to the next cells to the right of them, and
remove the previous .highlight classes.
4) cells that move to index[13] and beyond, if not shown, need to have col1,2,3,4, or 5 (aka a display: none class toggle, depending on where they are) added. 
Similar would be true for index[21, 22, & 23] if not shown. If all 24 indexes are shown, then this would apply to index[25]. 
Otherwise, if any of those cells at index[13-24] are shown, then rule 2 conditions would apply. 

TO DO: Need to figure out the column show/hide toggle buttons, need to be able to collapse all columns back to say 12, currently one all columns are expanded, 
collapsing using the toggle above column 12 doesn't collpase the other columns with it. Possibly just have a full 13-24 expand toggle and shrink down from there. 
Similar issue currently with the string row toggles, not as big of a deal but is kind of clunky! 

ALSO: Rewrite the JS code for the .highlight class to add highlight class to cells based on scale selected. Possibly do a query selector on each class, have some 
conditional functions apply based on cell class list, apply a highlight class based on whether or not the note is part of the newly mapped array from the 
drop down selections. HTML ElementID based functions or variables for individual cells are not best suited for this type of variability in shifts, contrary to how the original page JS was written.

Basically, need a toggle if/else function applied for each note class, 
i.e. if C is in new mapped array, add CNote-Highlight to class list, else add CNote-No-Highlight to class list; etc.

*/

function shiftHighELeft(){
  var row = document.getElementById("highEString");
  
    // Get the last cell value
    const lastCellValue = row.cells[13].innerHTML;
    const lastCellClass = row.cells[13].className;

    // Shift the cells to the left
    for (let i = row.cells.length - 1; i > 1; i--) {
      row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
      row.cells[i].className = row.cells[i - 1].className;
    }

    row.cells[15].classList.add("col1");
    row.cells[23].classList.remove("col1");
    row.cells[23].classList.add("col2");
    row.cells[24].classList.remove("col2");
    row.cells[24].classList.add("col3");
    row.cells[25].classList.remove("col3");
    row.cells[25].classList.add("col4");
    row.cells[27].classList.add("col5")
    row.cells[27].classList.remove("col4")
 
    // Replace the leftmost cell with the last cell value
    row.cells[2].innerHTML = lastCellValue; 
    row.cells[2].className = lastCellClass;
    row.cells[2].classList.remove("col5")
    row.cells[2].classList.add("rotate-text")

    // Remove .rotate-text from the second cell
    row.cells[3].classList.remove("rotate-text")  
}

function shiftHighBLeft(){
  var row = document.getElementById("highBString");
  
    // Get the last cell value
    const lastCellValue = row.cells[13].innerHTML;
    const lastCellClass = row.cells[13].className;

    // Shift the cells to the left
    for (let i = row.cells.length - 1; i > 1; i--) {
      row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
      row.cells[i].className = row.cells[i - 1].className;
    }

    row.cells[15].classList.add("col1");
    row.cells[23].classList.remove("col1");
    row.cells[23].classList.add("col2");
    row.cells[24].classList.remove("col2");
    row.cells[24].classList.add("col3");
    row.cells[25].classList.remove("col3");
    row.cells[25].classList.add("col4");
    row.cells[27].classList.add("col5")
    row.cells[27].classList.remove("col4")
 
    // Replace the leftmost cell with the last cell value
    row.cells[2].innerHTML = lastCellValue; 
    row.cells[2].className = lastCellClass;
    row.cells[2].classList.remove("col5")
    row.cells[2].classList.add("rotate-text")

    // Remove .rotate-text from the second cell
    row.cells[3].classList.remove("rotate-text")   
}

function shiftHighGLeft(){
  var row = document.getElementById("highGString");
  
    // Get the last cell value
    const lastCellValue = row.cells[13].innerHTML;
    const lastCellClass = row.cells[13].className;

    // Shift the cells to the left
    for (let i = row.cells.length - 1; i > 1; i--) {
      row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
      row.cells[i].className = row.cells[i - 1].className;
    }

    row.cells[15].classList.add("col1");
    row.cells[23].classList.remove("col1");
    row.cells[23].classList.add("col2");
    row.cells[24].classList.remove("col2");
    row.cells[24].classList.add("col3");
    row.cells[25].classList.remove("col3");
    row.cells[25].classList.add("col4");
    row.cells[27].classList.add("col5")
    row.cells[27].classList.remove("col4")
 
    // Replace the leftmost cell with the last cell value
    row.cells[2].innerHTML = lastCellValue; 
    row.cells[2].className = lastCellClass;
    row.cells[2].classList.remove("col5")
    row.cells[2].classList.add("rotate-text")

    // Remove .rotate-text from the second cell
    row.cells[3].classList.remove("rotate-text")  
}

function shiftALeft(){
  var row = document.getElementById("AString");
  
    // Get the last cell value
    const lastCellValue = row.cells[13].innerHTML;
    const lastCellClass = row.cells[13].className;

    // Shift the cells to the left
    for (let i = row.cells.length - 1; i > 1; i--) {
      row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
      row.cells[i].className = row.cells[i - 1].className;
    }

    row.cells[15].classList.add("col1");
    row.cells[23].classList.remove("col1");
    row.cells[23].classList.add("col2");
    row.cells[24].classList.remove("col2");
    row.cells[24].classList.add("col3");
    row.cells[25].classList.remove("col3");
    row.cells[25].classList.add("col4");
    row.cells[27].classList.add("col5")
    row.cells[27].classList.remove("col4")
 
    // Replace the leftmost cell with the last cell value
    row.cells[2].innerHTML = lastCellValue; 
    row.cells[2].className = lastCellClass;
    row.cells[2].classList.remove("col5")
    row.cells[2].classList.add("rotate-text")

    // Remove .rotate-text from the second cell
    row.cells[3].classList.remove("rotate-text")  
}

function shiftDLeft(){
  var row = document.getElementById("DString");
  
    // Get the last cell value
    const lastCellValue = row.cells[13].innerHTML;
    const lastCellClass = row.cells[13].className;

    // Shift the cells to the left
    for (let i = row.cells.length - 1; i > 1; i--) {
      row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
      row.cells[i].className = row.cells[i - 1].className;
    }

    row.cells[15].classList.add("col1");
    row.cells[23].classList.remove("col1");
    row.cells[23].classList.add("col2");
    row.cells[24].classList.remove("col2");
    row.cells[24].classList.add("col3");
    row.cells[25].classList.remove("col3");
    row.cells[25].classList.add("col4");
    row.cells[27].classList.add("col5")
    row.cells[27].classList.remove("col4")
 
    // Replace the leftmost cell with the last cell value
    row.cells[2].innerHTML = lastCellValue; 
    row.cells[2].className = lastCellClass;
    row.cells[2].classList.remove("col5")
    row.cells[2].classList.add("rotate-text")

    // Remove .rotate-text from the second cell
    row.cells[3].classList.remove("rotate-text")   
}

function shiftLowELeft(){
  var row = document.getElementById("lowEString");
  
    // Get the last cell value
    const lastCellValue = row.cells[13].innerHTML;
    const lastCellClass = row.cells[13].className;

    // Shift the cells to the left
    for (let i = row.cells.length - 1; i > 1; i--) {
      row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
      row.cells[i].className = row.cells[i - 1].className;
    }

    row.cells[15].classList.add("col1");
    row.cells[23].classList.remove("col1");
    row.cells[23].classList.add("col2");
    row.cells[24].classList.remove("col2");
    row.cells[24].classList.add("col3");
    row.cells[25].classList.remove("col3");
    row.cells[25].classList.add("col4");
    row.cells[27].classList.add("col5")
    row.cells[27].classList.remove("col4")
 
    // Replace the leftmost cell with the last cell value
    row.cells[2].innerHTML = lastCellValue; 
    row.cells[2].className = lastCellClass;
    row.cells[2].classList.remove("col5")
    row.cells[2].classList.add("rotate-text")

    // Remove .rotate-text from the second cell
    row.cells[3].classList.remove("rotate-text")  
}

function shiftLowBLeft(){
  var row = document.getElementById("lowBString");
  
    // Get the last cell value
    const lastCellValue = row.cells[13].innerHTML;
    const lastCellClass = row.cells[13].className;

    // Shift the cells to the left
    for (let i = row.cells.length - 1; i > 1; i--) {
      row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
      row.cells[i].className = row.cells[i - 1].className;
    }

    row.cells[15].classList.add("col1");
    row.cells[23].classList.remove("col1");
    row.cells[23].classList.add("col2");
    row.cells[24].classList.remove("col2");
    row.cells[24].classList.add("col3");
    row.cells[25].classList.remove("col3");
    row.cells[25].classList.add("col4");
    row.cells[27].classList.add("col5")
    row.cells[27].classList.remove("col4")
 
    // Replace the leftmost cell with the last cell value
    row.cells[2].innerHTML = lastCellValue; 
    row.cells[2].className = lastCellClass;
    row.cells[2].classList.remove("col5")
    row.cells[2].classList.add("rotate-text")

    // Remove .rotate-text from the second cell
    row.cells[3].classList.remove("rotate-text")   
}

function shiftLowGLeft(){
  var row = document.getElementById("lowGString");
  
    // Get the last cell value
    const lastCellValue = row.cells[13].innerHTML;
    const lastCellClass = row.cells[13].className;

    // Shift the cells to the left
    for (let i = row.cells.length - 1; i > 1; i--) {
      row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
      row.cells[i].className = row.cells[i - 1].className;
    }

    row.cells[15].classList.add("col1");
    row.cells[23].classList.remove("col1");
    row.cells[23].classList.add("col2");
    row.cells[24].classList.remove("col2");
    row.cells[24].classList.add("col3");
    row.cells[25].classList.remove("col3");
    row.cells[25].classList.add("col4");
    row.cells[27].classList.add("col5")
    row.cells[27].classList.remove("col4")
 
    // Replace the leftmost cell with the last cell value
    row.cells[2].innerHTML = lastCellValue; 
    row.cells[2].className = lastCellClass;
    row.cells[2].classList.remove("col5")
    row.cells[2].classList.add("rotate-text")

    // Remove .rotate-text from the second cell
    row.cells[3].classList.remove("rotate-text")  
}

const seriesOfArrays = [
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "C Major (Ionian)"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "C♯/D♭ Major (Ionian)"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "D Major (Ionian)"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "D♯/E♭ Major (Ionian)"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "E Major (Ionian)"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "F Major (Ionian)"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "F♯/G♭ Major (Ionian)"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "G Major (Ionian)"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "G♯/A♭ Major (Ionian)"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "A Major (Ionian)"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "A♯/B♭ Major (Ionian)"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "B Major (Ionian)"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "C Dorian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "C♯/D♭ Dorian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "D Dorian"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "D♯/E♭ Dorian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "E Dorian"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "F Dorian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "F♯/G♭ Dorian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "G Dorian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "G♯/A♭ Dorian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "A Dorian"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "A♯/B♭ Dorian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "B Dorian"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "C Phrygian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "C♯/D♭ Phrygian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "D Phrygian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "D♯/E♭ Phrygian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "E Phrygian"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "F Phrygian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "F♯/G♭ Phrygian"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "G Phrygian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "G♯/A♭ Phrygian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "A Phrygian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "A♯/B♭ Phrygian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "B Phrygian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "C Lydian"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "C♯/D♭ Lydian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "D Lydian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "D♯/E♭ Lydian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "E Lydian"
  ],
  [
    10, 
    0, 
    12, 
    1, 
    0, 
    3, 
    0, 
    5, 
    6, 
    0, 
    8, 
    0, 
    "F Lydian"
  ],
  [
    0, 
    11, 
    0, 
    1, 
    2, 
    0, 
    4, 
    0, 
    6, 
    7, 
    0, 
    9, 
    "F♯/G♭ Lydian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "G Lydian"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "G♯/A♭ Lydian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "A Lydian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "A♯/B♭ Lydian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "B Lydian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "C Mixolydian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "C♯/D♭ Mixolydian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "D Mixolydian"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "D♯/E♭ Mixolydian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "E Mixolydian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "F Mixolydian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "F♯/G♭ Mixolydian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "G Mixolydian"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "G♯/A♭ Mixolydian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "A Mixolydian"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "A♯/B♭ Mixolydian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "B Mixolydian"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "C Minor (Aeolian)"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "C♯/D♭ Minor (Aeolian)"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "D Minor (Aeolian)"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "D♯/E♭ Minor (Aeolian)"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "E Minor (Aeolian)"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "F Minor (Aeolian)"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "F♯/G♭ Minor (Aeolian)"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "G Minor (Aeolian)"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "G♯/A♭ Minor (Aeolian)"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "A Minor (Aeolian)"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "A♯/B♭ Minor (Aeolian)"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "B Minor (Aeolian)"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "C Locrian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "C♯/D♭ Locrian"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "D Locrian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "D♯/E♭ Locrian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "E Locrian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "F Locrian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "F♯/G♭ Locrian"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "G Locrian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "G♯/A♭ Locrian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "A Locrian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "A♯/B♭ Locrian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "B Locrian"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "C Harmonic Minor"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "C♯/D♭ Harmonic Minor"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "D Harmonic Minor"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "D♯/E♭ Harmonic Minor"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "E Harmonic Minor"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    0,
    8,
    9,
    "F Harmonic Minor"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    0,
    9,
    "F♯/G♭ Harmonic Minor"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    0,
    "G Harmonic Minor"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "G♯/A♭ Harmonic Minor"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "A Harmonic Minor"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    0,
    "A♯/B♭ Harmonic Minor"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "B Harmonic Minor"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "C Melodic Minor"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "C♯/D♭ Melodic Minor"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "D Melodic Minor"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "D♯/E♭ Melodic Minor"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "E Melodic Minor"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "F Melodic Minor"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "F♯/G♭ Melodic Minor"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "G Melodic Minor"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "G♯/A♭ Melodic Minor"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "A Melodic Minor"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "A♯/B♭ Melodic Minor"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "B Melodic Minor"
  ],
  [0,11,0,1,0,3,4,0,6,7,8,9,"C Blues Minor"],
  [10,0,12,0,2,0,4,5,0,7,8,9,"C♯/D♭ Blues Minor"],
  [10,11,0,1,0,3,0,5,6,0,8,9,"D Blues Minor"],
  [10,11,12,0,2,0,4,0,6,7,0,9,"D♯/E♭ Blues Minor"],
  [10,11,12,1,0,3,0,5,0,7,8,0,"E Blues Minor"],
  [0,11,12,1,2,0,4,0,6,0,8,9,"F Blues Minor"],
  [10,0,12,1,2,3,0,5,0,7,0,9,"F♯/G♭ Blues Minor"],
  [10,11,0,1,2,3,4,0,6,0,8,0,"G Blues Minor"],
  [0,11,12,0,2,3,4,5,0,7,0,9,"G♯/A♭ Blues Minor"],
  [10,0,12,1,0,3,4,5,6,0,8,0,"A Blues Minor"],
  [0,11,0,1,2,0,4,5,6,7,0,9,"A♯/B♭ Blues Minor"],
  [10,0,12,0,2,3,0,5,6,7,8,0,"B Blues Minor"],
  [10,0,0,1,0,3,0,5,6,0,8,0,"C Major Hexatonic"],
  [0,11,0,0,2,0,4,0,6,7,0,9,"C♯/D♭ Major Hexatonic"],
  [10,0,12,0,0,3,0,5,0,7,8,0,"D Major Hexatonic"],
  [0,11,0,1,0,0,4,0,6,0,8,9,"D♯/E♭ Major Hexatonic"],
  [10,0,12,0,2,0,0,5,0,7,0,9,"E Major Hexatonic"],
  [10,11,0,1,0,3,0,0,6,0,8,0,"F Major Hexatonic"],
  [0,11,12,0,2,0,4,0,0,7,0,9,"F♯/G♭ Major Hexatonic"],
  [10,0,12,1,0,3,0,5,0,0,8,0,"G Major Hexatonic"],
  [0,11,0,1,2,0,4,0,6,0,0,9,"G♯/A♭ Major Hexatonic"],
  [10,0,12,0,2,3,0,5,0,7,0,0,"A Major Hexatonic"],
  [0,11,0,1,0,3,4,0,6,0,8,0,"A♯/B♭ Major Hexatonic"],
  [0,0,12,0,2,0,4,5,0,7,0,9,"B Major Hexatonic"],
  [0,11,0,1,0,3,4,0,6,0,8,0,"C Minor Hexatonic"],
  [0,0,12,0,2,0,4,5,0,7,0,9,"C♯/D♭ Minor Hexatonic"],
  [10,0,0,1,0,3,0,5,6,0,8,0,"D Minor Hexatonic"],
  [0,11,0,0,2,0,4,0,6,7,0,9,"D♯/E♭ Minor Hexatonic"],
  [10,0,12,0,0,3,0,5,0,7,8,0,"E Minor Hexatonic"],
  [0,11,0,1,0,0,4,0,6,0,8,9,"F Minor Hexatonic"],
  [10,0,12,0,2,0,0,5,0,7,0,9,"F♯/G♭ Minor Hexatonic"],
  [10,11,0,1,0,3,0,0,6,0,8,0,"G Minor Hexatonic"],
  [0,11,12,0,2,0,4,0,0,7,0,9,"G♯/A♭ Minor Hexatonic"],
  [10,0,12,1,0,3,0,5,0,0,8,0,"A Minor Hexatonic"],
  [0,11,0,1,2,0,4,0,6,0,0,9,"A♯/B♭ Minor Hexatonic"],
  [10,0,12,0,2,3,0,5,0,7,0,0,"B Minor Hexatonic"],
  
  [
    10,
    0,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    0,
    8,
    0,
    "C Major Pentatonic"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    0,
    9,
    "C♯/D♭ Major Pentatonic"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    0,
    "D Major Pentatonic"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "D♯/E♭ Major Pentatonic"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    0,
    0,
    5,
    0,
    7,
    0,
    9,
    "E Major Pentatonic"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    0,
    0,
    6,
    0,
    8,
    0,
    "F Major Pentatonic"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    0,
    4,
    0,
    0,
    7,
    0,
    9,
    "F♯/G♭ Major Pentatonic"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    0,
    5,
    0,
    0,
    8,
    0,
    "G Major Pentatonic"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    0,
    4,
    0,
    6,
    0,
    0,
    9,
    "G♯/A♭ Major Pentatonic"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    0,
    5,
    0,
    7,
    0,
    0,
    "A Major Pentatonic"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    0,
    6,
    0,
    8,
    0,
    "A♯/B♭ Major Pentatonic"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    0,
    7,
    0,
    9,
    "B Major Pentatonic"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "C Minor Pentatonic"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    0,
    0,
    5,
    0,
    7,
    0,
    9,
    "C♯/D♭ Minor Pentatonic"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    0,
    0,
    6,
    0,
    8,
    0,
    "D Minor Pentatonic"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    0,
    4,
    0,
    0,
    7,
    0,
    9,
    "D♯/E♭ Minor Pentatonic"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    0,
    5,
    0,
    0,
    8,
    0,
    "E Minor Pentatonic"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    0,
    4,
    0,
    6,
    0,
    0,
    9,
    "F Minor Pentatonic"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    0,
    5,
    0,
    7,
    0,
    0,
    "F♯/G♭ Minor Pentatonic"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    0,
    6,
    0,
    8,
    0,
    "G Minor Pentatonic"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    0,
    7,
    0,
    9,
    "G♯/A♭ Minor Pentatonic"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    0,
    8,
    0,
    "A Minor Pentatonic"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    0,
    9,
    "A♯/B♭ Minor Pentatonic"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    0,
    "B Minor Pentatonic"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    0,
    4,
    0,
    6,
    7,
    8,
    0,
    "C Blues"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    0,
    0,
    5,
    0,
    7,
    8,
    9,
    "C♯/D♭ Blues"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    0,
    0,
    6,
    0,
    8,
    9,
    "D Blues"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    0,
    4,
    0,
    0,
    7,
    0,
    9,
    "D♯/E♭ Blues"
  ],
  [
    10,
    11,
    12,
    0,
    0,
    3,
    0,
    5,
    0,
    0,
    8,
    0,
    "E Blues"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    0,
    4,
    0,
    6,
    0,
    0,
    9,
    "F Blues"
  ],
  [
    10,
    0,
    12,
    1,
    2,
    0,
    0,
    5,
    0,
    7,
    0,
    0,
    "F♯/G♭ Blues"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    3,
    0,
    0,
    6,
    0,
    8,
    0,
    "G Blues"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    3,
    4,
    0,
    0,
    7,
    0,
    9,
    "G♯/A♭ Blues"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    4,
    5,
    0,
    0,
    8,
    0,
    "A Blues"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    0,
    4,
    5,
    6,
    0,
    0,
    9,
    "A♯/B♭ Blues"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    0,
    5,
    6,
    7,
    0,
    0,
    "B Blues"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    0,
    4,
    5,
    6,
    7,
    8,
    0,
    "C Mixo Blues"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    0,
    0,
    5,
    6,
    7,
    8,
    9,
    "C♯/D♭ Mixo Blues"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    0,
    0,
    6,
    7,
    8,
    9,
    "D Mixo Blues"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    0,
    4,
    0,
    0,
    7,
    8,
    9,
    "D♯/E♭ Mixo Blues"
  ],
  [
    10,
    11,
    12,
    0,
    0,
    3,
    0,
    5,
    0,
    0,
    8,
    9,
    "E Mixo Blues"
  ],
  [
    10,
    11,
    12,
    1,
    0,
    0,
    4,
    0,
    6,
    0,
    0,
    9,
    "F Mixo Blues"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    0,
    0,
    5,
    0,
    7,
    0,
    0,
    "F♯/G♭ Mixo Blues"
  ],
  [
    0,
    11,
    12,
    1,
    2,
    3,
    0,
    0,
    6,
    0,
    8,
    0,
    "G Mixo Blues"
  ],
  [
    0,
    0,
    12,
    1,
    2,
    3,
    4,
    0,
    0,
    7,
    0,
    9,
    "G♯/A♭ Mixo Blues"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    3,
    4,
    5,
    0,
    0,
    8,
    0,
    "A Mixo Blues"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    3,
    4,
    5,
    6,
    0,
    0,
    9,
    "A♯/B♭ Mixo Blues"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    4,
    5,
    6,
    7,
    0,
    0,
    "B Mixo Blues"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "C Diminished"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "C♯/D♭ Diminished"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "D Diminished"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "D♯/E♭ Diminished"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "E Diminished"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "F Diminished"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "F♯/G♭ Diminished"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "G Diminished"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "G♯/A♭ Diminished"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "A Diminished"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "A♯/B♭ Diminished"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "B Diminished"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "C Whole Tone"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "C♯/D♭ Whole Tone"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "D Whole Tone"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "D♯/E♭ Whole Tone"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "E Whole Tone"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "F Whole Tone"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "F♯/G♭ Whole Tone"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "G Whole Tone"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "G♯/A♭ Whole Tone"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "A Whole Tone"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "A♯/B♭ Whole Tone"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "B Whole Tone"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "C Chromatic"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "C♯/D♭ Chromatic"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "D Chromatic"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "D♯/E♭ Chromatic"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "E Chromatic"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "F Chromatic"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "F♯/G♭ Chromatic"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "G Chromatic"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "G♯/A♭ Chromatic"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A Chromatic"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A♯/B♭ Chromatic"
  ],
  [
    10,
    11,
    12,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "B Chromatic"
  ],
 /* Duplicate scales [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "C Acoustic"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "C♯/D♭ Acoustic"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "D Acoustic"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "D♯/E♭ Acoustic"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "E Acoustic"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "F Acoustic"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "F♯/G♭ Acoustic"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "G Acoustic"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "G♯/A♭ Acoustic"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "A Acoustic"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "A♯/B♭ Acoustic"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "B Acoustic"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    9,
    "C Algerian"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "C♯/D♭ Algerian"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "D Algerian"
  ],
  [
    10,
    11,
    12,
    0,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    0,
    "D♯/E♭ Algerian"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "E Algerian"
  ],
  [
    0,
    0,
    12,
    1,
    2,
    0,
    0,
    5,
    6,
    0,
    8,
    9,
    "F Algerian"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    3,
    0,
    0,
    6,
    7,
    0,
    9,
    "F♯/G♭ Algerian"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    4,
    0,
    0,
    7,
    8,
    0,
    "G Algerian"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    5,
    0,
    0,
    8,
    9,
    "G♯/A♭ Algerian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    6,
    0,
    0,
    9,
    "A Algerian"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    7,
    0,
    0,
    "A♯/B♭ Algerian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    8,
    0,
    "B Algerian"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "C Altered"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "C♯/D♭ Altered"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "D Altered"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "D♯/E♭ Altered"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "E Altered"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "F Altered"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "F♯/G♭ Altered"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "G Altered"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "G♯/A♭ Altered"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "A Altered"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "A♯/B♭ Altered"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "B Altered"
  ], */
  [
    0,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "C Augmented"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    0,
    0,
    9,
    "C♯/D♭ Augmented"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    0,
    0,
    "D Augmented"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    0,
    "D♯/E♭ Augmented"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "E Augmented"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    0,
    0,
    9,
    "F Augmented"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    0,
    0,
    "F♯/G♭ Augmented"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    0,
    "G Augmented"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "G♯/A♭ Augmented"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    0,
    0,
    9,
    "A Augmented"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    0,
    0,
    "A♯/B♭ Augmented"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    0,
    "B Augmented"
  ],
  [
    10,
    11,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "C Bebop Dominant"
  ],
  [
    0,
    11,
    12,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "C♯/D♭ Bebop Dominant"
  ],
  [
    10,
    0,
    12,
    1,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "D Bebop Dominant"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "D♯/E♭ Bebop Dominant"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    4,
    5,
    0,
    7,
    0,
    9,
    "E Bebop Dominant"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    5,
    6,
    0,
    8,
    0,
    "F Bebop Dominant"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    6,
    7,
    0,
    9,
    "F♯/G♭ Bebop Dominant"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    7,
    8,
    0,
    "G Bebop Dominant"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    8,
    9,
    "G♯/A♭ Bebop Dominant"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    9,
    "A Bebop Dominant"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "A♯/B♭ Bebop Dominant"
  ],
  [
    10,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "B Bebop Dominant"
  ],
  [10,0,12,1,0,3,4,0,6,0,8,9,"C Melodic Minor Bebop"],
  [10,11,0,1,2,0,4,5,0,7,0,9,"C♯/D♭ Melodic Minor Bebop"],
  [10,11,12,0,2,3,0,5,6,0,8,0,"D Melodic Minor Bebop"],
  [0,11,12,1,0,3,4,0,6,7,0,9,"D♯/E♭ Melodic Minor Bebop"],
  [10,0,12,1,2,0,4,5,0,7,8,0,"E Melodic Minor Bebop"],
  [0,11,0,1,2,3,0,5,6,0,8,9,"F Melodic Minor Bebop"],
  [10,0,12,0,2,3,4,0,6,7,0,9,"F♯/G♭ Melodic Minor Bebop"],
  [10,11,0,1,0,3,4,5,0,7,8,0,"G Melodic Minor Bebop"],
  [0,11,12,0,2,0,4,5,6,0,8,9,"G♯/A♭ Melodic Minor Bebop"],
  [10,0,12,1,0,3,0,5,6,7,0,9,"A Melodic Minor Bebop"],
  [10,11,0,1,2,0,4,0,6,7,8,0,"A♯/B♭ Melodic Minor Bebop"],
  [0,11,12,0,2,3,0,5,0,7,8,9,"B Melodic Minor Bebop"],
  [10,0,12,1,2,3,0,5,6,0,8,0,"C Locrian Bebop"],
  [0,11,0,1,2,3,4,0,6,7,0,9,"C♯/D♭ Locrian Bebop"],
  [10,0,12,0,2,3,4,5,0,7,8,0,"D Locrian Bebop"],
  [0,11,0,1,0,3,4,5,6,0,8,9,"D♯/E♭ Locrian Bebop"],
  [10,0,12,0,2,0,4,5,6,7,0,9,"E Locrian Bebop"],
  [10,11,0,1,0,3,0,5,6,7,8,0,"F Locrian Bebop"],
  [0,11,12,0,2,0,4,0,6,7,8,9,"F♯/G♭ Locrian Bebop"],
  [10,0,12,1,0,3,0,5,0,7,8,9,"G Locrian Bebop"],
  [10,11,0,1,2,0,4,0,6,0,8,9,"G♯/A♭ Locrian Bebop"],
  [10,11,12,0,2,3,0,5,0,7,0,9,"A Locrian Bebop"],
  [10,11,12,1,0,3,4,0,6,0,8,0,"A♯/B♭ Locrian Bebop"],
  [0,11,12,1,2,0,4,5,0,7,0,9,"B Locrian Bebop"],
  [
    0,
    0,
    12,
    1,
    2,
    0,
    0,
    5,
    6,
    0,
    8,
    9,
    "C Double Harmonic"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    3,
    0,
    0,
    6,
    7,
    0,
    9,
    "C♯/D♭ Double Harmonic"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    4,
    0,
    0,
    7,
    8,
    0,
    "D Double Harmonic"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    5,
    0,
    0,
    8,
    9,
    "D♯/E♭ Double Harmonic"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    6,
    0,
    0,
    9,
    "E Double Harmonic"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    7,
    0,
    0,
    "F Double Harmonic"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    8,
    0,
    "F♯/G♭ Double Harmonic"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    9,
    "G Double Harmonic"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "G♯/A♭ Double Harmonic"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "A Double Harmonic"
  ],
  [
    10,
    11,
    12,
    0,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    0,
    "A♯/B♭ Double Harmonic"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "B Double Harmonic"
  ],
  [
    0,
    11,
    12,
    1,
    2,
    0,
    0,
    5,
    0,
    7,
    0,
    9,
    "C Enigmatic"
  ],
  [
    10,
    0,
    12,
    1,
    2,
    3,
    0,
    0,
    6,
    0,
    8,
    0,
    "C♯/D♭ Enigmatic"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    3,
    4,
    0,
    0,
    7,
    0,
    9,
    "D Enigmatic"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    4,
    5,
    0,
    0,
    8,
    0,
    "D♯/E♭ Enigmatic"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    5,
    6,
    0,
    0,
    9,
    "E Enigmatic"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    6,
    7,
    0,
    0,
    "F Enigmatic"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    7,
    8,
    0,
    "F♯/G♭ Enigmatic"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    8,
    9,
    "G Enigmatic"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    9,
    "G♯/A♭ Enigmatic"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "A Enigmatic"
  ],
  [
    10,
    11,
    12,
    0,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "A♯/B♭ Enigmatic"
  ],
  [
    10,
    11,
    12,
    1,
    0,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "B Enigmatic"
  ],
/* Duplicate scales  [
    0,
    0,
    12,
    1,
    2,
    0,
    0,
    5,
    6,
    0,
    8,
    9,
    "C Flamenco"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    3,
    0,
    0,
    6,
    7,
    0,
    9,
    "C♯/D♭ Flamenco"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    4,
    0,
    0,
    7,
    8,
    0,
    "D Flamenco"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    5,
    0,
    0,
    8,
    9,
    "D♯/E♭ Flamenco"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    6,
    0,
    0,
    9,
    "E Flamenco"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    7,
    0,
    0,
    "F Flamenco"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    8,
    0,
    "F♯/G♭ Flamenco"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    9,
    "G Flamenco"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "G♯/A♭ Flamenco"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "A Flamenco"
  ],
  [
    10,
    11,
    12,
    0,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    0,
    "A♯/B♭ Flamenco"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "B Flamenco"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    9,
    "C Gypsy"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "C♯/D♭ Gypsy"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "D Gypsy"
  ],
  [
    10,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    0,
    "D♯/E♭ Gypsy"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "E Gypsy"
  ],
  [
    0,
    0,
    12,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "F Gypsy"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "F♯/G♭ Gypsy"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "G Gypsy"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    5,
    0,
    7,
    0,
    9,
    "G♯/A♭ Gypsy"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    6,
    0,
    8,
    0,
    "A Gypsy"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    7,
    0,
    9,
    "A♯/B♭ Gypsy"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    8,
    0,
    "B Gypsy"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "C Half Diminished"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "C♯/D♭ Half Diminished"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "D Half Diminished"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "D♯/E♭ Half Diminished"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "E Half Diminished"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "F Half Diminished"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "F♯/G♭ Half Diminished"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "G Half Diminished"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "G♯/A♭ Half Diminished"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "A Half Diminished"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "A♯/B♭ Half Diminished"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "B Half Diminished"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "C Harmonic Major"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "C♯/D♭ Harmonic Major"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "D Harmonic Major"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "D♯/E♭ Harmonic Major"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "E Harmonic Major"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    0,
    8,
    9,
    "F Harmonic Major"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    0,
    9,
    "F♯/G♭ Harmonic Major"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    0,
    "G Harmonic Major"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "G♯/A♭ Harmonic Major"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "A Harmonic Major"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    0,
    "A♯/B♭ Harmonic Major"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "B Harmonic Major"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    0,
    0,
    5,
    0,
    7,
    8,
    0,
    "C Hirajoshi"
  ],
  [
    0,
    0,
    0,
    1,
    2,
    0,
    0,
    0,
    6,
    0,
    8,
    9,
    "C♯/D♭ Hirajoshi"
  ],
  [
    10,
    0,
    0,
    0,
    2,
    3,
    0,
    0,
    0,
    7,
    0,
    9,
    "D Hirajoshi"
  ],
  [
    10,
    11,
    0,
    0,
    0,
    3,
    4,
    0,
    0,
    0,
    8,
    0,
    "D♯/E♭ Hirajoshi"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    0,
    4,
    5,
    0,
    0,
    0,
    9,
    "E Hirajoshi"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    0,
    5,
    6,
    0,
    0,
    0,
    "F Hirajoshi"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    0,
    0,
    6,
    7,
    0,
    0,
    "F♯/G♭ Hirajoshi"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    3,
    0,
    0,
    0,
    7,
    8,
    0,
    "G Hirajoshi"
  ],
  [
    0,
    0,
    0,
    1,
    0,
    3,
    4,
    0,
    0,
    0,
    8,
    9,
    "G♯/A♭ Hirajoshi"
  ],
  [
    10,
    0,
    0,
    0,
    2,
    0,
    4,
    5,
    0,
    0,
    0,
    9,
    "A Hirajoshi"
  ],
  [
    10,
    11,
    0,
    0,
    0,
    3,
    0,
    5,
    6,
    0,
    0,
    0,
    "A♯/B♭ Hirajoshi"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    0,
    4,
    0,
    6,
    7,
    0,
    0,
    "B Hirajoshi"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    9,
    "C Hungarian Minor"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "C♯/D♭ Hungarian Minor"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "D Hungarian Minor"
  ],
  [
    10,
    11,
    12,
    0,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    0,
    "D♯/E♭ Hungarian Minor"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "E Hungarian Minor"
  ],
  [
    0,
    0,
    12,
    1,
    2,
    0,
    0,
    5,
    6,
    0,
    8,
    9,
    "F Hungarian Minor"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    3,
    0,
    0,
    6,
    7,
    0,
    9,
    "F♯/G♭ Hungarian Minor"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    4,
    0,
    0,
    7,
    8,
    0,
    "G Hungarian Minor"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    5,
    0,
    0,
    8,
    9,
    "G♯/A♭ Hungarian Minor"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    6,
    0,
    0,
    9,
    "A Hungarian Minor"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    7,
    0,
    0,
    "A♯/B♭ Hungarian Minor"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    8,
    0,
    "B Hungarian Minor"
  ], */
  [
    0,
    0,
    0,
    1,
    2,
    0,
    0,
    0,
    6,
    0,
    8,
    9,
    "C In"
  ],
  [
    10,
    0,
    0,
    0,
    2,
    3,
    0,
    0,
    0,
    7,
    0,
    9,
    "C♯/D♭ In"
  ],
  [
    10,
    11,
    0,
    0,
    0,
    3,
    4,
    0,
    0,
    0,
    8,
    0,
    "D In"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    0,
    4,
    5,
    0,
    0,
    0,
    9,
    "D♯/E♭ In"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    0,
    5,
    6,
    0,
    0,
    0,
    "E In"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    0,
    0,
    6,
    7,
    0,
    0,
    "F In"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    3,
    0,
    0,
    0,
    7,
    8,
    0,
    "F♯/G♭ In"
  ],
  [
    0,
    0,
    0,
    1,
    0,
    3,
    4,
    0,
    0,
    0,
    8,
    9,
    "G In"
  ],
  [
    10,
    0,
    0,
    0,
    2,
    0,
    4,
    5,
    0,
    0,
    0,
    9,
    "G♯/A♭ In"
  ],
  [
    10,
    11,
    0,
    0,
    0,
    3,
    0,
    5,
    6,
    0,
    0,
    0,
    "A In"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    0,
    4,
    0,
    6,
    7,
    0,
    0,
    "A♯/B♭ In"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    0,
    0,
    5,
    0,
    7,
    8,
    0,
    "B In"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    0,
    0,
    6,
    0,
    8,
    0,
    "C Insen"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    3,
    0,
    0,
    0,
    7,
    0,
    9,
    "C♯/D♭ Insen"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    4,
    0,
    0,
    0,
    8,
    0,
    "D Insen"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    0,
    4,
    5,
    0,
    0,
    0,
    9,
    "D♯/E♭ Insen"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    0,
    5,
    6,
    0,
    0,
    0,
    "E Insen"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    0,
    4,
    0,
    6,
    7,
    0,
    0,
    "F Insen"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    0,
    0,
    5,
    0,
    7,
    8,
    0,
    "F♯/G♭ Insen"
  ],
  [
    0,
    0,
    0,
    1,
    0,
    3,
    0,
    0,
    6,
    0,
    8,
    9,
    "G Insen"
  ],
  [
    10,
    0,
    0,
    0,
    2,
    0,
    4,
    0,
    0,
    7,
    0,
    9,
    "G♯/A♭ Insen"
  ],
  [
    10,
    11,
    0,
    0,
    0,
    3,
    0,
    5,
    0,
    0,
    8,
    0,
    "A Insen"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    0,
    4,
    0,
    6,
    0,
    0,
    9,
    "A♯/B♭ Insen"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    0,
    5,
    0,
    7,
    0,
    0,
    "B Insen"
  ],
  [
    0,
    0,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "C Istrian"
  ],
  [
    0,
    0,
    0,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "C♯/D♭ Istrian"
  ],
  [
    10,
    0,
    0,
    0,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "D Istrian"
  ],
  [
    10,
    11,
    0,
    0,
    0,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "D♯/E♭ Istrian"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    0,
    0,
    5,
    6,
    0,
    8,
    9,
    "E Istrian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    0,
    0,
    6,
    7,
    0,
    9,
    "F Istrian"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    0,
    0,
    0,
    7,
    8,
    0,
    "F♯/G♭ Istrian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    0,
    0,
    0,
    8,
    9,
    "G Istrian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    0,
    0,
    0,
    9,
    "G♯/A♭ Istrian"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    0,
    0,
    0,
    "A Istrian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    0,
    0,
    "A♯/B♭ Istrian"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    0,
    "B Istrian"
  ],
/* Duplicate Scales  [
    0,
    11,
    0,
    1,
    2,
    0,
    0,
    0,
    6,
    7,
    0,
    0,
    "C Iwato"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    3,
    0,
    0,
    0,
    7,
    8,
    0,
    "C♯/D♭ Iwato"
  ],
  [
    0,
    0,
    0,
    1,
    0,
    3,
    4,
    0,
    0,
    0,
    8,
    9,
    "D Iwato"
  ],
  [
    10,
    0,
    0,
    0,
    2,
    0,
    4,
    5,
    0,
    0,
    0,
    9,
    "D♯/E♭ Iwato"
  ],
  [
    10,
    11,
    0,
    0,
    0,
    3,
    0,
    5,
    6,
    0,
    0,
    0,
    "E Iwato"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    0,
    4,
    0,
    6,
    7,
    0,
    0,
    "F Iwato"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    0,
    0,
    5,
    0,
    7,
    8,
    0,
    "F♯/G♭ Iwato"
  ],
  [
    0,
    0,
    0,
    1,
    2,
    0,
    0,
    0,
    6,
    0,
    8,
    9,
    "G Iwato"
  ],
  [
    10,
    0,
    0,
    0,
    2,
    3,
    0,
    0,
    0,
    7,
    0,
    9,
    "G♯/A♭ Iwato"
  ],
  [
    10,
    11,
    0,
    0,
    0,
    3,
    4,
    0,
    0,
    0,
    8,
    0,
    "A Iwato"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    0,
    4,
    5,
    0,
    0,
    0,
    9,
    "A♯/B♭ Iwato"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    0,
    5,
    6,
    0,
    0,
    0,
    "B Iwato"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "C Lydian Augmented"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "C♯/D♭ Lydian Augmented"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "D Lydian Augmented"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "D♯/E♭ Lydian Augmented"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "E Lydian Augmented"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "F Lydian Augmented"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "F♯/G♭ Lydian Augmented"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "G Lydian Augmented"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "G♯/A♭ Lydian Augmented"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "A Lydian Augmented"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "A♯/B♭ Lydian Augmented"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "B Lydian Augmented"
  ], */
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "C Bebop Major"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "C♯/D♭ Bebop Major"
  ],
  [
    10,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "D Bebop Major"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "D♯/E♭ Bebop Major"
  ],
  [
    10,
    0,
    12,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "E Bebop Major"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "F Bebop Major"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "F♯/G♭ Bebop Major"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    5,
    0,
    7,
    8,
    0,
    "G Bebop Major"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    6,
    0,
    8,
    9,
    "G♯/A♭ Bebop Major"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    7,
    0,
    9,
    "A Bebop Major"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    8,
    0,
    "A♯/B♭ Bebop Major"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    9,
    "B Bebop Major"
  ],
 /* Duplicate Scales [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    7,
    0,
    9,
    "C Major Locrian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    8,
    0,
    "C♯/D♭ Major Locrian"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    9,
    "D Major Locrian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "D♯/E♭ Major Locrian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "E Major Locrian"
  ],
  [
    10,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "F Major Locrian"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "F♯/G♭ Major Locrian"
  ],
  [
    10,
    0,
    12,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "G Major Locrian"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "G♯/A♭ Major Locrian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "A Major Locrian"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    5,
    0,
    7,
    0,
    9,
    "A♯/B♭ Major Locrian"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    6,
    0,
    8,
    0,
    "B Major Locrian"
  ], */
  [
    10,
    0,
    12,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "C Neapolitan Major"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "C♯/D♭ Neapolitan Major"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "D Neapolitan Major"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    5,
    0,
    7,
    0,
    9,
    "D♯/E♭ Neapolitan Major"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    6,
    0,
    8,
    0,
    "E Neapolitan Major"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    7,
    0,
    9,
    "F Neapolitan Major"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    8,
    0,
    "F♯/G♭ Neapolitan Major"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    9,
    "G Neapolitan Major"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "G♯/A♭ Neapolitan Major"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "A Neapolitan Major"
  ],
  [
    10,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "A♯/B♭ Neapolitan Major"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "B Neapolitan Major"
  ],
  [
    0,
    0,
    12,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    9,
    "C Neapolitan Minor"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "C♯/D♭ Neapolitan Minor"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "D Neapolitan Minor"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    5,
    0,
    7,
    0,
    9,
    "D♯/E♭ Neapolitan Minor"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    6,
    0,
    8,
    0,
    "E Neapolitan Minor"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    7,
    0,
    9,
    "F Neapolitan Minor"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    8,
    0,
    "F♯/G♭ Neapolitan Minor"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    9,
    "G Neapolitan Minor"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "G♯/A♭ Neapolitan Minor"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "A Neapolitan Minor"
  ],
  [
    10,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    0,
    "A♯/B♭ Neapolitan Minor"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "B Neapolitan Minor"
  ],
  [
    0,
    0,
    12,
    1,
    2,
    0,
    0,
    5,
    6,
    7,
    0,
    9,
    "C Persian"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    3,
    0,
    0,
    6,
    7,
    8,
    0,
    "C♯/D♭ Persian"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    3,
    4,
    0,
    0,
    7,
    8,
    9,
    "D Persian"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    4,
    5,
    0,
    0,
    8,
    9,
    "D♯/E♭ Persian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    0,
    4,
    5,
    6,
    0,
    0,
    9,
    "E Persian"
  ],
  [
    10,
    11,
    12,
    0,
    2,
    0,
    0,
    5,
    6,
    7,
    0,
    0,
    "F Persian"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    3,
    0,
    0,
    6,
    7,
    8,
    0,
    "F♯/G♭ Persian"
  ],
  [
    0,
    0,
    12,
    1,
    2,
    0,
    4,
    0,
    0,
    7,
    8,
    9,
    "G Persian"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    3,
    0,
    5,
    0,
    0,
    8,
    9,
    "G♯/A♭ Persian"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    4,
    0,
    6,
    0,
    0,
    9,
    "A Persian"
  ],
  [
    10,
    11,
    12,
    0,
    0,
    3,
    4,
    5,
    0,
    7,
    0,
    0,
    "A♯/B♭ Persian"
  ],
  [
    0,
    11,
    12,
    1,
    0,
    0,
    4,
    5,
    6,
    0,
    8,
    0,
    "B Persian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    0,
    "C Pfluke"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "C♯/D♭ Pfluke"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "D Pfluke"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    0,
    "D♯/E♭ Pfluke"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "E Pfluke"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "F Pfluke"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    9,
    "F♯/G♭ Pfluke"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "G Pfluke"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "G♯/A♭ Pfluke"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "A Pfluke"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    0,
    8,
    0,
    "A♯/B♭ Pfluke"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    0,
    9,
    "B Pfluke"
  ],
 /* Duplicate Scales [
    0,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    6,
    0,
    8,
    9,
    "C Phrygian Dominant"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    7,
    0,
    9,
    "C♯/D♭ Phrygian Dominant"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    8,
    0,
    "D Phrygian Dominant"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    9,
    "D♯/E♭ Phrygian Dominant"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "E Phrygian Dominant"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    7,
    0,
    0,
    "F Phrygian Dominant"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    8,
    0,
    "F♯/G♭ Phrygian Dominant"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    9,
    "G Phrygian Dominant"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "G♯/A♭ Phrygian Dominant"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "A Phrygian Dominant"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "A♯/B♭ Phrygian Dominant"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "B Phrygian Dominant"
  ], */
  [
    10,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    0,
    "C Prometheus"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "C♯/D♭ Prometheus"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "D Prometheus"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "D♯/E♭ Prometheus"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    3,
    0,
    5,
    0,
    7,
    0,
    9,
    "E Prometheus"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    4,
    0,
    6,
    0,
    8,
    0,
    "F Prometheus"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    0,
    4,
    5,
    0,
    7,
    0,
    9,
    "F♯/G♭ Prometheus"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    0,
    5,
    6,
    0,
    8,
    0,
    "G Prometheus"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    0,
    6,
    7,
    0,
    9,
    "G♯/A♭ Prometheus"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    0,
    7,
    8,
    0,
    "A Prometheus"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    0,
    8,
    9,
    "A♯/B♭ Prometheus"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    0,
    9,
    "B Prometheus"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    0,
    7,
    8,
    0,
    "C Tritone"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    0,
    8,
    9,
    "C♯/D♭ Tritone"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    0,
    9,
    "D Tritone"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    0,
    "D♯/E♭ Tritone"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "E Tritone"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    0,
    6,
    7,
    0,
    0,
    "F Tritone"
  ],
  [
    0,
    11,
    0,
    1,
    2,
    0,
    0,
    5,
    0,
    7,
    8,
    0,
    "F♯/G♭ Tritone"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    3,
    0,
    0,
    6,
    0,
    8,
    9,
    "G Tritone"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    4,
    0,
    0,
    7,
    0,
    9,
    "G♯/A♭ Tritone"
  ],
  [
    10,
    11,
    0,
    0,
    2,
    0,
    4,
    5,
    0,
    0,
    8,
    0,
    "A Tritone"
  ],
  [
    0,
    11,
    12,
    0,
    0,
    3,
    0,
    5,
    6,
    0,
    0,
    9,
    "A♯/B♭ Tritone"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    0,
    4,
    0,
    6,
    7,
    0,
    0,
    "B Tritone"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    0,
    0,
    7,
    8,
    0,
    "C Ukrainian Dorian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    0,
    0,
    8,
    9,
    "C♯/D♭ Ukrainian Dorian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    0,
    0,
    9,
    "D Ukrainian Dorian"
  ],
  [
    10,
    11,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    0,
    0,
    "D♯/E♭ Ukrainian Dorian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    0,
    "E Ukrainian Dorian"
  ],
  [
    0,
    0,
    12,
    1,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "F Ukrainian Dorian"
  ],
  [
    10,
    0,
    0,
    1,
    2,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "F♯/G♭ Ukrainian Dorian"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    3,
    0,
    5,
    6,
    0,
    8,
    9,
    "G Ukrainian Dorian"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    4,
    0,
    6,
    7,
    0,
    9,
    "G♯/A♭ Ukrainian Dorian"
  ],
  [
    10,
    11,
    0,
    1,
    0,
    0,
    4,
    5,
    0,
    7,
    8,
    0,
    "A Ukrainian Dorian"
  ],
  [
    0,
    11,
    12,
    0,
    2,
    0,
    0,
    5,
    6,
    0,
    8,
    9,
    "A♯/B♭ Ukrainian Dorian"
  ],
  [
    10,
    0,
    12,
    1,
    0,
    3,
    0,
    0,
    6,
    7,
    0,
    9,
    "B Ukrainian Dorian"
  ]
/* Duplicate Scales  [
    0,
    11,
    0,
    1,
    0,
    0,
    4,
    0,
    6,
    0,
    8,
    0,
    "C Yo"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    0,
    0,
    5,
    0,
    7,
    0,
    9,
    "C♯/D♭ Yo"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    0,
    0,
    6,
    0,
    8,
    0,
    "D Yo"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    0,
    4,
    0,
    0,
    7,
    0,
    9,
    "D♯/E♭ Yo"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    0,
    5,
    0,
    0,
    8,
    0,
    "E Yo"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    0,
    4,
    0,
    6,
    0,
    0,
    9,
    "F Yo"
  ],
  [
    10,
    0,
    12,
    0,
    2,
    0,
    0,
    5,
    0,
    7,
    0,
    0,
    "F♯/G♭ Yo"
  ],
  [
    0,
    11,
    0,
    1,
    0,
    3,
    0,
    0,
    6,
    0,
    8,
    0,
    "G Yo"
  ],
  [
    0,
    0,
    12,
    0,
    2,
    0,
    4,
    0,
    0,
    7,
    0,
    9,
    "G♯/A♭ Yo"
  ],
  [
    10,
    0,
    0,
    1,
    0,
    3,
    0,
    5,
    0,
    0,
    8,
    0,
    "A Yo"
  ],
  [
    0,
    11,
    0,
    0,
    2,
    0,
    4,
    0,
    6,
    0,
    0,
    9,
    "A♯/B♭ Yo"
  ],
  [
    10,
    0,
    12,
    0,
    0,
    3,
    0,
    5,
    0,
    7,
    0,
    0,
    "B Yo"
  ] */
];


//The new function for the selectors
const selectors = document.querySelectorAll('select[id^="Select"]')
selectors.forEach(select => {
  select.addEventListener('change', function() { //event listener function performed each time a select option is changed.

  const root = document.getElementById("Select1").value; //from the root dropdown menu selector.
  const scale = document.getElementById("Select2").value; //from the scale dropdowm menu selector.
  const RootAndScale = root + " " + scale; //combined results from both selectors.
  console.log(RootAndScale); //just to see the results in the console.
  document.getElementById("displayresults").innerHTML = RootAndScale; //displays the results of the two dropdown selections in the HTML.

  const singleArray = [RootAndScale]; //a single array that contains the root + scale selects.

  const filteredArray = seriesOfArrays.filter(array => { //the filter function that returns the array matching the root + scale selected by searching the seriesOfArrays.
    return array.some(item => singleArray.includes(item));
  });
  
  console.log(filteredArray); //final filtered array displayed in the console.
  
  //Now to for the conditional highlight logic...for...each...note!

  //C

  const CNotePlayValue = 1;
  const CNoteValue = CNoteResult()

  const CNoteCells = document.querySelectorAll('.CNote');
  CNoteCells.forEach(CNoteCell => {
    if (CNoteValue === CNotePlayValue) {

      CNoteCell.classList.add("Highlight")
    } else {
      CNoteCell.classList.remove("Highlight")
    }
  
    })

function CNoteResult() {

  return filteredArray
  .map(function(name, index) {
    if (name[3] === CNotePlayValue) {
    return name[3]
    } else {
    return 0
    }
  })
  .filter(function(element) {
    return element !== null;
    })[0];
};

//CSharp

  const CSharpNotePlayValue = 2;
  const CSharpNoteValue = CSharpNoteResult()

  const CSharpNoteCells = document.querySelectorAll('.CSharpNote');
  CSharpNoteCells.forEach(CSharpNoteCell => {
    if (CSharpNoteValue === CSharpNotePlayValue) {

      CSharpNoteCell.classList.add("Highlight")
    } else {
      CSharpNoteCell.classList.remove("Highlight")
    }
  
    })

function CSharpNoteResult() {

  return filteredArray
  .map(function(name, index) {
    if (name[4] === CSharpNotePlayValue) {
    return name[4]
    } else {
    return 0
    }
  })
  .filter(function(element) {
    return element !== null;
    })[0];
};

    //D

    const DNotePlayValue = 3;
    const DNoteValue = DNoteResult()
  
    const DNoteCells = document.querySelectorAll('.DNote');
    DNoteCells.forEach(DNoteCell => {
      if (DNoteValue === DNotePlayValue) {
  
        DNoteCell.classList.add("Highlight")
      } else {
        DNoteCell.classList.remove("Highlight")
      }
    
      })
  
  function DNoteResult() {
  
    return filteredArray
    .map(function(name, index) {
      if (name[5] === DNotePlayValue) {
      return name[5]
      } else {
      return 0
      }
    })
    .filter(function(element) {
      return element !== null;
      })[0];
  };
  
//DSharp

const DSharpNotePlayValue = 4;
const DSharpNoteValue = DSharpNoteResult()

const DSharpNoteCells = document.querySelectorAll('.DSharpNote');
DSharpNoteCells.forEach(DSharpNoteCell => {
  if (DSharpNoteValue === DSharpNotePlayValue) {

    DSharpNoteCell.classList.add("Highlight")
  } else {
    DSharpNoteCell.classList.remove("Highlight")
  }

  })

function DSharpNoteResult() {

return filteredArray
.map(function(name, index) {
  if (name[6] === DSharpNotePlayValue) {
  return name[6]
  } else {
  return 0
  }
})
.filter(function(element) {
  return element !== null;
  })[0];
};

    //E

    const ENotePlayValue = 5;
    const ENoteValue = ENoteResult()
  
    const ENoteCells = document.querySelectorAll('.ENote');
    ENoteCells.forEach(ENoteCell => {
      if (ENoteValue === ENotePlayValue) {
  
        ENoteCell.classList.add("Highlight")
      } else {
        ENoteCell.classList.remove("Highlight")
      }
    
      })
  
  function ENoteResult() {
  
    return filteredArray
    .map(function(name, index) {
      if (name[7] === ENotePlayValue) {
      return name[7]
      } else {
      return 0
      }
    })
    .filter(function(element) {
      return element !== null;
      })[0];
  };

      //F

      const FNotePlayValue = 6;
      const FNoteValue = FNoteResult()
    
      const FNoteCells = document.querySelectorAll('.FNote');
      FNoteCells.forEach(FNoteCell => {
        if (FNoteValue === FNotePlayValue) {
    
          FNoteCell.classList.add("Highlight")
        } else {
          FNoteCell.classList.remove("Highlight")
        }
      
        })
    
    function FNoteResult() {
    
      return filteredArray
      .map(function(name, index) {
        if (name[8] === FNotePlayValue) {
        return name[8]
        } else {
        return 0
        }
      })
      .filter(function(element) {
        return element !== null;
        })[0];
    };

    //FSharp

const FSharpNotePlayValue = 7;
const FSharpNoteValue = FSharpNoteResult()

const FSharpNoteCells = document.querySelectorAll('.FSharpNote');
FSharpNoteCells.forEach(FSharpNoteCell => {
  if (FSharpNoteValue === FSharpNotePlayValue) {

    FSharpNoteCell.classList.add("Highlight")
  } else {
    FSharpNoteCell.classList.remove("Highlight")
  }

  })

function FSharpNoteResult() {

return filteredArray
.map(function(name, index) {
  if (name[9] === FSharpNotePlayValue) {
  return name[9]
  } else {
  return 0
  }
})
.filter(function(element) {
  return element !== null;
  })[0];
};

    //G

    const GNotePlayValue = 8;
    const GNoteValue = GNoteResult()
  
    const GNoteCells = document.querySelectorAll('.GNote');
    GNoteCells.forEach(GNoteCell => {
      if (GNoteValue === GNotePlayValue) {
  
        GNoteCell.classList.add("Highlight")
      } else {
        GNoteCell.classList.remove("Highlight")
      }
    
      })
  
  function GNoteResult() {
  
    return filteredArray
    .map(function(name, index) {
      if (name[10] === GNotePlayValue) {
      return name[10]
      } else {
      return 0
      }
    })
    .filter(function(element) {
      return element !== null;
      })[0];
  };

      //GSharp

const GSharpNotePlayValue = 9;
const GSharpNoteValue = GSharpNoteResult()

const GSharpNoteCells = document.querySelectorAll('.GSharpNote');
GSharpNoteCells.forEach(GSharpNoteCell => {
  if (GSharpNoteValue === GSharpNotePlayValue) {

    GSharpNoteCell.classList.add("Highlight")
  } else {
    GSharpNoteCell.classList.remove("Highlight")
  }

  })

function GSharpNoteResult() {

return filteredArray
.map(function(name, index) {
  if (name[11] === GSharpNotePlayValue) {
  return name[11]
  } else {
  return 0
  }
})
.filter(function(element) {
  return element !== null;
  })[0];
};

        //A

        const ANotePlayValue = 10;
        const ANoteValue = ANoteResult()
      
        const ANoteCells = document.querySelectorAll('.ANote');
        ANoteCells.forEach(ANoteCell => {
          if (ANoteValue === ANotePlayValue) {
      
            ANoteCell.classList.add("Highlight")
          } else {
            ANoteCell.classList.remove("Highlight")
          }
        
          })
      
      function ANoteResult() {
      
        return filteredArray
        .map(function(name, index) {
          if (name[0] === ANotePlayValue) {
          return name[0]
          } else {
          return 0
          }
        })
        .filter(function(element) {
          return element !== null;
          })[0];
      };
  
      //ASharp
  
  const ASharpNotePlayValue = 11;
  const ASharpNoteValue = ASharpNoteResult()
  
  const ASharpNoteCells = document.querySelectorAll('.ASharpNote');
  ASharpNoteCells.forEach(ASharpNoteCell => {
    if (ASharpNoteValue === ASharpNotePlayValue) {
  
      ASharpNoteCell.classList.add("Highlight")
    } else {
      ASharpNoteCell.classList.remove("Highlight")
    }
  
    })
  
  function ASharpNoteResult() {
  
  return filteredArray
  .map(function(name, index) {
    if (name[1] === ASharpNotePlayValue) {
    return name[1]
    } else {
    return 0
    }
  })
  .filter(function(element) {
    return element !== null;
    })[0];
  };
  
      //B
  
      const BNotePlayValue = 12;
      const BNoteValue = BNoteResult()
    
      const BNoteCells = document.querySelectorAll('.BNote');
      BNoteCells.forEach(BNoteCell => {
        if (BNoteValue === BNotePlayValue) {
    
          BNoteCell.classList.add("Highlight")
        } else {
          BNoteCell.classList.remove("Highlight")
        }
      
        })
    
    function BNoteResult() {
    
      return filteredArray
      .map(function(name, index) {
        if (name[2] === BNotePlayValue) {
        return name[2]
        } else {
        return 0
        }
      })
      .filter(function(element) {
        return element !== null;
        })[0];
    };

  //end of massive function, lol!
  })});
