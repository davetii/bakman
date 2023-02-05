import fs from 'fs/promises'
import klaw from 'klaw'

export async function fileSize (path) {  
    const stats = await fs.stat(path)
    return stats.size;
}

export async function fileStats (path) {  
  const stats = await fs.stat(path)
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

export async function readPath(path)  {
  return new Promise((resolve, reject) => {
    const items = []
    klaw(path)
    .on('data', item => items.push(item.path))
    .on("end", () => resolve(items))
    .on("error", reject);
  });
}