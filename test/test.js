'use strict';

let expect = require('chai').expect;
let index = require('../index');

describe('test', () => {
    it('Should return string', () => {
        let result = index.getWord('pants');
        console.log(typeof result);
        expect(result).instanceOf(String);
    });
})