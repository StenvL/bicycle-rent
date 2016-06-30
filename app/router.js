import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route('rent', function() {
        this.route('open');
        this.route('close');
        this.route('edit');
    });

    this.route('stats', function() {    
        this.route('average') 
    });

    this.route('admin', function() {
        this.route('add-bicycle');
        this.route('edit-bicycle');
        this.route('del-bicycle');

        this.route('add-employee');
        this.route('edit-employee');
        this.route('del-employee');

        this.route('add-client');
        this.route('edit-client');
        this.route('del-client');

        this.route('add-point');
        this.route('edit-point');
        this.route('del-point');
    });   
});

export default Router;
