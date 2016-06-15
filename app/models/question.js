import DS from 'ember-data';

export default DS.Model.extend({
  userQuestion: DS.attr(),
  author: DS.attr(),
  city: DS.attr(),
  answer: DS.hasMany('answer', { async:true })
});
