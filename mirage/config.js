export default function() {

    this.get('/employees');
    this.get('/employees/:id');
    this.post('/employees');
    this.del('/employees/:id');
    this.patch('/employees/:id');

//------------------------------------------------------------------------------------------------------------------------

    this.get('/bicycles/', (db, request) => {
        if (request.queryParams.isGiven !== undefined) {
            return db.bicycles.where( (bicycle) => 
                bicycle.isGiven.toString() == request.queryParams.isGiven
            );
        }
        else { return db.bicycles.all(); }
    });

    this.get('/bicycles/:id')
    this.post('/bicycles');
    this.del('/bicycles/:id');
    this.patch('/bicycles/:id');


//------------------------------------------------------------------------------------------------------------------------

    this.get('/points');
    this.get('/points/:id');
    this.post('/points');
    this.del('/points/:id');
    this.patch('/points/:id');


//------------------------------------------------------------------------------------------------------------------------

    this.get('/clients', (db, request) => {
        if (request.queryParams.fullName !== undefined) {
            return db.clients.where( (client) => 
                client.fullName.toLowerCase().indexOf(request.queryParams.fullName.toLowerCase()) !== -1 );
        } 
        else {
            return db.clients.all();
        }    
    });
    this.get('/clients/:id');
    this.post('/clients');
    this.del('/clients/:id');
    this.patch('/clients/:id');

//------------------------------------------------------------------------------------------------------------------------

    this.get('/sessions', (db, request) => {
        let params = request.queryParams;
        // Поиск по статусу (для отображения при закрытии сессии).
        if (params.status !== undefined) {
            return db.sessions.where( (session) =>  session.status.toLowerCase() == params.status.toLowerCase() );
        } 
        
        // Фильтр для среднего времени по точкам.
        else if (params.bicycleId !== undefined && params.startPointId !== undefined) {
            return db.sessions.where( (session) => 
                session.bicycleId == params.bicycleId && 
                session.startPointId == params.startPointId && 
                session.status == "Закрыта");
        }

        // Фильтры при редактировании и просмотре.
        else if (params.bicycleId !== undefined && params.giveDate !== undefined) {
            return db.sessions.where( (session) => 
                session.bicycleId == params.bicycleId && 
                session.giveDate.split('T')[0] == params.giveDate );
        }

        else if (params.giveDate !== undefined) {
            return db.sessions.where( (session) => 
                session.giveDate.split('T')[0] == params.giveDate );
        }

        else if (params.bicycleId !== undefined) {
            return db.sessions.where( (session) => session.bicycleId == params.bicycleId );
        }
        
        // В остальных случаях
        else {
            return db.sessions.all();
        }
    });

    this.get('/sessions/:id');
    this.post('/sessions');
    this.patch('/sessions/:id');

//------------------------------------------------------------------------------------------------------------------------   
}