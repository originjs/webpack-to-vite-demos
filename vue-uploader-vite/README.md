# vue-uploader-vite
Convert [vue-uploader](https://github.com/simple-uploader/vue-uploader) to vite project
## install webpack-to-vite

```
git clone https://github.com/originjs/webpack-to-vite.git
cd webpack-to-vite
npm install (yarn)
npm run build (yarn build)
```

## download helloworld-wepack
in the same parent directory of webpack-to-vite, run

```
git clone https://github.com/originjs/webpack-to-vite-demos.git
```

## convert

```
cd webpack-to-vite
node ./bin/index -d webpack-to-vite-demos/vue-uploader-vite -t webpack
```

## run 

```
cd vue-uploader-vite/
npm i
npm run serve-vite
```