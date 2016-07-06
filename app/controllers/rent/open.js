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

        openSession(empGiveId, clientId, bicycleId, startPointId) {
            let emp = this.get('model.employee').find( (item) => item.id == empGiveId);
            let client = this.get('model.client').find( (item) => item.id == clientId);
            let bicycle = this.get('model.bicycle').find( (item) => item.id == bicycleId);
            let point = this.get('model.point').find( (item) => item.id == startPointId);
            
            this.store.createRecord('session',
            {
                employeeGive: emp,
                client: client,
                bicycle: bicycle,
                startPoint: point,
                giveDate: new Date(),
                status: 'Ожидается оплата'
            }).save().then(() => alert('Данные успешно сохранены'))
                     .catch(error => alert(`Ошибка при сохранении данных: ${error}`) )
        }
    }
});
