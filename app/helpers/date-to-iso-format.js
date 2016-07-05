import Ember from 'ember';

export function dateToISOFormat(params/*, hash*/) {
    return new Date(params).toISOString().split('.')[0];
}

export default Ember.Helper.helper(dateToISOFormat);
