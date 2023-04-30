import * as assert from 'assert';
import * as fu from '../file-utils.js';
import {sep, resolve} from 'path';
import * as su from '../bakman-utils.js';

describe('ensure file-utils function as expected', ()=> {
    
    context('ensure fileExists returns expected', () => {
        it ('should return false when file does not exist', async () => {
            const fullPath = resolve('.') + sep + 'test-content' + sep + 'missing-file.txt';
            const result = await fu.fileExists(fullPath);
            assert.equal(result, false);
        });

        it ('should return true when file exists', async () => {
            const fullPath = resolve('.') + sep + 'test-content' + sep + 'lorem-epsom-do-not-change.txt';
            const result = await fu.fileExists(fullPath);
            assert.equal(result, true);
        });
    })
    
    
    context('ensure filesize returns expected', () => {
        it ('should return correct filesize', async () => {
            const fullPath = resolve('.') + sep + 'test-content' + sep + 'lorem-epsom-do-not-change.txt';
            const actualFileSize = await fu.fileSize(fullPath);
            assert.equal(actualFileSize, 3862);
        });
    })

    context('ensure readPath returns expected', () => {
        it ('should return correct count of items', async () => {
            const fullPath = resolve('.') + sep +  'test-content' + sep + 'do-not-change';
            const items = await fu.readPath(fullPath);
            assert.equal(items.length, 4);
        });
    })

    context('ensure getChildren returns expected', () => {
        it ('should return correct count of items', async () => {
            const fullPath = resolve('.') + sep +  'test-content' + sep + 'do-not-change';
            const items = await fu.getChildren(fullPath);
            assert.equal(items.length, 3);
        });
    })

    context('ensure dirSize returns expected', () => {
        it ('should return correct dirSize', async () => {
            const fullPath = resolve('.') + sep +  'test-content' + sep + 'do-not-change';
            const items = await fu.readPath(fullPath);            
            const actualDirSize = await fu.dirSize(items);
            assert.equal(actualDirSize, 100518);
        });
    })

    context('ensure getFileNames returns expected', () => {
        it ('should return correct fileNames', async () => {
            const fullPath = resolve('.') + sep +  'test-content' + sep + 'do-not-change';
            const items = await fu.getChildren(fullPath);
            const fileNames = await fu.getFileNames(items);
            assert.equal(su.containsString(fileNames, 'lorem-epsom-do-not-change1.txt'), true);
            assert.equal(su.containsString(fileNames, 'lorem-epsom-do-not-change2.txt'), true);
            assert.equal(su.containsString(fileNames, 'lorem-epsom-do-not-change3.txt'), true);
            assert.equal(su.containsString(fileNames, 'bob.txt'), false);
        });
    })

    
    
})