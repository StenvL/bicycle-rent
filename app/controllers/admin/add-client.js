import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addClient(name, document) {
            var record = this.store.createRecord('client', {
                fullName: name,
                documentData: document
            });

            record.save()
                .then(alert('Запись успешно добавлена'))
                .catch(error => alert(`Ошибка при добавлении в базу: ${error}`));
        }
    }
});
