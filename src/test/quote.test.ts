import test from 'node:test';
import { expect } from 'chai';
import { quotes as Sut } from 'blacksun1-quotes';

test('should return an array of strings', () => {
    expect(Sut).to.be.an('array').that.is.not.empty;
});
