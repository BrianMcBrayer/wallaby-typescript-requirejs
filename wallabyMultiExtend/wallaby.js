module.exports = function (wallaby) {
    return {
        files: [
          { pattern: 'lib/require.js', instrument: false },
          { pattern: 'lib/*.js', instrument: false, load: false },
          { pattern: 'src/app.ts', load: false },
          { pattern: 'src/appExtend.ts', load: false },
          'test/test-main.js'
        ],

        tests: [
          { pattern: 'test/appSpec.ts', load: false },
          { pattern: 'test/appExtendSpec.ts', load: false }
        ],

        compilers: {
            // see const enum ModuleKind
            // https://github.com/Microsoft/TypeScript/blob/master/src/compiler/types.ts
            '**/*.ts': wallaby.compilers.typeScript({ module: 2 })
        }
    };
};
