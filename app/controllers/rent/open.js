import Ember from 'ember';

export default Ember.Controller.extend({
    filteredClients: null,
    clientId: null,
    
    actions: {

        searchClients(filter) {
            this.store.query('client', { fullName: filter }).then( (result) =>
                this.set('filteredClients', result));
        },

       selectClient(client) {
            this.set('clientId', client.get('id'));
        },

        openSession(giveName, client, bicycle, startPoint) {
                let record = this.store.createRecord('session',
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
