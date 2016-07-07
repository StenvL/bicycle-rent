import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addBicycle(modelName, modelDescription) {
            var record = this.store.createRecord('bicycle', {
                model: modelName,
                description: modelDescription
            });

            record.save()
                .then(alert('Запись успешно добавлена'))
                .catch(error => alert(`Ошибка при добавлении в базу: ${error}`));
        }
    }
});
