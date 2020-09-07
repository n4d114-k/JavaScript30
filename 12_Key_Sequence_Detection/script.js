const PRESSED = [];
const SECRET_CODE = 'n4d114-k';

window.addEventListener('keyup', ev => {

  PRESSED.push(ev.key);
  PRESSED.splice(-SECRET_CODE.length - 1, PRESSED.length - SECRET_CODE.length);
  if (PRESSED.join('').includes(SECRET_CODE)) {
    console.log('%cDING DING!', 'color: rgb(255, 0, 255)');
    cornify_add();
  }

  console.dir(PRESSED);

});
