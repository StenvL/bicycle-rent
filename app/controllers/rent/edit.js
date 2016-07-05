import Ember from 'ember';

export default Ember.Controller.extend({
    sessionList: [],
    session: null,
    filteredClients: [],

    actions: {
        searchClients(filter) {
            this.store.query('client', { fullName: filter }).then( (result) =>
                this.set('filteredClients', result));
        },

        selectClient(client) {
            this.set('session.client', client.get('id'));
        },


        filterByDateAndModel(selectedDate, selectedBicycleId) {
            this.store.query('session', { giveDate: selectedDate, bicycle: selectedBicycleId } ).then((result) =>
                this.set('sessionList', result) );
        },

        filterByDate(selectedDate) {
            this.store.query('session', { giveDate: selectedDate} ).then((result) =>
                this.set('sessionList', result));
        },

        filterByModel(selectedBicycleId) {
            this.store.query('session', { bicycle: selectedBicycleId } ).then((result) =>
                this.set('sessionList', result));
        },

        selectSession(sessionItem) {
            this.set('session', sessionItem);
        },

        applyChanges(giveDate, returnDate) {
            this.store.findRecord('session', this.get('session').get('id')).then( (record) => {
                record.set('bicycle',this.get('session').get('bicycle'));
                record.set('client',this.get('session').get('client'));
                record.set('employeeGive',this.get('session').get('employeeGive'));
                record.set('employeeTake',this.get('session').get('employeeTake'));
                record.set('giveDate', new Date(giveDate));
                record.set('returnDate', new Date(returnDate));
                record.set('startPoint', this.get('session').get('startPoint'));
                record.set('endPoint', this.get('session').get('endPoint'));
                record.set('status', this.get('session').get('status'));
                record.set('cost', this.get('session').get('cost'));
                record.save().then( () =>
                    alert('Данные успешно сохранены')
                );
            })
            .catch(error => alert(`Ошибка сохранения данных: ${error}`));
            
        }
    }
});