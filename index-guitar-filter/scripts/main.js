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

var pianoBlock = document.getElementById("pianoBlock");

pianoBlock.style.display = "none";

function togglePiano(){
  if(pianoBlock.style.display == "none")
  {
    pianoBlock.style.display = "block";
  }
  else
  {
    pianoBlock.style.display = "none";
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
 *
 N *eed to build out class based substitutions. Currently, all these functions do is shift the innerHTML text left and
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


/*
function shiftHighELeft(){
  var row = document.getElementById("highEString");

  // Get the last cell value
  const lastCellValue = row.cells[13].innerHTML;
  const lastCellClass = row.cells[13].className;


  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].className = row.cells[i - 1].className;

  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].className = lastCellClass;

  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftHighBLeft(){
  var row = document.getElementById("highBString");

  // Get the last cell value
  const lastCellValue = row.cells[13].innerHTML;
  const lastCellClass = row.cells[13].className;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].className = row.cells[i - 1].className;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].className = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text";

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftHighGLeft(){
  var row = document.getElementById("highGString");

  // Get the last cell value
  const lastCellValue = row.cells[13].innerHTML;
  const lastCellClass = row.cells[13].className;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].className = row.cells[i - 1].className;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].className = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftALeft(){
  var row = document.getElementById("AString");

  // Get the last cell value
  const lastCellValue = row.cells[13].innerHTML;
  const lastCellClass = row.cells[13].className;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].className = row.cells[i - 1].className;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].className = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftDLeft(){
  var row = document.getElementById("DString");

  // Get the last cell value
  const lastCellValue = row.cells[13].innerHTML;
  const lastCellClass = row.cells[13].className;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].className = row.cells[i - 1].className;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].className = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftLowELeft(){
  var row = document.getElementById("lowEString");

  // Get the last cell value
  const lastCellValue = row.cells[13].innerHTML;
  const lastCellClass = row.cells[13].className;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].className = row.cells[i - 1].className;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].className = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftLowBLeft(){
  var row = document.getElementById("lowBString");

  // Get the last cell value
  const lastCellValue = row.cells[13].innerHTML;
  const lastCellClass = row.cells[13].className;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].className = row.cells[i - 1].className;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].className = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftLowGLeft(){
  var row = document.getElementById("lowGString");

  // Get the last cell value
  const lastCellValue = row.cells[13].innerHTML;
  const lastCellClass = row.cells[13].className;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].className = row.cells[i - 1].className;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].className = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};*/


function shiftHighELeft(){
  let row = document.getElementById("highEString");

  // Get the last cell value
  let lastCellValue = row.cells[13].innerHTML;
  let lastCellClass = row.cells[14].classList;


  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].classList = row.cells[i - 1].classList;

  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].classList = lastCellClass;

  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftHighBLeft(){
  const row = document.getElementById("highBString");

  // Get the last cell value
  let lastCellValue = row.cells[13].innerHTML;
  let lastCellClass = row.cells[14].classList;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].classList = row.cells[i - 1].classList;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].classList = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftHighGLeft(){
  const row = document.getElementById("highGString");

  // Get the last cell value
  let lastCellValue = row.cells[13].innerHTML;
  let lastCellClass = row.cells[14].classList;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].classList = row.cells[i - 1].classList;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].classList = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftALeft(){
  const row = document.getElementById("AString");

  // Get the last cell value
  let lastCellValue = row.cells[13].innerHTML;
  let lastCellClass = row.cells[14].classList;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].classList = row.cells[i - 1].classList;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].classList = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftDLeft(){
  const row = document.getElementById("DString");

  // Get the last cell value
  let lastCellValue = row.cells[13].innerHTML;
  let lastCellClass = row.cells[14].classList;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].classList = row.cells[i - 1].classList;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].classList = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftLowELeft(){
  const row = document.getElementById("lowEString");

  // Get the last cell value
  let lastCellValue = row.cells[13].innerHTML;
  let lastCellClass = row.cells[14].classList;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].classList = row.cells[i - 1].classList;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].classList = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftLowBLeft(){
  const row = document.getElementById("lowBString");

  // Get the last cell value
  let lastCellValue = row.cells[13].innerHTML;
  let lastCellClass = row.cells[14].classList;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].classList = row.cells[i - 1].classList;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].classList = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};

function shiftLowGLeft(){
  const row = document.getElementById("lowGString");

  // Get the last cell value
  let lastCellValue = row.cells[13].innerHTML;
  let lastCellClass = row.cells[14].classList;

  // Shift the cells to the left
  for (let i = row.cells.length - 1; i > 1; i--) {
    row.cells[i].innerHTML = row.cells[i - 1].innerHTML;
    row.cells[i].classList = row.cells[i - 1].classList;
  };

  row.cells[15].classList.add("col1");
  // row.cells[23].classList.remove("col1");
  // row.cells[23].classList.add("col2");
  // row.cells[24].classList.remove("col2");
  // row.cells[24].classList.add("col3");
  // row.cells[25].classList.remove("col3");
  // row.cells[25].classList.add("col4");
  row.cells[27].classList.add("col5");
  row.cells[27].classList.remove("col1"); //replace col1 with col4 if uncommenting row.cells[23]-[25] above

  // Replace the leftmost cell with the last cell value
  row.cells[2].innerHTML = lastCellValue;
  row.cells[2].classList = lastCellClass;
  row.cells[2].classList.remove("col5");
  row.cells[2].classList.add("rotate-text");

  // Remove .rotate-text from the second cell
  row.cells[3].classList.remove("rotate-text");
};



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


/*
    let showE = 0;
    let showF = 0;
    let showFsharp = 0;
    let showG = 0;
    let showGsharp = 0;
    let showA = 0;
    let showAsharp = 0;
    let showB = 0;
    let showC = 0;
    let showCsharp = 0;
    let showD = 0;
    let showDsharp = 0;


const resultList = document.getElementById('resultList');


let Etoggles = document.querySelectorAll(".ENote");

Etoggles.forEach(i => {
  i.addEventListener('click', function() {
    showE = showE === 0 ? 5 : 0;
    filterAndDisplay();
    onEoff();
    console.log(this.className);
  });
});

function onEoff() {
  for (var i = 0; i < Etoggles.length; i++) {
    Etoggles[i].classList.toggle("on");
    Etoggles[i].classList.toggle("off");
  };
};

let Ftoggles = document.querySelectorAll(".FNote");

Ftoggles.forEach(i => {
  i.addEventListener('click', () => {
    showF = showF === 0 ? 6 : 0;
    filterAndDisplay();
    onFoff();
  });
});

function onFoff() {
  for (var i = 0; i < Ftoggles.length; i++) {
    Ftoggles[i].classList.toggle("on");
    Ftoggles[i].classList.toggle("off");
  };
};

let FSharptoggles = document.querySelectorAll(".FSharpNote");

FSharptoggles.forEach(i => {
  i.addEventListener('click', () => {
    showFsharp = showFsharp === 0 ? 7 : 0;
    filterAndDisplay();
    onFSharpoff();
  });
});

function onFSharpoff() {
  for (var i = 0; i < FSharptoggles.length; i++) {
    FSharptoggles[i].classList.toggle("on");
    FSharptoggles[i].classList.toggle("off");
  };
};

let Gtoggles = document.querySelectorAll(".GNote");

Gtoggles.forEach(i => {
  i.addEventListener('click', () => {
    showG = showG === 0 ? 8 : 0;
    filterAndDisplay();
    onGoff();
  });
});

function onGoff() {
  for (var i = 0; i < Gtoggles.length; i++) {
    Gtoggles[i].classList.toggle("on");
    Gtoggles[i].classList.toggle("off");
  };
};

let GSharptoggles = document.querySelectorAll(".GSharpNote");

GSharptoggles.forEach(i => {
  i.addEventListener('click', () => {
    showGsharp = showGsharp === 0 ? 9 : 0;
    filterAndDisplay();
    onGSharpoff();
  });
});

function onGSharpoff() {
  for (var i = 0; i < GSharptoggles.length; i++) {
    GSharptoggles[i].classList.toggle("on");
    GSharptoggles[i].classList.toggle("off");
  };
};

let Atoggles = document.querySelectorAll(".ANote");

Atoggles.forEach(i => {
  i.addEventListener('click', () => {
    showA = showA === 0 ? 10 : 0;
    filterAndDisplay();
    onAoff();
  });
});

function onAoff() {
  for (var i = 0; i < Atoggles.length; i++) {
    Atoggles[i].classList.toggle("on");
    Atoggles[i].classList.toggle("off");
  };
};

let ASharptoggles = document.querySelectorAll(".ASharpNote");

ASharptoggles.forEach(i => {
  i.addEventListener('click', () => {
    showAsharp = showAsharp === 0 ? 11 : 0;
    filterAndDisplay();
    onASharpoff();
  });
});

function onASharpoff() {
  for (var i = 0; i < ASharptoggles.length; i++) {
    ASharptoggles[i].classList.toggle("on");
    ASharptoggles[i].classList.toggle("off");
  };
};

let Btoggles = document.querySelectorAll(".BNote");

Btoggles.forEach(i => {
  i.addEventListener('click', () => {
    showB = showB === 0 ? 12 : 0;
    filterAndDisplay();
    onBoff();
  });
});

function onBoff() {
  for (var i = 0; i < Btoggles.length; i++) {
    Btoggles[i].classList.toggle("on");
    Btoggles[i].classList.toggle("off");
  };
};

let Ctoggles = document.querySelectorAll(".CNote");

Ctoggles.forEach(i => {
  i.addEventListener('click', () => {
    showC = showC === 0 ? 1 : 0;
    filterAndDisplay();
    onCoff();
  });
});

function onCoff() {
  for (var i = 0; i < Ctoggles.length; i++) {
    Ctoggles[i].classList.toggle("on");
    Ctoggles[i].classList.toggle("off");
  };
};

let CSharptoggles = document.querySelectorAll(".CSharpNote");

CSharptoggles.forEach(i => {
  i.addEventListener('click', () => {
    showCsharp = showCsharp === 0 ? 2 : 0;
    filterAndDisplay();
    onCSharpoff();
  });
});

function onCSharpoff() {
  for (var i = 0; i < CSharptoggles.length; i++) {
    CSharptoggles[i].classList.toggle("on");
    CSharptoggles[i].classList.toggle("off");
  };
};

let Dtoggles = document.querySelectorAll(".DNote");

Dtoggles.forEach(i => {
  i.addEventListener('click', () => {
    showD = showD === 0 ? 3 : 0;
    filterAndDisplay();
    onDoff();
  });
});

function onDoff() {
  for (var i = 0; i < Dtoggles.length; i++) {
    Dtoggles[i].classList.toggle("on");
    Dtoggles[i].classList.toggle("off");
  };
};

let DSharptoggles = document.querySelectorAll(".DSharpNote");

DSharptoggles.forEach(i => {
  i.addEventListener('click', () => {
    showDsharp = showDsharp === 0 ? 4 : 0;
    filterAndDisplay();
    onDSharpoff();
  });
});

function onDSharpoff() {
  for (var i = 0; i < DSharptoggles.length; i++) {
    DSharptoggles[i].classList.toggle("on");
    DSharptoggles[i].classList.toggle("off");
  };
};


function filterAndDisplay() {

const singleArray = [showA];

const filteredArrays = 
seriesOfArrays.filter(array => {
  return array.some(item => singleArray.includes(item));
});

const singleArray1 = [showAsharp];

const filteredArrays1 = filteredArrays.filter(array => {
  return array.some(item => singleArray1.includes(item));
});

const singleArray2 = [showB];

const filteredArrays2 = filteredArrays1.filter(array => {
  return array.some(item => singleArray2.includes(item));
});

const singleArray3 = [showC];

const filteredArrays3 = filteredArrays2.filter(array => {
  return array.some(item => singleArray3.includes(item));
});

const singleArray4 = [showCsharp];

const filteredArrays4 = filteredArrays3.filter(array => {
  return array.some(item => singleArray4.includes(item));
});

const singleArray5 = [showD];

const filteredArrays5 = filteredArrays4.filter(array => {
  return array.some(item => singleArray5.includes(item));
});

const singleArray6 = [showDsharp];

const filteredArrays6 = filteredArrays5.filter(array => {
  return array.some(item => singleArray6.includes(item));
});

const singleArray7 = [showE];

const filteredArrays7 = filteredArrays6.filter(array => {
  return array.some(item => singleArray7.includes(item));
});

const singleArray8 = [showF];

const filteredArrays8 = filteredArrays7.filter(array => {
  return array.some(item => singleArray8.includes(item));
});

const singleArray9 = [showFsharp];

const filteredArrays9 = filteredArrays8.filter(array => {
  return array.some(item => singleArray9.includes(item));
});

const singleArray10 = [showG];

const filteredArrays10 = filteredArrays9.filter(array => {
  return array.some(item => singleArray10.includes(item));
});

const singleArray11 = [showGsharp];

const filteredArrays11 = filteredArrays10.filter(array => {
  return array.some(item => singleArray11.includes(item));
});

console.log(filteredArrays11); //final filtered array


//old results generator
/* resultList.innerHTML = '';

const numItems = 1; // Number of items to extract from each array

const lastItems = filteredArrays11.map(array => array.slice(-numItems)); // Extract last items from each array

const lastItemsList = document.getElementById("resultList");

lastItems.forEach(items => {
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    lastItemsList.appendChild(listItem);
  });
}); */

//new results filter: example array analysis code

/*

resultList.innerHTML = '';

// Perform analysis on arrays
const buttonsPressed = showC/1 + showCsharp/2 + showD/3 + showDsharp/4 + 
showE/5 + showF/6 + showFsharp/7 + showG/8 + showGsharp/9 + showA/10 + showAsharp/11 + showB/12;

const results = filteredArrays11.map((arr) => ({
  lastItem: arr[arr.length - 1],
  itemCount: arr.filter((item) => item > 0).length,
  itemCountTotal: buttonsPressed,
}));



// Sort the results based on itemCount in descending order
results.sort((a, b) => b.itemCountTotal/b.itemCount - a.itemCountTotal/a.itemCount);

// Generate HTML list
const resultsList = document.getElementById('resultList');
results.forEach((result) => {
  const listItem = document.createElement('li');
  listItem.textContent = `${result.lastItem} | Match: ${result.itemCountTotal}/${result.itemCount}`;
  resultsList.appendChild(listItem);
}); 

};

        */

let showE = 0;
let showF = 0;
let showFsharp = 0;
let showG = 0;
let showGsharp = 0;
let showA = 0;
let showAsharp = 0;
let showB = 0;
let showC = 0;
let showCsharp = 0;
let showD = 0;
let showDsharp = 0;

//INFO: The new function for click action on each clickable field.
const toggleButtons = document.querySelectorAll("td.play"); //TODO: need to add this to the class lists for each cell.

toggleButtons.forEach(toggle => {
  toggle.addEventListener('click', function() {
    //changeDisplay();

    toggleClass = this.classList;
    console.log(toggleClass);


    const resultList = document.getElementById('resultList');


    const classTestOn = toggleClass.contains("on");
    console.log(classTestOn);

    const classTestOff = toggleClass.contains("off");
    console.log(classTestOff);

/*
    const togglesA2 = document.querySelectorAll(".A2Note");

    const classTestA2 = toggleClass.contains("A2Note");
    console.log(classTestA2);

    function testClassA2() {

      if (classTestA2 && classTestOff) {
        showA2 = 10;
        onA2off();
        filterAndDisplay();
        console.log('Class Is A2 off');
      } else if (classTestA2 && classTestOn) {
        showA2 = 0;
        onA2off();
        filterAndDisplay();
        console.log('Class Is A2 on');
      } else {
        console.log('Class Not A2');
      }
      console.log(showA2);
      return showA2;

    };

    console.log(testClassA2());

    function onA2off() {
      for (var i = 0; i < togglesA2.length; i++) {
        togglesA2[i].classList.toggle("on");
        togglesA2[i].classList.toggle("off");
      };
    };
*/


    const togglesA = document.querySelectorAll(".ANote");

    const classTestA = toggleClass.contains("ANote");
    console.log(classTestA);

    function testClassA() {

      if (classTestA && classTestOff) {
        showA = 10;
        onAoff();
        filterAndDisplay();
        console.log('Class Is A off');
      } else if (classTestA && classTestOn) {
        showA = 0;
        onAoff();
        filterAndDisplay();
        console.log('Class Is A on');
      } else {
        console.log('Class Not A');
      }
      console.log(showA);
      return showA;

    };

    console.log(testClassA());

    function onAoff() {
      for (var i = 0; i < togglesA.length; i++) {
        togglesA[i].classList.toggle("on");
        togglesA[i].classList.toggle("off");
      };
    };


    const togglesAsharp = document.querySelectorAll(".AsharpNote");

    const classTestAsharp = toggleClass.contains("AsharpNote");
    console.log(classTestAsharp);

    function testClassAsharp() {

      if (classTestAsharp && classTestOff) {
        showAsharp = 11;
        onAsharpoff();
        filterAndDisplay();
        console.log('Class Is Asharp off')
      } else if (classTestAsharp && classTestOn) {
        showAsharp = 0;
        onAsharpoff();
        filterAndDisplay();
        console.log('Class Is Asharp on');
      } else {
        console.log('Class Not Asharp');
      }
      console.log(showAsharp);
      return showAsharp;

    };

    console.log(testClassAsharp());

    function onAsharpoff() {
      for (var i = 0; i < togglesAsharp.length; i++) {
        togglesAsharp[i].classList.toggle("on");
        togglesAsharp[i].classList.toggle("off");
      };
    };


    const togglesB = document.querySelectorAll(".BNote");

    const classTestB = toggleClass.contains("BNote");
    console.log(classTestB);

    function testClassB() {

      if (classTestB && classTestOff) {
        showB = 12;
        onBoff();
        filterAndDisplay();
        console.log('Class Is B off')
      } else if (classTestB && classTestOn) {
        showB = 0;
        onBoff();
        filterAndDisplay();
        console.log('Class Is B on');
      } else {
        console.log('Class Not B');
      }
      console.log(showB);
      return showB;

    };

    console.log(testClassB());

    function onBoff() {
      for (var i = 0; i < togglesB.length; i++) {
        togglesB[i].classList.toggle("on");
        togglesB[i].classList.toggle("off");
      };
    };

    const togglesC = document.querySelectorAll(".CNote");

    const classTestC = toggleClass.contains("CNote");
    console.log(classTestC);

    function testClassC() {

      if (classTestC && classTestOff) {
        showC = 1;
        onCoff();
        filterAndDisplay();
        console.log('Class Is C off')
      } else if (classTestC && classTestOn) {
        showC = 0;
        onCoff();
        filterAndDisplay();
        console.log('Class Is C on');
      } else {
        console.log('Class Not C');
      }
      console.log(showC);
      return showC;

    };

    console.log(testClassC());

    function onCoff() {
      for (var i = 0; i < togglesC.length; i++) {
        togglesC[i].classList.toggle("on");
        togglesC[i].classList.toggle("off");
      };
    };


    const togglesCsharp = document.querySelectorAll(".CsharpNote");

    const classTestCsharp = toggleClass.contains("CsharpNote");
    console.log(classTestCsharp);

    function testClassCsharp() {

      if (classTestCsharp && classTestOff) {
        showCsharp = 2;
        onCsharpoff();
        filterAndDisplay();
        console.log('Class Is Csharp off')
      } else if (classTestCsharp && classTestOn) {
        showCsharp = 0;
        onCsharpoff();
        filterAndDisplay();
        console.log('Class Is Csharp on');
      } else {
        console.log('Class Not Csharp');
      }
      console.log(showCsharp);
      return showCsharp;

    };

    console.log(testClassCsharp());

    function onCsharpoff() {
      for (var i = 0; i < togglesCsharp.length; i++) {
        togglesCsharp[i].classList.toggle("on");
        togglesCsharp[i].classList.toggle("off");
      };
    };


    const togglesD = document.querySelectorAll(".DNote");

    const classTestD = toggleClass.contains("DNote");
    console.log(classTestD);

    function testClassD() {

      if (classTestD && classTestOff) {
        showD = 3;
        onDoff();
        filterAndDisplay();
        console.log('Class Is D off')
      } else if (classTestD && classTestOn) {
        showD = 0;
        onDoff();
        filterAndDisplay();
        console.log('Class Is D on');
      } else {
        console.log('Class Not D');
      }
      console.log(showD);
      return showD;

    };

    console.log(testClassD());

    function onDoff() {
      for (var i = 0; i < togglesD.length; i++) {
        togglesD[i].classList.toggle("on");
        togglesD[i].classList.toggle("off");
      };
    };


    const togglesDsharp = document.querySelectorAll(".DsharpNote");

    const classTestDsharp = toggleClass.contains("DsharpNote");
    console.log(classTestDsharp);

    function testClassDsharp() {

      if (classTestDsharp && classTestOff) {
        showDsharp = 4;
        onDsharpoff();
        filterAndDisplay();
        console.log('Class Is Dsharp off')
      } else if (classTestDsharp && classTestOn) {
        showDsharp = 0;
        onDsharpoff();
        filterAndDisplay();
        console.log('Class Is Dsharp on');
      } else {
        console.log('Class Not Dsharp');
      }
      console.log(showDsharp);
      return showDsharp;

    };

    console.log(testClassDsharp());

    function onDsharpoff() {
      for (var i = 0; i < togglesDsharp.length; i++) {
        togglesDsharp[i].classList.toggle("on");
        togglesDsharp[i].classList.toggle("off");
      };
    };


    const togglesE = document.querySelectorAll(".ENote");

    const classTestE = toggleClass.contains("ENote");
    console.log(classTestE);

    function testClassE() {

      if (classTestE && classTestOff) {
        showE = 5;
        onEoff();
        filterAndDisplay();
        console.log('Class Is E off')
      } else if (classTestE && classTestOn) {
        showE = 0;
        onEoff();
        filterAndDisplay();
        console.log('Class Is E on');
      } else {
        console.log('Class Not E');
      }
      console.log(showE);
      return showE;

    };

    console.log(testClassE());

    function onEoff() {
      for (var i = 0; i < togglesE.length; i++) {
        togglesE[i].classList.toggle("on");
        togglesE[i].classList.toggle("off");
      };
    };


    const togglesF = document.querySelectorAll(".FNote");

    const classTestF = toggleClass.contains("FNote");
    console.log(classTestF);

    function testClassF() {

      if (classTestF && classTestOff) {
        showF = 6;
        onFoff();
        filterAndDisplay();
        console.log('Class Is F off')
      } else if (classTestF && classTestOn) {
        showF = 0;
        onFoff();
        filterAndDisplay();
        console.log('Class Is F on');
      } else {
        console.log('Class Not F');
      }
      console.log(showF);
      return showF;

    };

    console.log(testClassF());

    function onFoff() {
      for (var i = 0; i < togglesF.length; i++) {
        togglesF[i].classList.toggle("on");
        togglesF[i].classList.toggle("off");
      };
    };


    const togglesFsharp = document.querySelectorAll(".FsharpNote");

    const classTestFsharp = toggleClass.contains("FsharpNote");
    console.log(classTestFsharp);

    function testClassFsharp() {

      if (classTestFsharp && classTestOff) {
        showFsharp = 7;
        onFsharpoff();
        filterAndDisplay();
        console.log('Class Is Fsharp off')
      } else if (classTestFsharp && classTestOn) {
        showFsharp = 0;
        onFsharpoff();
        filterAndDisplay();
        console.log('Class Is Fsharp on');
      } else {
        console.log('Class Not Fsharp');
      }
      console.log(showFsharp);
      return showFsharp;

    };

    console.log(testClassFsharp());

    function onFsharpoff() {
      for (var i = 0; i < togglesFsharp.length; i++) {
        togglesFsharp[i].classList.toggle("on");
        togglesFsharp[i].classList.toggle("off");
      };
    };


    const togglesG = document.querySelectorAll(".GNote");

    const classTestG = toggleClass.contains("GNote");
    console.log(classTestG);

    function testClassG() {

      if (classTestG && classTestOff) {
        showG = 8;
        onGoff();
        filterAndDisplay();
        console.log('Class Is G off')
      } else if (classTestG && classTestOn) {
        showG = 0;
        onGoff();
        filterAndDisplay();
        console.log('Class Is G on');
      } else {
        console.log('Class Not G');
      }
      console.log(showG);
      return showG;

    };

    console.log(testClassG());

    function onGoff() {
      for (var i = 0; i < togglesG.length; i++) {
        togglesG[i].classList.toggle("on");
        togglesG[i].classList.toggle("off");
      };
    };

    const togglesGsharp = document.querySelectorAll(".GsharpNote");

    const classTestGsharp = toggleClass.contains("GsharpNote");
    console.log(classTestGsharp);

    function testClassGsharp() {

      if (classTestGsharp && classTestOff) {
        showGsharp = 9;
        onGsharpoff();
        filterAndDisplay();
        console.log('Class Is Gsharp off')
      } else if (classTestGsharp && classTestOn) {
        showGsharp = 0;
        onGsharpoff();
        filterAndDisplay();
        console.log('Class Is Gsharp on');
      } else {
        console.log('Class Not Gsharp');
      }
      console.log(showGsharp);
      return showGsharp;

    };

    console.log(testClassGsharp());

    function onGsharpoff() {
      for (var i = 0; i < togglesGsharp.length; i++) {
        togglesGsharp[i].classList.toggle("on");
        togglesGsharp[i].classList.toggle("off");
      };
    };




/*
    const togglesB2 = document.querySelectorAll(".B2Note");

    const classTestB2 = toggleClass.contains("B2Note");
    console.log(classTestB2);

    function testClassB2() {

      if (classTestB2 && classTestOff) {
        showB2 = 12;
        onB2off();
        filterAndDisplay();
        console.log('Class Is B2 off')
      } else if (classTestB2 && classTestOn) {
        showB2 = 0;
        onB2off();
        filterAndDisplay();
        console.log('Class Is B2 on');
      } else {
        console.log('Class Not B2');
      }
      console.log(showB2);
      return showB2;

    };

    console.log(testClassB2());

    function onB2off() {
      for (var i = 0; i < togglesB2.length; i++) {
        togglesB2[i].classList.toggle("on");
        togglesB2[i].classList.toggle("off");
      };
    };
*/

    function filterAndDisplay() {

      const singleArray = [showA];

      const filteredArrays =
      seriesOfArrays.filter(array => {
        return array.some(item => singleArray.includes(item));
      });

      const singleArray1 = [showAsharp];

      const filteredArrays1 = filteredArrays.filter(array => {
        return array.some(item => singleArray1.includes(item));
      });

      const singleArray2 = [showB];

      const filteredArrays2 = filteredArrays1.filter(array => {
        return array.some(item => singleArray2.includes(item));
      });

      const singleArray3 = [showC];

      const filteredArrays3 = filteredArrays2.filter(array => {
        return array.some(item => singleArray3.includes(item));
      });

      const singleArray4 = [showCsharp];

      const filteredArrays4 = filteredArrays3.filter(array => {
        return array.some(item => singleArray4.includes(item));
      });

      const singleArray5 = [showD];

      const filteredArrays5 = filteredArrays4.filter(array => {
        return array.some(item => singleArray5.includes(item));
      });

      const singleArray6 = [showDsharp];

      const filteredArrays6 = filteredArrays5.filter(array => {
        return array.some(item => singleArray6.includes(item));
      });

      const singleArray7 = [showE];

      const filteredArrays7 = filteredArrays6.filter(array => {
        return array.some(item => singleArray7.includes(item));
      });

      const singleArray8 = [showF];

      const filteredArrays8 = filteredArrays7.filter(array => {
        return array.some(item => singleArray8.includes(item));
      });

      const singleArray9 = [showFsharp];

      const filteredArrays9 = filteredArrays8.filter(array => {
        return array.some(item => singleArray9.includes(item));
      });

      const singleArray10 = [showG];

      const filteredArrays10 = filteredArrays9.filter(array => {
        return array.some(item => singleArray10.includes(item));
      });

      const singleArray11 = [showGsharp];

      const filteredArrays11 = filteredArrays10.filter(array => {
        return array.some(item => singleArray11.includes(item));
      });

      console.log(filteredArrays11); //final filtered array

      //new results filter: example array analysis code

      resultList.innerHTML = '';

      // Perform analysis on arrays
      const buttonsPressed = showC/1 + showCsharp/2 + showD/3 + showDsharp/4 +
      showE/5 + showF/6 + showFsharp/7 + showG/8 + showGsharp/9 + showA/10 + showAsharp/11 + showB/12;

      const results = filteredArrays11.map((arr) => ({
        lastItem: arr[arr.length - 1],
        itemCount: arr.filter((item) => item > 0).length,
                                                     itemCountTotal: buttonsPressed,
      }));



      // Sort the results based on itemCount in descending order
      results.sort((a, b) => b.itemCountTotal/b.itemCount - a.itemCountTotal/a.itemCount);

      // Generate HTML list
      const resultsList = document.getElementById('resultList');
      results.forEach((result) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${result.lastItem} | Match: ${result.itemCountTotal}/${result.itemCount}`;
        resultsList.appendChild(listItem);
      });

    };


});
});  //INFO: event listener function performed each time a select option is changed.

/*function changeDisplay() {

};*/

