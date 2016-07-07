import Ember from 'ember';

export default Ember.Component.extend({
    modelName: "",
    modelDescription: "",

    actions: {
        submit() {
          this.get('submit')(this.get('modelName'), this.get('modelDescription'));
        }
    }
});
