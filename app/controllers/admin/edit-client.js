import Ember from 'ember';

export default Ember.Controller.extend({
    filteredClients: null,
    client: null,

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
            this.set('client', client);
        },

        applyChanges() {
            this.store.findRecord('client', this.get('client').get('id')).then( (record) => {
                record.set('fullName', this.get('client').get('fullName'));
                record.set('documentData', this.get('client').get('documentData'));
                record.save().then( () =>
                    alert('Данные успешно сохранены') );
            })
            .catch(error => alert(`Ошибка сохранения данных: ${error}`));
        }
    }
});
