// 未使用 express generator 的文件

const express = require('express');
const app = express();
const port = 3000

app.listen(port, () => {
  console.log('express start')
})

app.get('/', (req, res) => {
  res.send('Hello world')
})

// express.static(root, [options])
// express.static(root, [options])