module.exports = {
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: './reports',
      filename: 'a.html',
    }],
  ],
};
