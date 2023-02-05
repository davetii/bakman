import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as fu from './file-utils.js';

async function calcPathsFileSize(path) {
    const items = await fu.readPath(path);
    const promise = fu.dirSize(items);
    promise.then((data) => console.log("data: " + data));
}

async function displayPath(path) {
    const items = await fu.readPath(path);
    console.log(items);
}

async function readFileSize(path) {
    const data = await fu.fileSize(path);
    console.log(data);
}

async function readFileStats(path) {
    const data = await fu.fileStats(path);
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
        readFileSize(argv.source);
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

