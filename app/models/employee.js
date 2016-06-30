import DS from 'ember-data';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
    fullName: DS.attr('string'),
    position: DS.attr('string'),

    getShortName: Ember.computed('fullName', function() {
        let nameSplit = Ember.String.w(this.get('fullName'));
        return `${nameSplit[1]} ${nameSplit[0]}`;
    })
});
