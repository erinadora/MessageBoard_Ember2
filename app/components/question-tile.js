import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQueston: Ember.inject.service(),
  updateQuestionForm: false,
  actions: {
    addToFavorites(favorite) {
      this.get('favoriteQueston').add(favorite);
    },
    update(question, params) {
      this.sendAction('update', question, params);
    },
  }
});
