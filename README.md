# eslint-plugin-custom-rule

Exemplo de regra customizada do ESLint

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-custom-rule`:

```sh
npm install eslint-plugin-custom-rule --save-dev
```

## Usage

Add `custom-rule` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["custom-rule"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "custom-rule/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here

## Setup

Install globals

`npm -g yo generator-eslint mocha`

Create local rule

`mkdir eslint-plugin-your-plugin && cd eslint-plugin-your-plugin`

`yo eslint:plugin`

`yo eslint:rule`

In your project

`npm i --save-dev ../path/to/eslint-plugin-your-plugin`
