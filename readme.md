# Bakman

Bakman is a node.js library for file manipulation, end goal is an application for backing up my media content

## Installation

git clone 

## Usage
`node index.js readpath --source="Q:\movies"`
`node index.js readpath --source="D:\temp\t1"`
`node index.js pathsize --source="D:\temp\t1"`
`node index.js read --source="D:\temp\t1\(1972) Godzilla Vs Gigan.avi"`
`node index.js filesize --source="D:\temp\t1\(1972) Godzilla Vs Gigan.avi"`
`node index.js filestats --source="D:\temp\t1\(1972) Godzilla Vs Gigan.avi"`


## TODO
* implement check if file exsits in target path
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


