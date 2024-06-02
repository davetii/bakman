import fsPromises from 'fs/promises';
import fs from 'fs';
import klaw from 'klaw';
import path from 'path';
//import {readdir} from 'fs/promises'
//import {join} from 'path'

//const dirTree = require("directory-tree");

export async function fileExists (path) {
  try {
    await fs.promises.access(path);
    return true;
  } catch (error) {
    return false;
  }
}

export async function fileSize (path) {  
    const stats = await fsPromises.stat(path)
    return stats.size;
}

export async function fileStats (path) {  
  const stats = await fsPromises.stat(path)
  return stats;
}

export async function dirSize (items)  {
  var actions = items.map((i) => fileSize(i));
  return new Promise((resolve, reject) => {
    Promise.all(actions).then(items => 
      {resolve(items.reduce((a,b)=>a+b));}
    );
  });
}

export async function getFileNames (source)  {
  const items = [];
  source.forEach(element => {
    items.push(path.parse(element).name + path.parse(element).ext);
  });
  return items;
}

export async function getDirTree (source)  {
  console.log('getDirTree');
  const tree = dirTree.directoryTree(source);
  //return tree;
}

export async function readPath(path)  {
  return new Promise((resolve, reject) => {
    const items = []
    klaw(path)
    .on('data', item => { items.push(item.path) })
    .on("end", () => resolve(items))
    .on("error", reject);
  });
}





export async function getChildren(path)  {
  return new Promise((resolve, reject) => {
    const items = []
    klaw(path)
    .on('data', item => {
      if(item.path != path) { items.push(item.path) }
    })
    .on("end", () => resolve(items))
    .on("error", reject);
  });

}