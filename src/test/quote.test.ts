import test from 'node:test';
import { expect } from 'chai';
import Sut from '../index.js';

test('should return an array of strings', () => {
    expect(Sut).to.be.an('array').that.is.not.empty;
});
