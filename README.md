# mozuku
A simple and easy lightshot screen capture generator/validator. 🚀


### Installation
`npm i mozuku` or `yarn add mozuku`

### Usage

- Generate a new screenshot

```javascript
const mozuku = require('mozuku');

mozuku.random().then(console.log);
//{
//  id: '3178e6876f9942a39edffe99ca3338f4', <= Returns undefined if not found
//  shortId: 'cg73mq',
//  isValid: true,
//  link: 'https://image.prntscr.com/image/3178e6876f9942a39edffe99ca3338f4.png',
//  shortLink: 'https://prnt.sc/cg73mq'
//}
```

- Validate a screenshot

```javascript
const mozuku = require('mozuku');

const printID = 'cg73mq';

mozuku.validate(printID).then(console.log);
//{
//  id: '3178e6876f9942a39edffe99ca3338f4',
//  shortId: 'cg73mq',
//  isValid: true, <= Returns false if image not exists
//  link: 'https://image.prntscr.com/image/3178e6876f9942a39edffe99ca3338f4.png',
//  shortLink: 'https://prnt.sc/cg73mq'
//}
```

- Generate a random ID

```javascript
const mozuku = require('mozuku');

mozuku.genRandomId(6);
//  cg73mq
```