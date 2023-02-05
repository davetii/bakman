import * as assert from 'assert';
import { expect } from 'chai';
import * as fu from './file-utils.js';
import {sep} from 'path';

describe('ensure file-utils function as expected', ()=> {
    context('ensure filesize returns expected', () => {
        it ('should return fileisize', async () => {
            const actualFileSize = await fu.fileSize('test-content' + sep + 'lorem-epsom-do-not-change.txt');
            assert.equal(actualFileSize, 3862);
        })
    })
})