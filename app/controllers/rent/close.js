import Ember from 'ember';

export default Ember.Controller.extend({  

    actions: {
        closeSession(sessionId, employeeId, pointId) {
            this.store.findRecord('session', sessionId).then( (record) => {
                record.set('employeeTake', employeeId);
                record.set('endPoint', pointId);
                record.set('returnDate', new Date());
                record.set('status', 'Закрыта');
                record.set('cost', 200);
                record.save().then( () => {
                    alert('Данные успешно сохранены'); 
                    this.send("statusChanged");    
                    document.getElementById('sessionsList').selectedIndex = 0;      
                });
            })
            .catch(error => alert(`Ошибка при сохранении данных: ${error}`) );
        }
    }

});
