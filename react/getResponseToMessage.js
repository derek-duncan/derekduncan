import R from 'ramda';
import stopwords from 'data/stopwords';
import responses from 'data/responses';
import findResponse from 'findResponse';

const greetingWords = [
  'hi',
];

const questionWords = ['where', 'what', 'how', '?', 'were'];
const commandWords = ['tell', 'say', 'go', 'get', 'move', 'stop'];

const removeStopWords = R.compose(
  R.join(' '),
  R.difference(R.__, stopwords),
  R.split(' '),
);

const splitText = R.compose(
  R.filter(R.compose(
    R.not,
    R.isEmpty,
    R.trim,
  )),
  R.split(/(\W)/g),
);

const determineTextType = (text) => {
  const split = splitText(text);
  const isQuestion = R.any(R.contains(R.__, questionWords), split);
  const isCommand = R.any(R.contains(R.__, commandWords), split);

  let type;
  if (isQuestion) {
    type = 'question';
  } else if (isCommand) {
    type = 'command';
  } else {
    type = 'unknown';
  }
  return type;
};

const normalizeText = R.compose(R.replace(/[^a-z0-9\s?.]/g, ''), R.trim, R.toLower);

const getResponseToMessage = (message) => {
  const text = normalizeText(message.text);
  const type = determineTextType(text);

  const responseText = findResponse(responses.greetings);

  return responseText;
};

module.exports = getResponseToMessage;
