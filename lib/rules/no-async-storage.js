/**
 * @fileoverview Nao importar AsyncStorage do pacote padrao
 * @author Joao Gardin <gardin1992@gmail.com>
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: null, // `problem`, `suggestion`, or `layout`
    docs: {
      description: "Nao importar AsyncStorage do pacote padrao",
      category: "Fill me in",
      recommended: false,
      url: null, // URL to the documentation page for this rule
    },
    fixable: null, // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
  },

  create(context) {
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
      // visitor functions for different types of nodes
      ImportDeclaration(node) {
        if (
          node.source.value === "react-native" &&
          node.specifiers.find((obj) => obj.imported.name === "AsyncStorage")
        ) {
          const msg =
            "Utilize CorpAsyncStorage do módulo corp-lib em lugar de AsyncStorage";
          context.report({
            node,
            message: msg,
          });
        }
      },
    };
  },
};
