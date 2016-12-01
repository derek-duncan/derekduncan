const validateMessage = (message) => {
  const { text } = message;
  const isEmptyValues = (!text || !text.length);
  if (isEmptyValues) return false;

  return true;
};

module.exports = validateMessage;
