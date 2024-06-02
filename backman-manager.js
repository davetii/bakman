import {sep, resolve} from 'path';
import * as fu from './file-utils.js';
import { writeFile, readFile } from 'fs/promises'

let isInit = false;
let sourceContent = { paths : []};
let fullyPathedSourceFileName = "";

export async function init() {
    const approot = resolve('.');
    fullyPathedSourceFileName = approot + sep + defSourceFileName;
    console.log("Where am I? " + approot);
    // create source file name
    const isSourceFileExist = await fu.fileExists(fullyPathedSourceFileName);
    console.log("doesSourceFileExist? " + isSourceFileExist);
    if (!isSourceFileExist) {

       console.log("source file does not exist, create it");
       await writeFile(fullyPathedSourceFileName, JSON.stringify(sourceContent), 'utf8');

    } else {
        sourceContent = JSON.parse(await readFile(fullyPathedSourceFileName));
        console.log("read source file into JSON object");
        console.log(JSON.stringify(sourceContent));
    }
    isInit = true;
}

export async function addSource(s) {
    console.log("addPath");
    if (!isInit) {
        init();
    }

    const isValid = await fu.fileExists(s);
    if (isValid) {
        console.log("isValid");
        const items = await fu.readPath(s);
        const newPath = {path: s, items: items};
        sourceContent.paths.push(newPath);
        console.log(JSON.stringify(sourceContent));
        await writeFile(fullyPathedSourceFileName, JSON.stringify(sourceContent), 'utf8');
    }
    
}

export const defSourceFileName = "source.json";
export const targetDBFileName = "target.json";

