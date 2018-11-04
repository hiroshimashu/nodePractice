// module-loader 

function loadModule(){ 
    const wrappedSrc = `(function(module,exports, require) {
        ${fs.readFileSync(filename, 'utf8)}})(module, module.exports, require);`;
    eval(wrapperdSrc);
}



