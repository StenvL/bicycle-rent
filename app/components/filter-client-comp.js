import Ember from 'ember';

export default Ember.Component.extend({
    filterValue: "",
    filteredClients: null,

    actions: {
        showFilteredClients() {
            if (this.get('filterValue')) {
                this.get('showFilteredClients')(this.get('filterValue'));
            }
        },

        showAllClients() {
            this.get('showAllClients')();
        },

        selectClient(client) {
            let clientClone = {};
            for (let key in client) {
                clientClone[key] = client[key];
            }
            this.get('selectClient')(clientClone);
        }
    }
});
