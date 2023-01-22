module.exports = {
    "env": {
        "commonjs": true,
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:json/recommended",
        // "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    "settings": {
        "react": {
            "version": "detect",
        }
    },
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    }
};