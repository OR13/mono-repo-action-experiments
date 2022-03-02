const { sum } = require('b');

const add = (a, b) => {
  // eslint-disable-next-line no-console
  console.log('hey 123');
  return sum(a, b);
};

module.exports = { add };
