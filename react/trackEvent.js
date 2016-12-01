const trackEvent = ({ category, action, label, value }) => {
  const ga = window.ga;
  ga('send', 'event', category, action, label, value);
};

module.exports = trackEvent;
