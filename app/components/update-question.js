import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),
  updateQuestionForm: false,
  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
        userQuestion: this.get('userQuestion'),
        author: this.get('author'),
        city: this.get('city')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    },
  }
});
