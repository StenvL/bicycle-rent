import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    giveDate: DS.attr('date'),
    returnDate: DS.attr('date'),
    cost: DS.attr('number'),
    status: DS.attr('string'),
    startPoint: DS.belongsTo('point', { inverse: null }),
    endPoint: DS.belongsTo('point', { inverse: null }),
    bicycle: DS.belongsTo('bicycle'),
    employeeGive: DS.belongsTo('employee', { inverse: null }),
    employeeTake: DS.belongsTo('employee', { inverse: null }),
    client: DS.belongsTo('client')
});
