module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: false,
          convertPathData: {
            floatPrecision: 3,
          },
        },
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill)',
      },
    },
  ],
};
