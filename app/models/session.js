import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    giveDate: DS.attr('date'),
    returnDate: DS.attr('date'),
    cost: DS.attr('number'),
    status: DS.attr('string'),
    startPoint: DS.attr('number'),
    endPoint: DS.attr('number'),
    bicycle: DS.attr('number'),
    employeeGive: DS.attr('number'),
    employeeTake: DS.attr('number'),
    client: DS.attr('number'),
});
