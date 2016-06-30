import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        openSession(giveName, client, bicycle, startPoint) {
            var record = this.store.createRecord('session',
                {
                    employeeGive: giveName,
                    client: client,
                    bicycle: bicycle,
                    startPoint: startPoint,
                    giveDate: new Date(),
                    status: 'Ожидается оплата'
                });
            record.save()
                .then(() => alert('Данные успешно сохранены'))
                .catch(() => (error => alert(`Ошибка при сохранении данных: ${error}`) ));
        }
    }
});
