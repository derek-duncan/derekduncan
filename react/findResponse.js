import R from 'ramda';

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const findResponse = (responses) => {
  if (!R.isArrayLike(responses)) return { ...responses, external: true };

  const randomIndex = getRandomInt(0, responses.length - 1);
  const response = responses[randomIndex];
  return {
    ...response,
    external: true,
  };
};

module.exports = findResponse;
