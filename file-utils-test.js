import * as assert from 'assert';
import { expect } from 'chai';
import * as fu from './file-utils.js';
import {sep} from 'path';

describe('ensure file-utils function as expected', ()=> {
    context('ensure filesize returns expected', () => {
        it ('should return correct filesize', async () => {
            const actualFileSize = await fu.fileSize('test-content' + sep + 'lorem-epsom-do-not-change.txt');
            assert.equal(actualFileSize, 3862);
        });
    })

    context('ensure readPath returns expected', () => {
        it ('should return correct count of items', async () => {
            const items = await fu.readPath('test-content' + sep + 'do-not-change');            
            console.log(items);
            assert.equal(items.length, 3);
        });
    })


    context('ensure dirSize returns expected', () => {
        it ('should return correct dirSize', async () => {
            const items = await fu.readPath('test-content' + sep + 'do-not-change');            
            const actualDirSize = await fu.dirSize(items);
            assert.equal(actualDirSize, 100518);
        });
    })

})