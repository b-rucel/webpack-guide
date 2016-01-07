# webpack-guide

Guide to getting started with Webpack for asset bundling.

### 01 basics webpack setup

_initial setup_

    mkdir -p build src/components
    touch webpack.config.js build/index.html src/main.js src/components/component.js

    npm init -f
    npm i -g webpack
    npm i -D webpack script-loader

check out the configuration code in webpack.config.js & package.json

add to script section in package.json or you can try running this in cli

    webpack --progress --profile --colors

add the loader to handle js loading in webpack.config.js

    npm run build 

then take a look at build/bundle.js to see how the bundling is set up.


__code__

check out the source code in src/main.js and src/components/component.js



### 02 react and babel setup

more npm modules to install

    npm i -S react babel-runtime react-dom
    npm i -D babel-core babel-loader babel-preset-react

introducing react and babel requires loader configuration in webpack.config.js

    { test: /\.(js|jsx)?$/, exclude: /node_modules/, loader: "babel?cacheDirectory" },


check the source code for src/main.js, build/index.html, & src/components/component.js


one more configuration file is needed for babel to process react correctly.

    touch .babelrc



### 03 css

adding css loader to the setup

    mkdir src/styles/
    npm i -D style-loader css-loader

using normalize and skeleton as the base css framework: http://getskeleton.com

    touch src/components/component.css

checkout the source code in the js files. now you can use require to bundle css. you should note at this point the css rules are global and cacade down.



### 04 babel ES2015 (ES6)

if you like to take advantage of es6 syntax with babel you can add a babel preset loader module and add some configuration to .babelrc.

    npm i -D babel-preset-es2015

check out the new js syntax in the source code.




    