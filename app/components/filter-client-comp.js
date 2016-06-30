import Ember from 'ember';

export default Ember.Component.extend({
    filterValue: "",
    filteredClients: null,
    selectedClientId: null,

    actions: {
        searchClients() {
            if (this.get('filterValue')) {
                this.get('searchClients')(this.get('filterValue'));
            }
        },

        selectClient(client) {
            let clientClone = {};
            for (var key in client) {
                clientClone[key] = client[key];
            }
            this.get('selectClient')(clientClone);
        }
    }
});
