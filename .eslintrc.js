module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', 'prettier/@typescript-eslint', 'prettier/react'],
  plugins: ['prefer-arrow'],
  rules: {
    'no-console': 1,
    'react-hooks/exhaustive-deps': 1,
    'no-unused-vars': 1,
    '@typescript-eslint/no-unused-vars': 1,
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false
      }
    ], 'prettier/prettier': [
      'error',
      {
        'endOfLine': 'auto',
      }
    ]
  }
};
