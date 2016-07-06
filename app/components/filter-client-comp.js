import Ember from 'ember';

export default Ember.Component.extend({
    filterValue: "",
    filteredClients: null,

    actions: {
        searchClients() {
            if (this.get('filterValue')) {
                this.get('searchClients')(this.get('filterValue'));
            }
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
