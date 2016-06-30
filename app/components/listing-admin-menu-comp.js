import Ember from 'ember';

export default Ember.Component.extend({
    isBicycleMenuShowing: false,
    isEmployeeMenuShowing: false,
    isClientMenuShowing: false,
    isPointMenuShowing: false,

    actions: {    
        changeMenuItemShowingState(param) {
            this.toggleProperty(param);
        },
    }
});
