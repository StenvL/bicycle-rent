import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        delEmployee(employeeId) {
            this.store.findRecord('employee', employeeId).then( (record) => {
                record.destroyRecord() 
                    .then(() => alert('Запись удалена'))
                    .catch(error => alert(`Ошибка при удалении записи ${error}`));
            });
    
        }
    }
});
