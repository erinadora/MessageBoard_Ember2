import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),
  updateQuestionForm: false,
  actions: {
    addToFavorites(favorite) {
      this.get('favoriteQuestion').add(favorite);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
  }
});
