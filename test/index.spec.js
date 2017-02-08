"use strict";
var expect = require('chai').expect;
var nameUtil = require('../dist/index');


describe('util-name', function() {

    describe('toDashedName', function() {

        it('should convert "happyBirthday-to-You" to "happy-birthday-to-you"', function() {
            expect(nameUtil.toDashedName('happyBirthday-to-You')).to.be.equal('happy-birthday-to-you');
        });

        it('should convert "HappyBirthday-to-You----" to "happy-birthday-to-you"', function() {
            expect(nameUtil.toDashedName('HappyBirthday-to-You----')).to.be.equal('happy-birthday-to-you');
        });

        it('should convert "HappyBirthday_to-You----" to "happy-birthday-to-you"', function() {
            expect(nameUtil.toDashedName('HappyBirthday_to-You----')).to.be.equal('happy-birthday-to-you');
        });

        it('should convert "HappyBirthday_to-You -" to "happy-birthday-to-you"', function() {
            expect(nameUtil.toDashedName('HappyBirthday_to-You -')).to.be.equal('happy-birthday-to-you');
        });

        it('should convert "HappyBirthday_to-You_" to "happy-birthday-to-you"', function() {
            expect(nameUtil.toDashedName('HappyBirthday_to-You_')).to.be.equal('happy-birthday-to-you');
        });

        it('should convert "HappyBirthdayToYou " to "happy-birthday-to-you"', function() {
            expect(nameUtil.toDashedName('HappyBirthdayToYou ')).to.be.equal('happy-birthday-to-you');
        });

        it('should convert "happy Birthday   to You " to "happy-birthday-to-you"', function() {
            expect(nameUtil.toDashedName('happy Birthday   to You ')).to.be.equal('happy-birthday-to-you');
        });

        it('should convert "  happy birthday to you   " to "happy-birthday-to-you"', function() {
            expect(nameUtil.toDashedName('  happy birthday to you   ')).to.be.equal('happy-birthday-to-you');
        });

        it('should convert "HappyBirthdayToYou" to "happy-birthday-to-you"', function() {
            expect(nameUtil.toDashedName('HappyBirthdayToYou')).to.be.equal('happy-birthday-to-you');
        });

        it('should convert "$HappyBirthdayToYou" to "happy-birthday-to-you"', function() {
            expect(nameUtil.toDashedName('$HappyBirthdayToYou')).to.be.equal('$-happy-birthday-to-you');
        });
    });

    describe('toCamelCase', function() {

        it('should convert "happyBirthday-to-You" to "happyBirthdayToYou"', function() {
            expect(nameUtil.toCamelCase('happyBirthday-to-You')).to.be.equal('happyBirthdayToYou');
        });

        it('should convert "HappyBirthday-to-You----" to "happyBirthdayToYou"', function() {
            expect(nameUtil.toCamelCase('HappyBirthday-to-You----')).to.be.equal('happyBirthdayToYou');
        });

        it('should convert "HappyBirthday_to-You----" to "happyBirthdayToYou"', function() {
            expect(nameUtil.toCamelCase('HappyBirthday_to-You----')).to.be.equal('happyBirthdayToYou');
        });

        it('should convert "HappyBirthday_to-You -" to "happyBirthdayToYou"', function() {
            expect(nameUtil.toCamelCase('HappyBirthday_to-You -')).to.be.equal('happyBirthdayToYou');
        });

        it('should convert "HappyBirthday_to-You_" to "happyBirthdayToYou"', function() {
            expect(nameUtil.toCamelCase('HappyBirthday_to-You_')).to.be.equal('happyBirthdayToYou');
        });

        it('should convert "HappyBirthdayToYou " to "happyBirthdayToYou"', function() {
            expect(nameUtil.toCamelCase('HappyBirthdayToYou ')).to.be.equal('happyBirthdayToYou');
        });

        it('should convert "happy Birthday   to You " to "happyBirthdayToYou"', function() {
            expect(nameUtil.toCamelCase('happy Birthday   to You ')).to.be.equal('happyBirthdayToYou');
        });

        it('should convert "  happy birthday to you   " to "happyBirthdayToYou"', function() {
            expect(nameUtil.toCamelCase('  happy birthday to you   ')).to.be.equal('happyBirthdayToYou');
        });

        it('should convert "$happyBirthdayToYou" to "happyBirthdayToYou"', function() {
            expect(nameUtil.toCamelCase('$happyBirthdayToYou')).to.be.equal('$happyBirthdayToYou');
        });

    });

    describe('toClassName', function() {

        it('should convert "happyBirthday-to-You" to "HappyBirthdayToYou"', function() {
            expect(nameUtil.toClassName('happyBirthday-to-You')).to.be.equal('HappyBirthdayToYou');
        });

        it('should convert "HappyBirthday-to-You----" to "HappyBirthdayToYou"', function() {
            expect(nameUtil.toClassName('HappyBirthday-to-You----')).to.be.equal('HappyBirthdayToYou');
        });

        it('should convert "HappyBirthday_to-You----" to "HappyBirthdayToYou"', function() {
            expect(nameUtil.toClassName('HappyBirthday_to-You----')).to.be.equal('HappyBirthdayToYou');
        });

        it('should convert "HappyBirthday_to-You -" to "HappyBirthdayToYou"', function() {
            expect(nameUtil.toClassName('HappyBirthday_to-You -')).to.be.equal('HappyBirthdayToYou');
        });

        it('should convert "_HappyBirthday_to-You_" to "HappyBirthdayToYou"', function() {
            expect(nameUtil.toClassName('_HappyBirthday_to-You_')).to.be.equal('HappyBirthdayToYou');
        });

        it('should convert "HappyBirthdayToYou " to "HappyBirthdayToYou"', function() {
            expect(nameUtil.toClassName('HappyBirthdayToYou ')).to.be.equal('HappyBirthdayToYou');
        });

        it('should convert "happy Birthday   to You " to "HappyBirthdayToYou"', function() {
            expect(nameUtil.toClassName('happy Birthday   to You ')).to.be.equal('HappyBirthdayToYou');
        });

        it('should convert "  happy birthday to you   " to "HappyBirthdayToYou"', function() {
            expect(nameUtil.toClassName('  happy birthday to you   ')).to.be.equal('HappyBirthdayToYou');
        });

        it('should convert "HappyBirthdayToYo" to "HappyBirthdayToYou"', function() {
            expect(nameUtil.toClassName('HappyBirthdayToYou')).to.be.equal('HappyBirthdayToYou')
        });

        it('should convert "HappyBirthdayToYou" to "HappyBirthdayToYou"', function() {
            expect(nameUtil.toClassName('HappyBirthdayToYou')).to.be.equal('HappyBirthdayToYou');
        });

        it('should convert "HappyBirthdayToYou" to "HappyBirthdayToYou"', function() {
            expect(nameUtil.toClassName('page 1')).to.be.equal('Page1');
        });
    });

    describe('capitalize', function() {

        it('should convert "happyBirthday-to-You" to "HappyBirthday-to-You"', function() {
            expect(nameUtil.capitalize('happyBirthday-to-You')).to.be.equal('HappyBirthday-to-You');
        });

        it('should convert "  happyBirthday-to-You" to "HappyBirthday-to-You"', function() {
            expect(nameUtil.capitalize('  happyBirthday-to-You')).to.be.equal('HappyBirthday-to-You');
        });

        it('should convert "HappyBirthday-to-You" to "HappyBirthday-to-You"', function() {
            expect(nameUtil.capitalize('HappyBirthday-to-You----')).to.be.equal('HappyBirthday-to-You----');
        });

        it('should convert "HappyBirthdayToYou" to "HappyBirthdayToYou"', function() {
            expect(nameUtil.capitalize('HappyBirthdayToYou')).to.be.equal('HappyBirthdayToYou');
        });

        it('should convert "$happyBirthdayToYou" to "$happyBirthdayToYou"', function() {
            expect(nameUtil.capitalize('$happyBirthdayToYou')).to.be.equal('$happyBirthdayToYou');
        });

    });
});