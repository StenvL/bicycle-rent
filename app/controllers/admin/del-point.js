import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        delPoint(pointId) {
            this.store.findRecord('point', pointId).then( (record) => {
                record.destroyRecord() 
                    .then(() => alert('Запись удалена'))
                    .catch(error => alert(`Ошибка при удалении записи ${error}`));
            });
    
        }
    }
});
