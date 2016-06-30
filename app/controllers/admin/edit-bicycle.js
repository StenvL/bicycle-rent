import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        applyChanges(id, model, description) {
            this.store.findRecord('bicycle', id).then( (record) => {
                record.set('model', model);
                record.set('description', description);
                alert('Данные успешно сохранены');
            })
            .catch(error => alert(`Ошибка сохранения данных: ${error}`));
        }
    }
});
