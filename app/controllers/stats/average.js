import Ember from 'ember';

export default Ember.Controller.extend({
    averageTime: -1,

    actions: {
        calcAverageTime(bicycleId, pointId) {
            this.store.query('session', { bicycle: bicycleId, startPoint: pointId, })
            .then( (sessions) => {
                if (sessions.get('length') !== 0) {
                    let timeCount = 0;
                    sessions.forEach( (item) =>
                        timeCount += item.get('returnDate') - item.get('giveDate')
                    );

                    this.set('averageTime', 
                        parseFloat((timeCount / sessions.get('length') / 60000).toFixed(2)) );
                }
            });
        }
    }
});
