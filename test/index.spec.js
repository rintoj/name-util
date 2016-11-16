"use strict";
var expect = require('chai').expect;
var nameUtil = require('../dist/index');

describe('util-name', function() {

    it('toDashedName to be defined', function() {
        expect(nameUtil.toDashedName).to.be.not.defined;
    });

    it('toDashedName should convert any name to dashed name', function() {
        expect(nameUtil.toDashedName('happyBirthday-to-You')).to.be.equal('happy-birthday-to-you');
        expect(nameUtil.toDashedName('HappyBirthday-to-You----')).to.be.equal('happy-birthday-to-you');
        expect(nameUtil.toDashedName('HappyBirthday_to-You----')).to.be.equal('happy-birthday-to-you');
        expect(nameUtil.toDashedName('HappyBirthday_to-You -')).to.be.equal('happy-birthday-to-you');
        expect(nameUtil.toDashedName('HappyBirthday_to-You_')).to.be.equal('happy-birthday-to-you');
        expect(nameUtil.toDashedName('HappyBirthdayToYou ')).to.be.equal('happy-birthday-to-you');
        expect(nameUtil.toDashedName('happy Birthday   to You ')).to.be.equal('happy-birthday-to-you');
        expect(nameUtil.toDashedName('  happy birthday to you   ')).to.be.equal('happy-birthday-to-you');
        expect(nameUtil.toDashedName('HappyBirthdayToYou')).to.be.equal('happy-birthday-to-you');
        expect(nameUtil.toDashedName('$HappyBirthdayToYou')).to.be.equal('$-happy-birthday-to-you');
    });

    it('toCamelCase to be defined', function() {
        expect(nameUtil.toCamelCase).to.be.not.defined;
    });

    it('toCamelCase should convert any name to camel-case name', function() {
        expect(nameUtil.toCamelCase('happyBirthday-to-You')).to.be.equal('happyBirthdayToYou');
        expect(nameUtil.toCamelCase('HappyBirthday-to-You----')).to.be.equal('happyBirthdayToYou');
        expect(nameUtil.toCamelCase('HappyBirthday_to-You----')).to.be.equal('happyBirthdayToYou');
        expect(nameUtil.toCamelCase('HappyBirthday_to-You -')).to.be.equal('happyBirthdayToYou');
        expect(nameUtil.toCamelCase('HappyBirthday_to-You_')).to.be.equal('happyBirthdayToYou');
        expect(nameUtil.toCamelCase('HappyBirthdayToYou ')).to.be.equal('happyBirthdayToYou');
        expect(nameUtil.toCamelCase('happy Birthday   to You ')).to.be.equal('happyBirthdayToYou');
        expect(nameUtil.toCamelCase('  happy birthday to you   ')).to.be.equal('happyBirthdayToYou');
        expect(nameUtil.toCamelCase('$happyBirthdayToYou')).to.be.equal('$happyBirthdayToYou');
    });

    it('toClassName to be defined', function() {
        expect(nameUtil.toClassName).to.be.not.defined;
    });

    it('toClassName should convert any name to class name', function() {
        expect(nameUtil.toClassName('happyBirthday-to-You')).to.be.equal('HappyBirthdayToYou');
        expect(nameUtil.toClassName('HappyBirthday-to-You----')).to.be.equal('HappyBirthdayToYou');
        expect(nameUtil.toClassName('HappyBirthday_to-You----')).to.be.equal('HappyBirthdayToYou');
        expect(nameUtil.toClassName('HappyBirthday_to-You -')).to.be.equal('HappyBirthdayToYou');
        expect(nameUtil.toClassName('_HappyBirthday_to-You_')).to.be.equal('HappyBirthdayToYou');
        expect(nameUtil.toClassName('HappyBirthdayToYou ')).to.be.equal('HappyBirthdayToYou');
        expect(nameUtil.toClassName('happy Birthday   to You ')).to.be.equal('HappyBirthdayToYou');
        expect(nameUtil.toClassName('  happy birthday to you   ')).to.be.equal('HappyBirthdayToYou');
        expect(nameUtil.toClassName('HappyBirthdayToYou')).to.be.equal('HappyBirthdayToYou')
        expect(nameUtil.toClassName('HappyBirthdayToYou')).to.be.equal('HappyBirthdayToYou');
        expect(nameUtil.toClassName('$happyBirthdayToYou')).to.be.equal('$happyBirthdayToYou');
    });

    it('capitalize to be defined', function() {
        expect(nameUtil.capitalize).to.be.not.defined;
    });

    it('capitalize should convert any name to capitalized name', function() {
        expect(nameUtil.capitalize('happyBirthday-to-You')).to.be.equal('HappyBirthday-to-You');
        expect(nameUtil.capitalize('HappyBirthday-to-You----')).to.be.equal('HappyBirthday-to-You----');
        expect(nameUtil.capitalize('HappyBirthdayToYou')).to.be.equal('HappyBirthdayToYou');
        expect(nameUtil.capitalize('$happyBirthdayToYou')).to.be.equal('$happyBirthdayToYou');
    });

});