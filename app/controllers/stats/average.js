import Ember from 'ember';

export default Ember.Controller.extend({
    averageTime: -1,

    actions: {
        calcAverageTime(curBicycleId, curPointId) {
            this.store.query('session', { bicycleId: curBicycleId, startPointId: curPointId })
            .then( (sessions) => {
                if (sessions.get('length') !== 0) {
                    let timeCount = 0;
                    sessions.forEach( (item) =>
                        timeCount += new Date(item.get('returnDate')) - new Date(item.get('giveDate'))
                    );

                    this.set('averageTime', 
                        parseFloat((timeCount / sessions.get('length') / 60000).toFixed(2)) );
                }
            });
        }
    }
});
