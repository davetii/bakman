import * as assert from 'assert';
import { expect } from 'chai';
import * as su from './bakman-utils.js';

describe('ensure String-utils function as expected', ()=> {
    context('ensure containsString works', () => {
        it ('should return expected', async () => {
            assert.equal(su.containsString(['andy', 'bob', 'caldwell'], 'bob'), true);
            assert.equal(su.containsString([], 'bob'), false);
            assert.equal(su.containsString({}, 'bob'), false);
            assert.equal(su.containsString(null, 'bob'), false);
        });
    })
})