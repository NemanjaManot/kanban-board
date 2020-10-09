# Kanban Board

## About

Kanban Board is React application where user can add a new ticket to board and edit or delete existing one.
There are 3 columns: _To Do_, _In Progress_ and _Done_.
Also, each ticket is draggable to any other column.

## Application flow 
**Search for tickets** from the Search bar in the top right corner.
**Add new ticket** by clicking on the + icon, next to each column title. 
**Edit ticket** by double clicking on it. 
When hovering over ticket, X icon will be shown and by clicking on it **ticket will be deleted**.

## Live
Check it live on this link: https://nemanjamanot.github.io/kanban-board/

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

- Drag and drop functionality is done using vanilla JS & HTML5. (no external libraries)
- All changes are stored in LocalStorage, with using redux-persist library.
- Utility functions are covered with unit tests using Jest.
- Styling is done using styled-components together with polished library

### Libraries

- React
- Redux
- styled-components
- polished
- redux-persist
- prettier
- Jest

