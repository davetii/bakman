import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import {readPath, fileSize, dirSize, fileStats} from './util.js';

async function calcPathsFileSize(path) {
    const items = await dirSize(path);
    const promise = calcSize(items);
    promise.then((data) => console.log("data: " + data));
}

async function displayPath(path) {
    const items = await readPath(path);
    console.log(items);
}

async function readFileSize(path) {
    const data = await fileSize(path);
    console.log(data);
}

async function readFileStats(path) {
    const data = await fileStats(path);
    console.log(data);
}



yargs(hideBin(process.argv))
  
  .command(
    'readpath', 
    'read the path', 
    {}, 
    (argv) => { displayPath(argv.source);
  })

  .command(
    'pathsize', 
    'read size of files in path', 
    {}, 
    (argv) => { 
        calcPathsFileSize(argv.source);
  })

  .command(
    'filesize', 
    'read file size', 
    {}, 
    (argv) => { 
        console.log(readFileSize(argv.source));
  })

  .command(
    'filestats', 
    'read file size', 
    {}, 
    (argv) => { 
        console.log(readFileStats(argv.source));
  })

  .demandCommand(1)
  .parse();

