import Ember from 'ember';

export default Ember.Controller.extend({  

    actions: {
        closeSession(sessionId, empId, pointId) {
            let empTake = this.get('model.employee').find( (item) => item.id === empId);
            let point = this.get('model.point').find( (item) => item.id === pointId);

            this.store.findRecord('session', sessionId).then( (session) => {
                session.set('employeeTake', empTake);
                session.set('endPoint', point);
                session.set('returnDate', new Date());
                session.set('status', 'Закрыта');
                session.set('cost', 200); 
                this.store.findRecord('bicycle', session.get('bicycle.id')).then( (bicycle) => {
                    bicycle.set('isGiven', false);
                    bicycle.save();
                });  
                session.save()
                .then( () => {
                    alert('Данные успешно сохранены'); 
                    this.send("statusChanged");    
                    document.getElementById('sessionsList').selectedIndex = 
                    document.getElementById('employeesList').selectedIndex =
                    document.getElementById('pointsList').selectedIndex = 0;
                })
                .catch(error => alert(`Ошибка при сохранении данных: ${error}`) );
            });
        }
    }
});
