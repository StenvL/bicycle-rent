import Ember from 'ember';

export default Ember.Controller.extend({
    sessionList: [],
    session: null,
    client: null,
    filteredClients: [],

    actions: {
        // Поиск клиентов по фильтру.
        searchClients(filter) {
            this.store.query('client', { fullName: filter }).then( (result) =>
                this.set('filteredClients', result));
        },

        // Присвоение свойствам выбранных значений.
        selectClient(clientItem) {
            this.set('client', clientItem);
        },

        selectSession(sessionItem) {
            this.set('session', sessionItem);
            this.set('client', this.get('session.client'));
        },

        // Способы фильтрации.
        filterByDateAndModel(selectedDate, selectedBicycleId) {
            this.store.query('session', 
            { giveDate: selectedDate, bicycleId: selectedBicycleId } ).then((result) =>
                this.set('sessionList', result) );
        },

        filterByDate(selectedDate) {
            this.store.query('session', { giveDate: selectedDate} ).then((result) =>
                this.set('sessionList', result));
        },

        filterByModel(selectedBicycleId) {
            this.store.query('session', { bicycleId: selectedBicycleId } ).then((result) =>
                this.set('sessionList', result));
        },

        // Сохранение изменений в бэкэнд.
        applyChanges(ids, giveDate, returnDate) {
            let bicycle = this.get('model.bicycle').find( (item) => 
                item.id == ids.bicycleId
            );
            let employeeGive = this.get('model.employee').find( (item) => 
                item.id == ids.empGiveId
            );
            let employeeTake = this.get('model.employee').find( (item) => 
                item.id == ids.empTakeId
            );
            let startPoint = this.get('model.point').find( (item) => 
                item.id == ids.startPointId
            );
            let endPoint = this.get('model.point').find( (item) => 
                item.id == ids.endPointId
            );
            this.store.findRecord('session', this.get('session.id')).then( (session) => {
                session.set('bicycle', bicycle);
                session.set('client', this.get('client'));
                session.set('employeeGive', employeeGive);
                session.set('employeeTake', employeeTake);
                session.set('giveDate', new Date(giveDate));
                session.set('returnDate', new Date(returnDate));
                session.set('startPoint', startPoint);
                session.set('endPoint', endPoint);
                session.set('status', this.get('session.status'));
                session.set('cost', this.get('session.cost'));
                session.save().then( () =>
                    alert('Данные успешно сохранены')
                );
            })
            .catch(error => alert(`Ошибка сохранения данных: ${error}`));
            
        }
    }
});