import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        applyChanges(id, address) {
            this.store.findRecord('point', id).then( (record) => {
                record.set('address', address);
                record.save().then( () =>
                alert('Данные успешно сохранены') );
            })
            .catch(error => alert(`Ошибка сохранения данных: ${error}`));
        }
    }
});
