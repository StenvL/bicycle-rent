import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        applyChanges(id, fullname, position) {
            this.store.findRecord('employee', id).then( (record) => {
                record.set('fullName', fullname);
                record.set('position', position);
                record.save().then( () =>
                alert('Данные успешно сохранены') );
            })
            .catch(error => alert(`Ошибка сохранения данных: ${error}`));
        }
    }
});
