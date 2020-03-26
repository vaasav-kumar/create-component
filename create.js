const fs = require('fs')
const shell = require('shelljs')

let fileName = process.argv[2]
let filePath = process.argv[3]

let data = `<template>\n\t<div id="${fileName}">\n\t\t\n\t</div>\n</template>\n\n<script>\n\texport default {\n\t\tname: '${fileName}',\n\t\tdata () {\n\t\t\treturn {\n\n\t\t\t}\n\t\t},\n\t\tcreated () {\n\n\t\t},\n\t\tmounted () {\n\n\t\t},\n\t\tcomputed: {\n\n\t\t},\n\t\twatch: {\n\n\t\t},\n\t\tmethods: {\n\n\t\t}\n\t}\n</script>`
filePath = filePath === undefined ? shell.exec(`pwd`).trim() : filePath
try {
  if (!fs.existsSync(filePath)) {
    fs.mkdirSync(filePath)
  }
} catch (err) {
  console.error(err)
}

if (fs.existsSync(filePath + '/' + fileName + '.vue')) {
  console.log('file already exists')
} else {
  fs.writeFileSync(filePath + '/' + fileName + '.vue', data, (err) => { 
    if (err) throw err; 
  })
}
