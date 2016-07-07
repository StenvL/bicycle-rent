import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addEmployee(empName, empPosition) {
            var record = this.store.createRecord('employee', {
                fullName: empName,
                position: empPosition
            });

            record.save()
                 .then(alert('Запись успешно добавлена'))
                 .catch(error => alert(`Ошибка при добавлении в базу: ${error}`));
        }
    }
});
