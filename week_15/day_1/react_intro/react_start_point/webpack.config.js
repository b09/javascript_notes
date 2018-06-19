const config = {
  entry: `${__dirname}/client/src/app.js`,
  output: {
    filename: "bundle.js",
    path: `${__dirname}/client/build`
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx']
  }
};

module.exports = config;
