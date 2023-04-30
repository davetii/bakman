import * as assert from 'assert';
import { expect } from 'chai';
import * as su from '../bakman-utils.js';

describe('ensure String-utils function as expected', ()=> {
    context('ensure containsString works', () => {
        it ('should return expected', async () => {
            assert.equal(su.containsString(['andy', 'bob', 'caldwell'], 'bob'), true);
        });

        it ('should handle empty', async () => {
            assert.equal(su.containsString([], 'bob'), false);
        });

        it ('should handle not a list empty expected', async () => {
            assert.equal(su.containsString({}, 'bob'), false);
        });

        it ('should handle null', async () => {
            assert.equal(su.containsString(null, 'bob'), false);
        });
    })

    context('ensure diffList works', () => {
        it ('should return expected', async () => {
            const list1 = ['andy', 'bob', 'caldwell', 'dirk'];
            const list2 = ['dirk', 'bob', 'andy', 'gary'];
            const list3 = await su.diffList(list1, list2);
            console.log(list3);
            assert.equal(list3.length, 1);
        });
    })
})