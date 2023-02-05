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
* test for path
* Create path
* File Copy function
* Implement sqllite DB
* Create data model
* read a source directory in
** copy to backup location
** Add row to DB

## Functions
* fileSize
* fileStats
* calculate a Directories Size
* Create a list of files in a directory


