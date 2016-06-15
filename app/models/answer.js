import DS from 'ember-data';

export default DS.Model.extend({
  answerAuthor: DS.attr(),
  answerCity: DS.attr(),
  answerContent: DS.attr(),
  question: DS.belongsTo('question', { async: true })
});
