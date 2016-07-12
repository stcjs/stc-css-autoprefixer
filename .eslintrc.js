'use strict';

module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6, // ECMAScript 版本
    "sourceType": "module",
    "ecmaFeatures": {
      "arrowFunctions": true,
      "binaryLiterals": true,
      "blockBindings": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "forOf": true,
      "generators": true,
      "modules": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "octalLiterals": true,
      "regexUFlag": true,
      "regexYFlag": true,
      "restParams": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "unicodeCodePointEscapes": true,
      "globalReturn": true,
      "impliedStrict": true,
      "experimentalObjectRestSpread": true
    }
  },

  "env": {
    "node": true,
    "mocha": true,
    "es6": true
  },

  "rules": {
    "comma-dangle": 2,
    "no-cond-assign": 2,
    "no-console": 1,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-dupe-args": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty": ["error", {"allowEmptyCatch": true}],
    "no-empty-character-class": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": 2,
    "no-extra-semi": 2,
    "no-func-assign": 2,
    "no-inner-declarations": [2, "both"],
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-negated-in-lhs": 2,
    "no-obj-calls": 2,
    "no-regex-spaces": 2,
    "no-sparse-arrays": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "use-isnan": 2,
    "valid-jsdoc": 2,
    "valid-typeof": 2,

    "accessor-pairs": [2, {"getWithoutSet": true}],
    "array-callback-return": 2,
    "block-scoped-var": 2,
    "complexity": [2, 12],
    "consistent-return": 1,
    "curly": 2,
    "default-case": 1,
    "dot-location": [2, "property"],
    "dot-notation": 2,
    "eqeqeq": 2,
    "guard-for-in": 1,
    "no-alert": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-div-regex": 2,
    "no-else-return": 2,
    "no-empty-function": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-implicit-coercion": [2, {
      "boolean": false,
      "number": false,
      "string": false
    }],
    "no-implicit-globals": 2,
    "no-implied-eval": 2,
    "no-invalid-this": 2,
    "no-iterator": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-loop-func": 2,
    "no-magic-numbers": [1, {
      "ignore": [-1, 0, 1, 60, 24, 1000],
      "ignoreArrayIndexes": true,
      "enforceConst": true,
      "detectObjects": true
    }],
    "no-multi-spaces": [1, {"exceptions": {"VariableDeclarator": true, "ImportDeclaration": true}}],
    "no-multi-str": 2,
    "no-native-reassign": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-wrappers": 2,
    "no-octal-escape": 2,
    "no-octal": 2,
    "no-param-reassign": [2, {"props": false}],
    "no-proto": 2,
    "no-redeclare": 2,
    "no-return-assign": [2, "always"],
    "no-script-url": 2,
    "no-self-assign": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-throw-literal": 2,
    "no-unmodified-loop-condition": 2,
    "no-unused-expressions": 2,
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-useless-escape": 2,
    "no-void": 2,
    "no-warning-comments": [1, {"terms": ["todo", "fixme", "xxx"], "location": "start"}],
    "no-with": 2,
    "radix": 2,
    "wrap-iife": [2, "outside"],
    "yoda": 2,

    "strict": [2, "global"], // strict 模式

    "init-declarations": [1, "always"],
    "no-catch-shadow": 2,
    "no-delete-var": 2,
    "no-restricted-globals": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-unused-vars": 2,
    "no-use-before-define": 2,

    "callback-return": [2, ["callback", "cb", "next"]],
    "global-require": 2,
    "handle-callback-err": [2, "^(err|error)$"],
    "no-mixed-requires": [1, {"grouping": false}],
    "no-new-require": 2,
    "no-path-concat": 2,
    "no-process-env": 2,
    "no-process-exit": 2,
    "no-restricted-modules": 2,
    "no-sync": 2,

    "array-bracket-spacing": [2, "never"],
    "block-spacing": [2, "never"],
    "brace-style": [2, "1tbs", {"allowSingleLine": false}],
    "camelcase": [1, {"properties": "always"}],
    "comma-spacing": [2, {"before": false, "after": true}],
    "comma-style": [2, "last"],
    "computed-property-spacing": [2, "never"],
    "consistent-this": [2, "self", "_this"],
    "eol-last": 2,
    "func-names": 2,
    "func-style": [2, "expression", {"allowArrowFunctions": true}],
    "id-blacklist": ["error", "data", "err"],
    "id-length": [1, {"min": 2, "max": 32, "properties": "always", "exceptions": ["e"]}],
    "indent": [1, 2, {"SwitchCase": 1}],
    "key-spacing": [1, {"beforeColon": false, "afterColon": true}],
    "keyword-spacing": [1, {"before": true, "after": true}],
    "linebreak-style": [2, "unix"],
    "lines-around-comment": [1, {
      "beforeBlockComment": true,
      "beforeLineComment": true,
      "allowBlockStart": true,
      "allowObjectStart": true
    }],
    "max-depth": [1, 8],
    "max-len": [1, 120, 4, {"ignoreComments": true, "ignoreUrls": true}],
    "max-nested-callbacks": [2, 5],
    "max-params": [2, 5],
    "max-statements": [2, 12],
    "new-cap": [2, {"capIsNewExceptions": [], "newIsCapExceptions": []}],
    "new-parens": 2,
    "newline-after-var": [0, "always"],
    "newline-before-return": 0,
    "newline-per-chained-call": 0,
    "no-array-constructor": 2,
    "no-bitwise": 2,
    "no-continue": 1,
    "no-lonely-if": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multiple-empty-lines": [2, {"max": 2, "maxEOF": 1}],
    "no-negated-condition": 2,
    "no-nested-ternary": 2,
    "no-new-object": 2,
    "no-restricted-syntax": [2, "WithStatement"],
    "no-spaced-func": 2,
    "no-trailing-spaces": 2,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "no-whitespace-before-property": 2,
    "object-curly-spacing": [2, "never"],
    "one-var-declaration-per-line": 2, // var 声明在同一行
    "operator-assignment": [2, "always"], // 赋值运算符
    "operator-linebreak": [2, "none"], // 运算符换行
    "padded-blocks": 0, // 块级作用域前后的空行
    "quote-props": [2, "as-needed", {"keywords": true, "numbers": true, "unnecessary": false}], // 引号
    "quotes": [2, "single", "avoid-escape"], // 引号类型
    "require-jsdoc": [1, {"require": { // JSDoc 类型
      "FunctionDeclaration": true,
      "MethodDefinition": true,
      "ClassDeclaration": true
    }}],
    "semi": [2, "always"], // 分号
    "semi-spacing": [2, {"before": false, "after": true}], // 分号风格
    "sort-vars": 0, // var 排序
    "space-before-blocks": [1, {"functions": "always", "keywords": "always"}], // 块级的空格
    "space-before-function-paren": [1, {"anonymous": "always", "named": "never"}], // 函数的空格
    "space-in-parens": [1, "never"], // 函数调用内部空格
    "space-infix-ops": [1, {"int32Hint": true}], // 运算符空格
    "space-unary-ops": 1, // 一元运算符空格
    "spaced-comment": [1, "always", {
      "block": {
        "markers": ["!"],
        "exceptions": ["*"]
      }
    }], // 注释的空格
    "wrap-regex": 0, // 正则直接量的使用

    // ECMAScript 6
    "arrow-body-style": [2, "as-needed"], // 箭头函数体的风格
    "arrow-parens": [2, "as-needed"], // 箭头函数头的风格
    "arrow-spacing": [1, {"before": true, "after": true}], // 箭头函数的空格
    "constructor-super": 2, // super 调用的校验
    "generator-star-spacing": [2, {"before": true, "after": false}], // generator 的风格
    "no-class-assign": 2, // class 重复赋值
    "no-confusing-arrow": 2, // 在条件判断中禁止箭头函数，=> 和 >= 容易混淆
    "no-const-assign": 2, // const 的重复赋值
    "no-dupe-class-members": 2, // 重复的 class 方法名
    "no-duplicate-imports": 2, // 不允许重复的 imports 引用
    "no-new-symbol": 2, // 不允许通过 new 调用 Symbol
    "no-restricted-imports": 2, // 不允许 imports 限制的模块
    "no-this-before-super": 2, // 在 this 之前调用 super
    "no-useless-computed-key": 2, // 不允许没必要的计算 key
    "no-useless-constructor": 2, // 禁止没必要的构造函数
    "no-var": 2, // 在 es6 中禁止使用 var
    "object-shorthand": 1, // 对象的缩写
    "prefer-arrow-callback": 1, // 优先回调中使用箭头函数
    "prefer-const": 1, // 优先使用 const
    "prefer-reflect": 2, // 优先使用 Reflect 对象的方法
    "prefer-rest-params": 2, // 优先使用不定参数 ...argu 形式
    "prefer-spread": 2, // 优先使用 spread
    "prefer-template": 2, // 优先使用模板
    "require-yield": 2, // 在 generate 中使用 yield 关键字
    "sort-imports": 0, // imports 排序
    "template-curly-spacing": 2, // 模板变量的空白符
    "yield-star-spacing": [2, "after"] // yield 的 * 空白符
  },
  "globals": {
    "stc": true
  }
};
