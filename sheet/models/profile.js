"use strict";

function Profile() {
	var self = this;

	self.characterName =  ko.observable('');
	self.playerName = ko.observable('');
	self.race = ko.observable('');
	self.religion = ko.observable('');
	self.alignment = ko.observable('');
	self.typeClass = ko.observable('');
	self.gender = ko.observable('');
	self.age = ko.observable('');
	self.level = ko.observable('');
	self.exp = ko.observable('');
	
	//Public Methods

	self.clear = function() {
		self.characterName('');
		self.playerName('');
		self.race('');
		self.religion('');
		self.typeClass('');
		self.alignment('');
		self.gender('');
		self.age('');
		self.level('1');
		self.exp('0');
	};
	
	self.importValues = function(values) {
		self.characterName(values.characterName);
		self.playerName(values.playerName);
		self.race(values.race);
		self.religion(values.religion);
		self.typeClass(values.typeClass);
		self.alignment(values.alignment);
		self.gender(values.gender);		
		self.age(values.age);
		self.level(values.level);
		self.exp(values.exp);
	};
	
	self.exportValues = function() {
		return {
			characterName: self.characterName(), 
			playerName: self.playerName(), 
			race: self.race(), 
			religion: self.religion(), 
			typeClass: self.typeClass(), 
			alignment: self.alignment(), 
			gender: self.gender(),
			age: self.age(),
			level: self.level(),
			exp: self.exp()
		}
	};
};