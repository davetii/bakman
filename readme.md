# Bakman

Bakman is a node.js library for file manipulation, end goal is an application for backing up my media content

## Installation

git clone 

## Usage
`node index.js readpath --source="D:\temp\t1"`

`node index.js pathsize --source="D:\temp\t1"`

`node index.js filesize --source="D:\temp\t1\(1972) Godzilla Vs Gigan.avi"`

`node index.js filestats --source="D:\temp\t1\(1972) Godzilla Vs Gigan.avi"`

`node index.js copyfile --source="D:\temp\t1\(1972) Godzilla Vs Gigan.avi" --target="D:\temp\t2\(1972) Godzilla Vs Gigan.avi"`


## TODO
* scan a path and store it to json
* read a json, scan a path, add changes
* Create data model
** copy to backup location
** Add row to DB

## Functions
* fileSize
* fileStats
* calculate a Directories Size
* Create a list of files in a directory


