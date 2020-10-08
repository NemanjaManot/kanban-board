# Kanban Board

## About

Kanban Board is React application where user can add a new ticket to board and edit or delete existing one.
There are 3 columns: _To Do_, _In Progress_ and _Done_.
Also, each ticket is draggable to any other column.

## Application flow 
**Search for tickets** from the Search bar in the top right corner.
**Add new ticket** by clicking on the + icon, next to each column title. 
**Edit ticket** by double clicks on it. 
When hover over ticket, X icon will be shown and by clicking on it **ticket will be deleted**.

All changes are stored in LocalStorage, with using redux-persist library.

## Installation

Clone Github repo (or download zip):
```
$ git clone https://github.com/NemanjaManot/kanban-board.git
```

Install packages:
```
$ cd kanban-board
$ npm install
```

 Run Application

```
$ npm start
```

## Tech Stack

- React
- Redux
- styled-components
- polished
- redux-persist
- prettier

