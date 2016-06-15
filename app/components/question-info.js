import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(params) {
      this.sendAction('save', params);
    },
    update (answer, params) {
      this.sendAction('update', answer, params);
    },
    delete(question) {
      if (confirm('Confirm delete question.')) {
        this.sendAction('destroyQuestion', question);
      }
    }
  }
});
