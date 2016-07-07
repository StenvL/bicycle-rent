import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        delBicycle(bicycleId) {
            this.store.findRecord('bicycle', bicycleId).then( (record) => {
                record.destroyRecord() 
                    .then(() => alert('Запись удалена'))
                    .catch(error => alert(`Ошибка при удалении записи ${error}`));
            });
    
        }
    }
});
