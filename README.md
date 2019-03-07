# Textile React Cookiecutter Template _(textile-cookies)_

[![Made by Textile](https://img.shields.io/badge/made%20by-Textile-informational.svg?style=popout-square)](https://textile.io)
[![Chat on Slack](https://img.shields.io/badge/slack-slack.textile.io-informational.svg?style=popout-square)](https://slack.textile.io)

> Official Textile React Cookiecutter Template

Join us on our [public Slack channel](https://slack.textile.io/) for news, discussions, and status updates.

## Background

[Textile](https://www.textile.io) provides encrypted, recoverable, schema-based, and cross-application data storage built on [IPFS](https://github.com/ipfs) and [libp2p](https://github.com/libp2p). We like to think of it as a decentralized data wallet with built-in protocols for sharing and recovery, or more simply, **an open and programmable iCloud**.

The reference implementation of Textile is [written in Go](https://github.com/textileio/textile-go), and can be compiled to various platforms, including mobile (Android/iOS) and desktop/server (OSX, Windows, Linux, etc). The library in this repo is designed to help support things like browser-based Textile apps, Node.js apps, and other use-cases.

## Install

Make sure you have the [cookiecutter app installed](https://cookiecutter.readthedocs.io/en/latest/installation.html) on your system:

```sh
# If you have Python installed
pip install --user cookiecutter
# Or, if you don't want to use Python...
brew install cookiecutter # OSX only
pipsi install cookiecutter # Linux/OSX only
sudo apt-get install cookiecutter # Debian/Ubuntu
```

## Usage

To create a new Textile-based project, simply call:

```sh
cookiecutter gh:textileio/textile-cookies --checkout react
```

Then its simply a matter of:

```sh
cd appname
yarn install
yarn start
```

Now you can start editing the app code and making it your own. Check out the generated `README.md` file for details.

## Maintainer

[Carson Farmer](https://github.com/carsonfarmer)

## License

[MIT](./LICENSE)
