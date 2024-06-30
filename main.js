let textBox = document.getElementById('left-text');
let btn = document.getElementById('button');
let clearBtn = document.getElementById('button2');
let display = document.getElementById('display');
let finalWord = '';

function generateEmoji(text) {
  let wordsToArray = Array.from(text.toLocaleLowerCase());

  wordsToArray.forEach(function (value) {
    switch (value) {
      case ' ':
        finalWord += ' ';
        break;
      case 'a':
        finalWord += '😳';
        break;
      case 'b':
        finalWord += '🥲';
        break;
      case 'c':
        finalWord += '😒';
        break;
      case 'd':
        finalWord += '😁';
        break;
      case 'e':
        finalWord += '😅';
        break;
      case 'f':
        finalWord += '😧';
        break;
      case 'g':
        finalWord += '😂';
        break;
      case 'h':
        finalWord += '🥺';
        break;
      case 'i':
        finalWord += '🥱';
        break;
      case 'j':
        finalWord += '😆';
        break;
      case 'k':
        finalWord += '😀';
        break;
      case 'l':
        finalWord += '🤣';
        break;
      case 'm':
        finalWord += '😭';
        break;
      case 'n':
        finalWord += '😉';
        break;
      case 'o':
        finalWord += '😪';
        break;
      case 'p':
        finalWord += '😴';
        break;
      case 'q':
        finalWord += '🥳';
        break;
      case 'r':
        finalWord += '🙄';
        break;
      case 's':
        finalWord += '🤯';
        break;
      case 't':
        finalWord += '😇';
        break;
      case 'u':
        finalWord += '🤠';
        break;
      case 'v':
        finalWord += '🤐';
        break;
      case 'w':
        finalWord += '🤔';
        break;
      case 'x':
        finalWord += '😶';
        break;
      case 'y':
        finalWord += '🤫';
        break;
      case 'z':
        finalWord += '🤗';
        break;

      default:

      // code
    }
  });
}

function generateText(emoji) {
  let emojiToArray = Array.from(emoji);
  emojiToArray.forEach(function (value) {
    switch (value) {
      case ' ':
        finalWord += ' ';
        break;
      case '😳':
        finalWord += 'a';
        break;
      case '🥲':
        finalWord += 'b';
        break;
      case '😒':
        finalWord += 'c';
        break;
      case '😁':
        finalWord += 'd';
        break;
      case '😅':
        finalWord += 'e';
        break;
      case '😧':
        finalWord += 'f';
        break;
      case '😂':
        finalWord += 'g';
        break;
      case '🥺':
        finalWord += 'h';
        break;
      case '🥱':
        finalWord += 'i';
        break;
      case '😆':
        finalWord += 'j';
        break;
      case '😀':
        finalWord += 'k';
        break;
      case '🤣':
        finalWord += 'l';
        break;
      case '😭':
        finalWord += 'm';
        break;
      case '😉':
        finalWord += 'n';
        break;
      case '😪':
        finalWord += 'o';
        break;
      case '😴':
        finalWord += 'p';
        break;
      case '🥳':
        finalWord += 'q';
        break;
      case '🙄':
        finalWord += 'r';
        break;
      case '🤯':
        finalWord += 's';
        break;
      case '😇':
        finalWord += 't';
        break;
      case '🤠':
        finalWord += 'u';
        break;
      case '🤐':
        finalWord += 'v';
        break;
      case '🤔':
        finalWord += 'w';
        break;
      case '😶':
        finalWord += 'x';
        break;
      case '🤫':
        finalWord += 'y';
        break;
      case '🤗':
        finalWord += 'z';
        break;

      default:
    }
  });
}

function displayTextAndEmoji(value) {
  generateText(value);
  generateEmoji(value);
  display.innerText = finalWord;
}

btn.addEventListener('click', () => displayTextAndEmoji(textBox.value));

clearBtn.addEventListener('click', () => {
  finalWord = '';
  display.innerText = '';
  textBox.value = '';
});

textBox.addEventListener('change', function () {
  finalWord = '';
});
