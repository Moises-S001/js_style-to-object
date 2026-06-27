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
    .reduce((stylesObject, currentLine) => {
      const [key, value] = currentLine.split(':');

      stylesObject[key.trim()] = value;

      return stylesObject;
    }, {});
}

module.exports = convertToObject;
