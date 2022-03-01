const { sum } = require('b');

const add = (a, b) => {
  // eslint-disable-next-line no-console
  console.log('hey');
  return sum(a, b);
};

module.exports = { add };
