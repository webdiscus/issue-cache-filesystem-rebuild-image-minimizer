# issue-cache-filesystem-rebuild-image-minimizer

If set `cache.type: 'filesystem'` in Webpack configuration,
the first compilation will complete without errors.
Second compilations will fail:

```
ERROR in ./src/token.svg
Can't handle conflicting asset info for sourceFilename
Error: Can't handle conflicting asset info for sourceFilename
    at mergeAssetInfo (.../node_modules/webpack/lib/asset/AssetGenerator.js:99:12)
    at AssetGenerator.generate (.../node_modules/webpack/lib/asset/AssetGenerator.js:545:20)
```

## Prepare
```
git clone https://github.com/webdiscus/issue-cache-filesystem-rebuild-image-minimizer.git
cd issue-cache-filesystem-rebuild-image-minimizer
npm i
```

## How to reproduce the issue

```
npm run build <= OK
npm run build <= second rebuild occurs error
```
