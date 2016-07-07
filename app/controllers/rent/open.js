import Ember from 'ember';

export default Ember.Controller.extend({
    filteredClients: null,
    clientId: null,
    
    actions: {
        showFilteredClients(filter) {
            this.store.query('client', { fullName: filter }).then( (clients) =>
                this.set('filteredClients', clients) );
        },

        showAllClients() {
            this.store.findAll('client').then( (clients) =>
                this.set('filteredClients', clients) );
        },

       selectClient(client) {
            this.set('clientId', client.get('id'));
        },

        openSession(empGiveId, clientId, bicycleId, startPointId) {
            let emp = this.get('model.employee').find( (item) => item.id === empGiveId);
            let client = this.get('model.client').find( (item) => item.id === clientId);
            let point = this.get('model.point').find( (item) => item.id === startPointId);
            
            this.store.findRecord('bicycle', bicycleId).then( (bicycle) => {
                bicycle.set('isGiven', true);
                bicycle.save().then( () => {
                    this.store.createRecord('session',
                    {
                        employeeGive: emp,
                        client: client,
                        bicycle: bicycle,
                        startPoint: point,
                        giveDate: new Date(),
                        status: 'Ожидается оплата'
                    }).save()
                    .then(() => {
                        alert('Данные успешно сохранены');
                        this.send('sessionOpened');
                        document.getElementById('employeesList').selectedIndex = 
                        document.getElementById('bicyclesList').selectedIndex = 
                        document.getElementById('startPointsList').selectedIndex = 0;      
                    })
                    .catch(error => alert(`Ошибка при сохранении данных: ${error}`) );
                });
            });
        }
    }
});
