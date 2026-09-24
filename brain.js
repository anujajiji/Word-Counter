// 1. Select DOM elements
const textInput = document.getElementById('text-input');
const charCountDisplay = document.getElementById('char-count');
const charNoSpacesDisplay = document.getElementById('char-no-spaces-count');
const wordCountDisplay = document.getElementById('word-count');
const linesEl     = document.getElementById('lines');


// 2. Core function to calculate stats and update the interface
function updateCounts() {
  const text = textInput.value;

  // Total character count (including spaces)
  const totalCharacters = text.length;

  // Characters excluding spaces
  const charactersNoSpaces = text.replace(/\s/g, '').length;

  // Word count using Regular Expression
  // .trim() removes leading/trailing spaces
  // \s+ matches one or more space/newline characters
  const trimmedText = text.trim();
  const totalWords = trimmedText === '' ? 0 : trimmedText.split(/\s+/).length;
  const countLines       = (text) =>
  text === '' ? 0 : text.split(/\r\n|\r|\n/).length;

  // 3. Render calculations to the DOM
  charCountDisplay.textContent = totalCharacters;
  charNoSpacesDisplay.textContent = charactersNoSpaces;
  wordCountDisplay.textContent = totalWords;
  linesEl.textContent     = countLines(text);
}

// 4. Attach event listeners
// The 'input' event triggers on typing, backspace, and pasting via mouse or keyboard
textInput.addEventListener('input', updateCounts);