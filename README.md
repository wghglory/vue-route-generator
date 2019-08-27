# vue route generator

In our daily vue development, we may add a vue component in `src/views` folder, and we probably configure routes manually in `router.js`. In addition, we write `router-linker` somewhere for the new added view.

This package solves this tedious issue. By running `dvr refresh`, both routes' configuration and router-link will be added for you.

## Introduction

1. Download repo, run `dvr init <projectName>`
1. Check src/views folder, run `dvr refresh` to:
   - generate router config
   - add router-link

## Usage

1. Install package, register command:

   ```bash
   yarn   # install package
   npm link  # register globally
   ```

   Output:

   ```
   added 6 packages from 3 contributors, removed 5 packages, updated 145 packages and audited 276 packages in 22.905s

   /Users/derek/.nvm/versions/node/v12.6.0/bin/dvr -> /Users/derek/.nvm/versions/node/v12.6.0/lib/node_modules/vue-router-cli/bin/dvr

   /Users/derek/.nvm/versions/node/v12.6.0/lib/node_modules/vue-router-cli -> /Users/derek/My/projects/nodejs-learning/vue-router-cli
   ```

1. Download project

   Run `dvr init <name>`:

   ```bash
   dvr init vue-template  # download vue-template repo into ../vue-template folder
   ```

   if you see `/Users/derek/.nvm/versions/node/v12.6.0/lib/node_modules/vue-router-cli/bin/dvr-init(1) not executable. try chmod or run with root`, add privilege to all files under bin.

   ```bash
   chmod +x ./bin/*
   ```

1. Modify src/views folder and run command

   In vue-template project, run `dvr refresh` to config route.
