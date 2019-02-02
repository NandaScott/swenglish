'use strict';

let expect = require('chai').expect;
let test = require('../index');

describe('#test', () => {
    it('Should return true', () => {
        let result = test.testFunc();
        expect(result).to.equal(true);
    });
})