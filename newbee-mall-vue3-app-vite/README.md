# newbee-mall-vue3-app-vite
Convert [newbee-mall-vue3-app](https://github.com/newbee-ltd/newbee-mall-vue3-app) to vite project
## install webpack-to-vite

```
git clone https://github.com/originjs/webpack-to-vite.git
cd webpack-to-vite
npm install (yarn)
npm run build (yarn build)
```

## download newbee-mall-vue3-app
in the same parent directory of webpack-to-vite, run

```
git clone https://github.com/newbee-ltd/newbee-mall-vue3-app.git
```

## convert

```
cd webpack-to-vite
node ./bin/index -d ../vue-uploader-vite
```

## run 

```
cd ../vue-uploader-vite/
npm i
npm run serve-vite
```
