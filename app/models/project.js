import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({

  name: DS.attr(),
  grade: DS.attr(),
  loanDuration: DS.attr(),
  rate: DS.attr(),
  amount: DS.attr(),
  openingDate: DS.attr(),
  business: DS.attr(),
  illustration: DS.attr()

});
