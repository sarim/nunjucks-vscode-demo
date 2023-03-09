# nunjucks-vscode-demo
Experiment to see if nunjucks vscode can apply nunjucks grammer over arbitrary language grammar  

Opening templates `foo.ts.njk` or `bar.py.njk` in vscode treats them as **HTML(+nunjucks)**. But I want `foo.ts.njk` to be treated as **Typescript(+nunjucks)** or `bar.py.njk` to be treated as **Python(+nunjucks)** etc...

To run:
```sh
npm install
node run.js
```