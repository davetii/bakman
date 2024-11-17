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
  return await fsPromises.stat(path);
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
  return dirTree.directoryTree(source);
}

export async function readPath(rootPath, depth)  {

  const options = {
    depthLimit: depth ? depth : 0
  };

  const tree = {
    name: path.basename(rootPath),
    type: 'd',
    children: []
  };

  // Keep track of all directories and their corresponding nodes in the tree
  const dirMap = new Map();
  dirMap.set(rootPath, tree);

  // Process each item in the directory
  const items = [];
  for await (const item of klaw(rootPath, options)) {
    items.push(item);
  }

  // Sort items so directories come before their contents
  items.sort((a, b) => a.path.localeCompare(b.path));

  // Process each item and build the tree
  for (const item of items) {
    const itemPath = item.path;
    const parentPath = path.dirname(itemPath);
    const isDirectory = item.stats.isDirectory();

    // Skip the root directory as it's already in the tree
    if (itemPath === rootPath) continue;

    const parentNode = dirMap.get(parentPath);
    if (!parentNode) {
      throw new Error(`Parent directory node not found for ${itemPath}`);
    }

    const node = {
      name: path.basename(itemPath),
      type: isDirectory ? 'd' : 'f'
    };

    if (isDirectory) {
      node.children = [];
      dirMap.set(itemPath, node);
    }

    parentNode.children.push(node);
  }

  return tree;
}

export function splitPathToArray(path) {
  // Split the path by directory separators (either '/' or '\')
  console.log("entering splitPathToArray");
  console.log(path);
  const pathArray = path.split(/[\\/]/).filter(Boolean);
  console.log(pathArray);
  return pathArray;
}

export async function writeFile(filePath, content = '') {
  try {
    await fsPromises.writeFile(filePath, content);
    console.log('File created successfully');
  } catch (error) {
    console.error('Error creating file:', error);
  }
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