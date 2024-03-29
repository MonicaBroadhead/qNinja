'use strict';


// Module dependencies =========================================================
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// SR Shema ====================================================================
var SRSchema = new Schema({
	// general info
	sr_number: {
		type: String, 
		required: true, 
		index: { unique: true } 
	},
	sr_owner: { 
		type: String, 
		required: true, 
		uppercase: true 
	},
	status: { 
		type: String, 
		required: true 
	},
	organization: { 
		type: String, 
		required: true, 
		uppercase: true 
	},
	severity: { 
		type: String, 
		required: true 
	},
	high_value: Boolean,
	brief_description: String, 
	detailed_description: String, 
	last_act: String,
	support_program: String,
	support_group_routing: String,
	support_window: String,
	
	// contact info
	respond_via: {
		type: String, 
		required: true 
	},
	first_name: {
		type: String, 
		required: true 
	},
	last_name: {
		type: String, 
		required: true 
	},
	email_address: {
		type: String, 
		required: true 
	},
	phone_number: String, // keep in mind international numbers and extensions.
	contact_source: {
		type: String, 
		required: true 
	},
	on_site_phone: String,
	alt_contact_name: String,
	alt_contact_email: String,
	alt_contact_phone: String,
	account: String, // not available in srinfo-all

	// metadata
	created_ts: String,
	last_act_ts: String
//igor_assigned_at: Date

});

module.exports = mongoose.model('SR', SRSchema);


// validation ==================================================================
SRSchema.path('sr_number').validate(function (v) {
	return ( v.length === 11 );
}, 'The SR must be 11 digits long.');

SRSchema.path('organization').validate(function (v){
	return ( v === 'USA' || v === 'CANADA' || v === 'EMEA' || v === 'ASIAPAC');
}, 'Organization is not valid.');

SRSchema.path('severity').validate(function (v){
	return ( v === 'High' || v === 'Medium' || v === 'Low' || v === 'Critical' );
}, 'Severity is not valid.');


