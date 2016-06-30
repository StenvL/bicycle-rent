export default function() {
    this.get('/employees', function() {
        return {
            data: [{
                type: 'employees',
                id: 1,
                attributes: {
                    fullName: 'Петров Андрей Игоревич',
                    position: 'Менеджер',
                }
            }, {
                type: 'employees',
                id: 2,
                attributes: {
                    fullName: 'Иванова Анна Николаена',
                    position: 'Менеджер',
                }
            }, {
                type: 'employees',
                id: 3,
                attributes: {
                    fullName: 'Петрова Вероника Владимировна',
                    position: 'Менеджер',
                }
            }, {
                type: 'employees',
                id: 4,
                attributes: {
                    fullName: 'Сидорова Мария Петровна',
                    position: 'Директор',
                }
            }]
        }
    });

    this.get('/bicycles', function(db, request) {
        let bicycles = [{
            type: 'bicycles',
            id: 1,
            attributes: {
                model: 'Stels 1',
                description: 'Хороший велосипед для шоссе.',
            }
        }, {
            type: 'bicycles',
            id: 2,
            attributes: {
                model: 'Stels 2',
                description: 'Лучший велосипед для шоссе.',
            }
        }, {
            type: 'bicycles',
            id: 3,
            attributes: {
                model: 'Forward 1',
                description: 'Хороший велосипед для бездорожья.',
            }
        }, {
            type: 'bicycles',
            id: 4,
            attributes: {
                model: 'Школьник',
                description: 'Хороший детский велосипед.',
            }
        }];
    
        if (request.queryParams.model !== undefined) {
            let record = (bicycles.filter( (i) => 
                i.attributes.model.toLowerCase() == request.queryParams.model.toLowerCase()) );
            return { data: record[0] };
        }
        else {
            return { data: bicycles }
        }
    });

    this.get('/points', function() {
        return {
            data: [{
                type: 'points',
                id: 1,
                attributes: {
                    address: 'Пушкина 1',
                }
            }, {
                type: 'points',
                id: 2,
                attributes: {
                    address: 'Екатерининская 2',
                }
            }, {
                type: 'points',
                id: 3,
                attributes: {
                    address: 'Краснова 3',
                }
            }]
        }
    });

    this.get('/clients', function() {
        return {
            data: [{
                type: 'clients',
                id: 1,
                attributes: {
                    fullName: 'Николаева Ольга Владимировна',
                    documentData: 'Паспорт 5710 892345'
                }
            }, {
                type: 'clients',
                id: 2,
                attributes: {
                    fullName: 'Петров Василий Евгеньевич',
                    documentData: 'Паспорт 5704 351364'
                }
            }, {
                type: 'clients',
                id: 3,
                attributes: {
                    fullName: 'Сидоров Олег Валерьевич',
                    documentData: 'Паспорт 5810 123734'
                }
            }]
        }
    });

    this.get('/sessions', function(db, request) {
        let sessions = [{
            type: 'sessions',
            id: 1,
            attributes: {
                giveDate: '2016-06-10T14:20',
                returnDate: '2016-06-10T15:20',
                cost: 200,
                status: 'Закрыта',
                startPoint: 1,
                endPoint: 1,
                bicycle: 1,
                employeeGive: 2,
                employeeTake: 2,
                client: 1,     
            }
        }, {
            type: 'sessions',
            id: 2,
            attributes: {
                giveDate: '2016-06-11T14:20',
                returnDate: '2016-06-11T15:20',
                cost: 200,
                status: 'Закрыта',
                startPoint: 1,
                endPoint: 2,
                bicycle: 2,
                employeeGive: 4,
                employeeTake: 4,
                client: 2,
            }
        }, {
            type: 'sessions',
            id: 3,
            attributes: {
                giveDate: '2016-06-11T14:20',
                returnDate: '2016-06-11T16:20',
                cost: 200,
                status: 'Закрыта',
                startPoint: 3,
                endPoint: 3,
                bicycle: 4,
                employeeGive: 1,
                employeeTake: 1,
                client: 3,
            }
        }, {
            type: 'sessions',
            id: 4,
            attributes: {
                giveDate: '2016-06-11T14:20',
                returnDate: undefined,
                cost: undefined,
                status: 'Ожидается оплата',
                startPoint: 2,
                endPoint: undefined,
                bicycle: 3,
                employeeGive: 1,
                employeeTake: undefined,
                client: 1,
            }
        }, {
            type: 'sessions',
            id: 5,
            attributes: {
                giveDate: '2016-06-10T16:20',
                returnDate: '2016-06-10T17:20',
                cost: 100,
                status: 'Закрыта',
                startPoint: 3,
                endPoint: 1,
                bicycle: 3,
                employeeGive: 3,
                employeeTake: 2,
                client: 2,
            } 
        }];

        // Поиск по статусу (для отображения при закрытии).
        if (request.queryParams.status !== undefined) {
            let filteredSessions = sessions.filter(function(i) {
                return i.attributes.status.toLowerCase() == request.queryParams.status.toLowerCase();
            });
            return { data: filteredSessions };
        } 
        
            // Фильтры при редактировании.
        else if (request.queryParams.bicycle !== undefined && request.queryParams.giveDate !== undefined) {
            let filteredSessions = sessions.filter(function(i) {
                return i.attributes.bicycle == request.queryParams.bicycle && 
                    i.attributes.giveDate.split('T')[0] == request.queryParams.giveDate;
            });
            return { data: filteredSessions };
        }
        else if (request.queryParams.giveDate !== undefined) {
            let filteredSessions = sessions.filter(function(i) {
                return i.attributes.giveDate.split('T')[0] == request.queryParams.giveDate;
            });
            return { data: filteredSessions };
        }

        else if (request.queryParams.bicycle !== undefined) {
            let filteredSessions = sessions.filter(function(i) {
                return i.attributes.bicycle == request.queryParams.bicycle;
            });
            return { data: filteredSessions };
        }
        
        else {
            return { data: ["No data"] };
        }
    });

    this.post('/sessions', function(db, request) {
        return JSON.parse(request.requestBody);
    }) 
}