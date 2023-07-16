# Electron Apps

This repository contains the source code for Electron Apps, an application built with Electron framework.

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Build and Release Workflow](#build-and-release-workflow)
- [Forge Configuration](#forge-configuration)

## About

Electron Apps is a cross-platform desktop application that provides.

## Getting Started

To get started with Electron Apps, follow these steps:

1. Clone this repository: `git clone https://github.com/mrofisr/electron-apps.git`
2. Install project dependencies: `cd electron-apps && yarn install`
3. Build the application: `yarn make`
4. The built artifacts will be available in the `out/` directory.

## Build and Release Workflow

This repository uses GitHub Actions for automating the build and release process. The workflow defined in `.github/workflows/build-release.yml` performs the following tasks:

- On every push to the `main` branch and on tagged commits, it triggers a build process.
- The build is performed on macOS, Ubuntu 20.04, and Windows platforms using the specified Node.js LTS version.
- Yarn dependencies are cached to improve build performance.
- The application is built using the `yarn make` command for tagged releases.
- Release artifacts, such as deb packages, DMG files, and setup executables, are created and attached to GitHub Releases.

## Forge Configuration

The `forge.config.js` file contains the configuration for Electron Forge, which is used to build and package the Electron Apps application. The configuration includes the following makers and publishers:

### Makers

- `@electron-forge/maker-zip`: Creates ZIP archives for macOS, Linux, and Windows platforms.
- `@electron-forge/maker-deb`: Creates Debian packages for Linux platforms.
- `@electron-forge/maker-dmg`: Creates DMG files for macOS platforms.
- `@electron-forge/maker-squirrel`: Creates setup executables for Windows platforms.

### Publishers

- `@electron-forge/publisher-github`: Publishes the built artifacts to GitHub Releases. The configuration specifies the repository, draft and prerelease options.

For more information about Electron Forge configuration, refer to the [Electron Forge documentation](https://www.electronforge.io/configuration).

---

Feel free to update this README file with more detailed information about your application, its features, and how to use it. Happy coding!
