# helloworld-webpack
Convert a webpack helloworld to vite helloworld
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
node ./bin/index -d webpack-to-vite-demos/helloworld-webpack -t webpack
```