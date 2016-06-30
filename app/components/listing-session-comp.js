import Ember from 'ember';

export default Ember.Component.extend({
    isDetailsShowing: false,

    actions: {
        changeShowingState() {
            let temp = this.get('isDetailsShowing');
            this.set('isDetailsShowing', !temp);
        }
    }
});
