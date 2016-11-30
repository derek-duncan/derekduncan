const validateMessage = (message) => {
  const { text, external } = message;
  const isEmptyValues = (
    !text
    || !text.length
    || typeof external === 'undefined'
  );
  if (isEmptyValues) return false;

  return true;
};

module.exports = validateMessage;
