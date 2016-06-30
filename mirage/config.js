export default function() {

    this.get('/employees');
    this.get('/employees/:id');
    this.post('/employees');
    this.del('/employees/:id');

//------------------------------------------------------------------------------------------------------------------------

    this.get('/bicycles/');
    this.get('/bicycles/:id')
    this.post('/bicycles');
    this.del('/bicycles/:id');

//------------------------------------------------------------------------------------------------------------------------

    this.get('/points');
    this.get('/points/:id');
    this.post('/points');
    this.del('/points/:id');

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

//------------------------------------------------------------------------------------------------------------------------

    this.get('/sessions', (db, request) => {
        let params = request.queryParams;
        // Поиск по статусу (для отображения при закрытии сессии).
        if (params.status !== undefined) {
            return db.sessions.where( (session) =>  session.status.toLowerCase() == params.status.toLowerCase() );
        } 
        
        // Фильтры при редактировании и просмотре.
        else if (params.bicycle !== undefined && params.giveDate !== undefined) {
            return db.sessions.where( (session) => 
                session.bicycle == params.bicycle && 
                session.giveDate.split('T')[0] == params.giveDate );
        }

        else if (params.bicycle !== undefined && params.startPoint !== undefined) {
            return db.sessions.where( (session) => 
                session.bicycle==params.bicycle && session.startPoint == params.startPoint
                && session.status == "Закрыта");
        }

        else if (params.giveDate !== undefined) {
            return db.sessions.where( (session) => 
                session.giveDate.split('T')[0] == params.giveDate );
        }

        else if (params.bicycle !== undefined) {
            return db.sessions.where( (session) => session.bicycle == params.bicycle );
        }
        
        // В остальных случаях
        else {
            return db.sessions.all();
        }
    });

    this.get('/sessions/:id');
    this.post('/sessions');
//------------------------------------------------------------------------------------------------------------------------

    
}