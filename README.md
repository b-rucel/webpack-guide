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




### 05 webpack dev server - live reloading

i get tired of running the webpack build command each time i make source code changes to see what i've done. webpack has a tool to help ease the pain a little.

https://webpack.github.io/docs/webpack-dev-server.html

    npm i -g webpack-dev-server
    npm i -D webpack-dev-server

add more configuration parameters to webpack in order to run the dev server.

    devServer: {
        contentBase: path.resolve(__dirname, 'build'),
        historyApiFallback: true
    }

another line in the package.json to set up script running, or you can run it in commandline this way also

    webpack-dev-server --hot --inline --progress --colors

one important to note with using the webpack-dev-server is that whatever compilation/transpiling is temporary only while running the dev server. to build for production use, you need to run the build command from previous sections.

    npm run watch

now point your browser to http://localhost:8080/ and check out your work.




### 06 image loading

you can even require images in your js code that can be used in your react components through webpack also.

    npm i -D url-loader

additional loader configuration in webpack.config.js

    { test: /\.(jpg|png)$/i, loader: "url?limit=50000" }

it tells it that images that are 25KB or smaller in size will be converted to a BASE64 string. Also if you have images defined in css then it will inline them in the css file where it was defined.





### 07 font loading

the loading of assets also applies to fonts as well. there aren't any additional loader that you need to install for loading fonts.

loader configuration in webpack.config.js is required however.

check out the source code in the component.css and component.js.


