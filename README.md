# sample-repo-ts-loader

This repo is created for demonstrates the issue of [ts-loader](https://github.com/TypeStrong/ts-loader) that won't turn [project references feature](https://www.typescriptlang.org/docs/handbook/project-references.html) on if `references` is extends from another TS config file.

To reproduce, at project root:
```bash
yarn build
```

You should see `TS6059` error.

However, if you either:
- add `"references": [{ "path": "../typescript-common" }],` to [tsconfig-web.json](./module1/tsconfig-web.json)
- Or modify [webpack.config.js](./module1/webpack.config.js) to use [tsconfig.json](./module1/tsconfig.json) to build (instead of [tsconfig-web.json](./module1/tsconfig-web.json))

the build will complete with no erro. 