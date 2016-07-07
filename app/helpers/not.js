import Ember from 'ember';

export function not(params/*, hash*/) {
    var newArr = params.map( (item) => !item );
    return !newArr.some( (item) => item === false );
}

export default Ember.Helper.helper(not);
