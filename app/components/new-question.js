import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    save1() {
      var params = {
        userQuestion: this.get('userQuestion'),
        author: this.get('author'),
        city: this.get('city'),
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});
