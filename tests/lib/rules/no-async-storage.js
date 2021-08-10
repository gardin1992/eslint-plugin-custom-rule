/**
 * @fileoverview Nao importar AsyncStorage do pacote padrao
 * @author Joao Gardin &lt;gardin1992@gmail.com&gt;
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-async-storage"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------
const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: { jsx: true },
  },
});

ruleTester.run("no-async-storage", rule, {
  valid: [
    // give me some code that won't trigger a warning
  ],

  invalid: [
    {
      code: "import { AsyncStorage } from 'react-native'",
      errors: [
        {
          message:
            "Utilize CorpAsyncStorage do módulo corp-lib em lugar de AsyncStorage",
          type: "ImportDeclaration",
        },
      ],
    },
  ],
});
