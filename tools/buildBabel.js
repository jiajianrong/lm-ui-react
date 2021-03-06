import { transform } from 'babel-core';
import fs from 'fs';
import URL from 'url';
import path from 'path';
import outputFileSync from 'output-file-sync';
//http://babeljs.io/docs/usage/api/
function buildContent(content, filename, destination, babelOptions = {}) {
  babelOptions.filename = filename;
  const result = transform(content, babelOptions);
  outputFileSync(destination, result.code, {encoding: 'utf8'});
}

function buildCssContent(content, filename, destination, babelOptions = {}) {
  // babelOptions.filename = filename;
  // const result = transform(content, babelOptions);
  outputFileSync(destination, content, {encoding: 'utf8'});
}

function buildFile(filename, destination, babelOptions = {}) {
  const content = fs.readFileSync(filename, {encoding: 'utf8'});
  // We only have .js files that we need to build
  if (path.extname(filename) === '.js') {
    const outputPath = path.join(destination, path.basename(filename));
    // console.log('%s => %s', filename, outputPath);
    buildContent(content, filename, outputPath, babelOptions);
  }
  if (path.extname(filename) === '.scss') {

    const outputPath = path.join(destination, path.basename(filename));
    buildCssContent(content, filename, outputPath, babelOptions);

  }
  //.png读写
  if (path.extname(filename) === '.png') {

    const outputPath = path.join(destination, path.basename(filename));

    fs.readFile(filename, (err, buffer) => {

      if (err) throw err; 
      let relativePath = path.relative(__dirname, outputPath).slice(1);
      fs.writeFile(relativePath, buffer, function (err) {

        console.log(err)

      });

    })

  }

}

export default function buildBabel(folderPath, destination, babelOptions = {}, firstFolder = true) {
  let stats = fs.statSync(folderPath);

  if (stats.isFile()) {
    buildFile(folderPath, destination, babelOptions);
  } else if (stats.isDirectory()) {
    let outputPath = firstFolder ? destination : path.join(destination, path.basename(folderPath));
    let files = fs.readdirSync(folderPath).map(file => path.join(folderPath, file));
    files.forEach(filename => buildBabel(filename, outputPath, babelOptions, false));
  }
}
