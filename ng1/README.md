# feature-tags-ng1

A feature flag (feature toggle) module for Angular 1.

## Quick Start

```
cd path/to/local/repo
npm install feature-tags-ng1 --save
```

Access the `FeatureTagsService` function using a `<script>` tag in your HTML…

```
<script src="node_modules/feature-tags-ng1/dist/feature-tags.min.js">
```

Or using a `require` statement in your JavaScript…

```
const FeatureTagsService = require('feature-tags-ng1');
```

## API

- The `FeatureTagsService` assumes a property called `feature_tags` on the `window` object in global scope.
- The `feature_tags` property must be an object with each flag represented by a key-value pair.
- Keys are strings. Values are booleans.
- You can both get and set flags using `FeatureTagsService`.


### Setting Flags

Pass an object as the first argument to set a flag:

```
FeatureTagsService({
    key: 'userLoginEnabled',
    state: true
})
```

The `key` and `state` parameters are required. `key` can be any arbitrary string, including an existing flag; `state` is a boolean.

When acting as a setter, the `FeatureTagsService` returns an object containing your `key` and `state` parameters.

The `FeatureTagsService` always works with [a copy](https://github.com/dperuo/feature-tags/blob/master/ng1/src/feature-tags.service.js#L10) of your `feature_tags` global object. The original `feature_tags` object is never mutated.

### Gettings Flags

#### Get All Flags
Pass zero arguments to get all flags:

```
const allFlags = FeatureTagsService();
```
#### Get One Flag
Return the state of a single flag by passing the name of that flag as a string as the first argument:

```
const flagState = FeatureTagsService('userLoginEnabled');
```

#### Return Code Based on a Flag
Return any arbitrary code based on the value of a flag by passing the name of that flag as a string followed by the return values for when that flag is true and false:

```
const resultOfFlag = FeatureTagsService('userLoginEnabled', whenTrue, whenFalse);
```

This is the same as using a ternary operator:

```
const resultOfFlag = FeatureTagsService('userLoginEnabled') ? whenTrue : whenFalse;
```

## CONTRIBUTING

Please see [CONTRIBUTING.md](https://github.com/dperuo/feature-tags/blob/master/CONTRIBUTING.md) for details.
