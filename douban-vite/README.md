# douban-vite
Convert [douban](https://github.com/jeneser/douban) to vite project
## install webpack-to-vite

```
git clone https://github.com/originjs/webpack-to-vite.git
cd webpack-to-vite
npm install (yarn)
npm run build (yarn build)
```

## download douban
in the same parent directory of webpack-to-vite, run

```
git clone https://github.com/jeneser/douban.git
```

## convert

```
cd webpack-to-vite
node ./bin/index -d webpack-to-vite-demos/douban-vite -t webpack
```
