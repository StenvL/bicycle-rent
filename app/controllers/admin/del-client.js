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

        delClient(clientId) {
            this.store.findRecord('client', clientId).then( (record) => {
                record.destroyRecord() 
                    .then(() => alert('Запись удалена'))
                    .catch(error => alert(`Ошибка при удалении записи ${error}`));
            });
        }
    }
});
