const path = require('path');

const a =path.basename('C:\\temp\\myfile.html');
console.log("base name :"+a);
const b =path.dirname('C:\\temp\\myfile.html');
console.log("directory name : "+b);
const c1 = path.extname('index.coffee.md');
const c2 =path.extname('index.html');            // it returns the extension name
console.log("extensions are :"+c1  ,   c2);

const d = path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt',
  });
  console.log(d);

const e = path.parse('C:\\path\\dir\\file.txt');        // important
// console.log(e);
                                                        // Returns:
                                                        // { root: 'C:\\',
                                                        //   dir: 'C:\\path\\dir',
                                                        //   base: 'file.txt',
                                                        //   ext: '.txt',
                                                        //   name: 'file' }

const f =path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb');     
console.log("Relative: "+f);                                                   


path.resolve('/foo/bar', './baz');
// Returns: '/foo/bar/baz'

path.resolve('/foo/bar', '/tmp/file/');
// Returns: '/tmp/file'

const g= path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');
// If the current working directory is /home/myself/node,
// this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
// console.log(g);
