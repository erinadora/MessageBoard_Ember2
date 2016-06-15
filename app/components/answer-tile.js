import Ember from 'ember';

export default Ember.Component.extend({
  userProfile: Ember.computed('answer.answerAuthor', 'answer.answerContent', function() {
    return this.get('answer.answerAuthor') + ', ' + this.get('answer.answerContent');
  }),

  updateAnswerForm: false,
  actions: {
    update(answer, params) {
      this.sendAction('update', answer, params);
    },
    delete(answer) {
      if(confirm('Confirm delete answer.')) {
      this.sendAction('delete', answer);
      }
    }
  }
});
