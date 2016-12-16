'use strict';

const Code = require('code');   // assertion library
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const experiment = lab.experiment;
const test = lab.test;
const expect = Code.expect;

const Sut = require('../');

experiment('package', () => {

    test('should return an array of strings', (done) => {

        expect(Sut).to.exist().and.be.an.array();

        return done();
    });
});
