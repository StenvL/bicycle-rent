export default function(server) {
    server.create('employee', { fullName: 'Басков Николай Евгеньевич', position: 'Директор'});
    server.create('employee', { fullName: 'Петров Иван Сидоров', position: 'Менеджер'});
    server.create('employee', { fullName: 'Никаноров Никанор Петрович', position: 'Менеджер'});
    server.create('employee', { fullName: 'Андреев Петр Николаевич', position: 'Менеджер'});

    server.create('bicycle', { model: 'Stels', description: 'Хороший велосипед для шоссе', isGiven: false});
    server.create('bicycle', { model: 'Forward', description: 'Хороший велосипед для бездорожья', isGiven: false});
    server.create('bicycle', { model: 'Rock Machine', description: 'Хороший велосипед для всего', isGiven: false});
    server.create('bicycle', { model: 'Школьник', description: 'Хороший детский велосипед', isGiven: false});

    server.create('client', { fullName: 'Васечкин Василий Васильевич', documentData: 'Паспорт 2134 423151'});
    server.create('client', { fullName: 'Петров Петр Петрович', documentData: 'Паспорт 2314 543214'});
    server.create('client', { fullName: 'Андреев Андрей Андреевич', documentData: 'Права 12314312'});
    server.create('client', { fullName: 'Николаев Николай Николаевич', documentData: 'Паспорт 1324 123423'});

    server.create('point', { address: 'Пушкина 1' });
    server.create('point', { address: 'Эспланада' });
    server.create('point', { address: 'Красная площадь' });
}
