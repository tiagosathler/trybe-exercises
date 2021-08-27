module.exports = {
    "env": {
        "browser": true,
        "jest": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "no-console": "off",
        "prefer-arrow-callback": "off",
        "func-names": "off",
        "no-param-reassign": "off",
        "max-lines-per-function": "off"
      },
};
