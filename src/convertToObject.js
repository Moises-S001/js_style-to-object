'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((codeCss) => codeCss.trim())
    .filter((trimCodeCss) => trimCodeCss.includes(':'))
    .reduce((stylesObjeto, atualLine) => {
      const [chave, valor] = atualLine.split(':');

      stylesObjeto[chave.trim()] = valor.trim();

      return stylesObjeto;
    }, {});
}

module.exports = convertToObject;
