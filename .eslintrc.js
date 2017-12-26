// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 语句强制分号结尾
    'semi': [0, 'always'],
    // 禁止比较时使用NaN，只能用isNaN()
    'use-isnan': 2,
    // 不能用多余的空格
    'no-multi-spaces': 2,
    // 禁止不必要的bool转换
    'no-extra-boolean-cast': 0,
  }
}
