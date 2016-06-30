import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    giveDate: DS.attr('date'),
    returnDate: DS.attr('date'),
    cost: DS.attr('number'),
    status: DS.attr('string'),
    startPoint: DS.attr('string'),
    endPoint: DS.attr('string'),
    bicycle: DS.attr('string'),
    employeeGive: DS.attr('string'),
    employeeTake: DS.attr('string'),
    client: DS.attr('string'),
});
