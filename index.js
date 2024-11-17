import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import * as fu from './file-utils.js';
import * as bman from './bakman.js';

async function calcPathsFileSize(path) {
    const items = await fu.readPath(path);
    const promise = fu.dirSize(items);
    promise.then((data) => console.log("data: " + data));
}

async function displayPath(path, depth) {
    const items = await fu.readPath(path, depth);
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

async function startup() {
  bman.init();
}

async function addtosource(path) {
  console.log("addtosource");
  bman.addSource(path);
}

async function copyFile(srcPath, destPath) {
  console.log("copyfile");
  bman.fileCopy(srcPath, destPath)
}


yargs(hideBin(process.argv))
  
  .command(
    'readpath', 
    'read the path', 
    {}, 
    (argv) => { displayPath(argv.source, argv.depth);
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

  .command(
    'startup', 
    'init the app', 
    {}, 
    (argv) => { 
        startup();
  })

  .command(
    'addtosource', 
    'add path to source', 
    {}, 
    (argv) => { 
      addtosource(argv.source);
  })

  .command(
    'copyfile', 
    'Copy file from here to their', 
    {}, 
    (argv) => { 
      copyFile(argv.source, argv.target);
  })


  .demandCommand(1)
  .parse();

