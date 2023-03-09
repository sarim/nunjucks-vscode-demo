import nunjucks from 'nunjucks';
import * as fs from 'node:fs';

const nun = nunjucks.configure('templates', { autoescape: false });
const context = { name: 'Fruit', fruits: ['apple', 'mango', 'orange'] };

fs.writeFileSync("./out/foo.ts", nun.render('foo.ts.njk', context));
fs.writeFileSync("./out/bar.py", nun.render('bar.py.njk', context));
