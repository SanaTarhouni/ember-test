import DS from 'ember-data';
export default DS.RESTSerializer.extend({
  attrs: {
    illustration: { embedded: 'always' }
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload = {
      projects: payload.projects,
    }
    return this._super(...arguments);
  }

});
