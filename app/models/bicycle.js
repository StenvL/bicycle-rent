import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    model: DS.attr('string'),
    description: DS.attr('string'),
    isGiven: DS.attr('boolean')
});
