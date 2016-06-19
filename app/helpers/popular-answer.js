import Ember from 'ember';

export function popularAnswer(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') >=3) {
    return Ember.string.htmlSafe('<p class="helper"<span class="glyphicon glyphicon-heart"</span>Trending</p>');
  }
}

export default Ember.Helper.helper(popularAnswer);
