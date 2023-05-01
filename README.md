# {{todo}}

## Getting started

### Installing

Add `{{todo}}` to your project:

```sh
npm i {{todo}}
```

### Examples

```ts
import {{todo}} from '{{todo}}';
```

## Instructions for setting up this new package

1. Change all the `{{todo}}` occurrences to the name of your package.
2. Change the `package.json` `"name"` to match your package.
3. Change the `package.json` `"repository"` to match your repository.
4. Change the `package.json` `"author"` to match your name.
5. Change the `package.json` `"keywords"` to match your package.
6. Change the `package.json` `"description"` to match your package.
7. Start coding in the `src` folder.
8. Remove this section from the `README.md` file.

## Contributing

### Development

```shell
npm install # to install all dependencies
npm run test # to run tests
npm run test -- --watch # to develop while running tests
npm run typecheck # to check types in the project
npm run lint # to run eslint
npm run fix # to fix eslint errors
npm run format # to run prettier
npm run build # create a build in the dist folder
```

**Husky** and **lint-staged** are set up to run before every commit, so you don't have to worry
about formatting or linting.

### Publishing

#### GitHub Actions

We are using GitHub Actions to build & publish the package to NPM. The workflow is triggered
manually from the GitHub Actions tab. There you will be able to select a npm version update type
(`patch`, `minor`, `major`) and a release type (`rc`, `beta`, `alpha`).

The GitHub Action does the version update, tagging, and committing as part of the workflow. The way
the version number is retrieved from the `package.json` after updating it is specific for
non-workspace projects. If you are using a workspace project, you will need to update the GitHub
Workflow configuration differently.

```shell
# get a bare npm version without quotes

# non-workspace
npm pkg get version | tr -d '"'

# workspace
npm pkg get version | jq -r '.[]'
```

#### Automatic nightly dev builds

Dev builds (with the `-dev.{commit}` postfix) are published to the `@next` tag, and trigger
automatically on every push to the `main` branch (e.g. when a PR is merged).

#### Manual

Since we're publishing from the `dist` folder (see `./scripts/preparePublish.ts` for more
information), we need to run `npm run build` before publishing.

After that, we can run `npm publish` as from the `dist` folder.

```sh
npm run build
cd dist
npm publish
```

> **Note** that we're publishing from the `dist` folder, not the root of the project, and that the
> `prepublishOnly` script will run from the `dist` folder as well, so the paths might be a bit
> confusing.

The `./scripts/preparePublish.ts` script is executed before publishing, and it will copy additional
files to the `dist` folder, such as the `README.md` and `LICENSE` files.
