function simpleHOF(fn = () => {}) {
  return (...args) => {
    fn(...args);
  };
}

function logHOF(fn = () => {}) {
  return (...args) => {
    console.log(`Call function "${fn.name}" with these arguments: `, args);
    fn(...args);
    console.log(`Call of the function "${fn.name}" has been finished`);
  };
}

function delayHOF(fn = () => {}, delayMS = 300) {
  return (...args) => {
    setTimeout(() => {
      fn(...args);
    }, delayMS);
  };
}

const printName = (firstName = '', lastName = '') => {
  console.log([firstName, lastName].filter(l => l.length).join(" "));
};

const wrappedPrintName = delayHOF(printName);

window.wrappedPrintName = wrappedPrintName;
