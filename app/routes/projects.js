import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),
  model() {
    return this.get('store').findAll('project');
  },
 
  setupController: function(controller, model) {
    controller.set('model', model);
  }
  
});