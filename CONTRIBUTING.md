# Contributing

Thank you for your interest in contributing to the Hydragon Dex Interface!

# About

Use node 14.21 to install and run the project

To find something useful and specific for adding chain or more use comment:

```
SAMVI
```

with addition: Style / Update/ Todo / Unused/ Info

# Development

Before running anything, you'll need to install the dependencies:

```
yarn install
```

## Running the interface locally

```
yarn start
```

The interface should automatically open. If it does not, navigate to [http://localhost:3000].

## Creating a production build

```
yarn build
```

To serve the production build:

```
yarn serve
```

Then, navigate to [http://localhost:3000] to see it.

## Running unit tests

```
yarn test
```

By default, this runs only unit tests that have been affected since the last commit. To run _all_ unit tests:

```
yarn test --watchAll
```

## Running integration tests (cypress)

Integration tests require a server to be running. In order to see your changes quickly, run `start` in its own tab/window:

```
yarn start
```

Integration tests are run using `cypress`. When developing locally, use `cypress:open` for an interactive UI, and to inspect the rendered page:

```
yarn cypress:open
```

To run _all_ cypress integration tests _from the command line_:

```
yarn cypress:run
```

## Engineering standards

Code merged into the `main` branch of this repository should adhere to high standards of correctness and maintainability.
Use your best judgment when applying these standards. If code is in the critical path, will be frequently visited, or
makes large architectural changes, consider following all the standards.

- Have at least one engineer approve of large code refactorings
- At least manually test small code changes, prefer automated tests
- Thoroughly unit test when code is not obviously correct
- If something breaks, add automated tests so it doesn't break again
- Add integration tests for new pages or flows
- Verify that all CI checks pass before merging
- Have at least one product manager or designer approve of any significant UX changes

## Guidelines

The following points should help guide your development:

- Security: the interface is safe to use
  - Avoid adding unnecessary dependencies due to [supply chain risk](https://github.com/LavaMoat/lavamoat#further-reading-on-software-supplychain-security)
- Reproducibility: anyone can build the interface
  - Avoid adding steps to the development/build processes
  - The build must be deterministic, i.e. a particular commit hash always produces the same build
- Decentralization: anyone can run the interface
  - An Ethereum node should be the only critical dependency
  - All other external dependencies should only enhance the UX ([graceful degradation](https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation))
- Accessibility: anyone can use the interface
  - The interface should be responsive, small and also run well on low performance devices (majority of swaps on mobile!)

## Finding a first issue

Start with issues with the label
[`good first issue`](https://github.com/Hydra-Chain/hydragon-dex-interface-fork/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22).
