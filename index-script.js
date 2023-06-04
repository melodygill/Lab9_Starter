class ExampleError extends Error {
    constructor(message) {
      super(message);
      this.name = "ExampleError";
    }
  }

let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;

      try {
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
      } catch (err) {
        console.error(err);
      } finally {
        console.log("end of calculation");
      }

      throw(new ExampleError("this is an error"));
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// lab9
let consoleLogBtn = errorBtns[0];
consoleLogBtn.addEventListener('click', event => {
    console.log("Console log demo");
});

let consoleErrorBtn = errorBtns[1];
consoleErrorBtn.addEventListener('click', event => {
    console.error("Console error demo");
});

let consoleCountBtn = errorBtns[2];
consoleCountBtn.addEventListener('click', event => {
    console.count();
});

let consoleWarnBtn = errorBtns[3];
consoleWarnBtn.addEventListener('click', event => {
    console.warn("Console warning demo");
});

let consoleAssertBtn = errorBtns[4];
consoleAssertBtn.addEventListener('click', event => {
    console.assert(2+3==4, {});
});

let consoleClearBtn = errorBtns[5];
consoleClearBtn.addEventListener('click', event => {
    console.clear();
});

let consoleDirBtn = errorBtns[6];
consoleDirBtn.addEventListener('click', event => {
    console.dir(document.head);
});

let consoleDirXMLBtn = errorBtns[7];
consoleDirXMLBtn.addEventListener('click', event => {
    console.dirxml(document.body);
});

let consoleGroupStartBtn = errorBtns[8];
consoleGroupStartBtn.addEventListener('click', event => {
    console.group("best group ever");
});

let consoleGroupEndBtn = errorBtns[9];
consoleGroupEndBtn.addEventListener('click', event => {
    console.groupEnd("best group ever");
});

let consoleTableBtn = errorBtns[10];
consoleTableBtn.addEventListener('click', event => {
    var info = [
        {
          name: 'Benny',
          species: 'cow',
        },
        {
            name: 'Boots',
            species: 'monkey',
          favorite_color: 'red',
        },
        {
            name: 'Swiper',
            species: 'fox',
        }
      ];
      console.table(info);
});

let consoleStartTimerBtn = errorBtns[11];
consoleStartTimerBtn.addEventListener('click', event => {
    console.time();
});

let consoleEndTimerBtn = errorBtns[12];
consoleEndTimerBtn.addEventListener('click', event => {
    console.timeEnd();
});

let consoleTraceBtn = errorBtns[13];
consoleTraceBtn.addEventListener('click', event => {
    const one = () => { two(); };
    const two = () => { three(); };
    const three = () => { console.trace(); };
    one();
});

let consoleGlobalErrorBtn = errorBtns[14];
consoleGlobalErrorBtn.addEventListener('click', event => {
    let errorEl = document.getElementById('nonexistant');
    errorEl.innerHTML = `hi`;
});