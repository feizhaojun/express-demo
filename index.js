/*
 * @Author: Mukti
 * @Date: 2021-08-26 11:53:38
 * @LastEditTime: 2021-08-26 11:56:28
 * @LastEditors: Mukti
 */
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(req)
  res.send('hw')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})