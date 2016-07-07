import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addPoint(pointAddress) {
            var record = this.store.createRecord('point', {
                address: pointAddress
            });

            record.save()
                .then(alert('Запись успешно добавлена'))
                .catch(error => alert(`Ошибка при добавлении в базу: ${error}`));
        }
    }
});
