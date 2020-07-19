# Personal Website

This is the repository for [zacharytodd.com](https://zacharytodd.com).

The website is built using:
- `Eleventy`: compiles data and content into static HTML pages
- `Nunjucks`: for templating within Eleventy
- `Sass`: extends CSS for more features and preprocessing
- `Gulp`: compiles Sass into CSS and copies files into build

And deployed using [Netlify](https://netlify.com).

## Building the site

To build this site on your computer, first make sure that you have Node and npm installed. You can learn more about these tools on their [official project site](https://nodejs.org/en/).

### Instructions

From the command line, install all of the packages using `npm`:

`npm install`

To build the site for testing/development run the `start` script:

`npm run start`

## Troubleshooting

### MacOS

Once Node and npm are installed, the commands in the Instructions section should work with little issue. If you get the following error about Xcode

```
xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance
```

then follow the answers here to resolve that issue: https://stackoverflow.com/questions/17980759/xcode-select-active-developer-directory-error.

### Linux / Windows (WSL)

To build the site on Windows 10, I recommend using the [Windows Subsystem for Linux (WSL)](https://docs.microsoft.com/en-us/windows/wsl/install-win10) paired with the [Windows Terminal](https://devblogs.microsoft.com/commandline/windows-terminal-1-0/) to get a developer experience similar to using MacOS.

These instructions are written to work with using Ubuntu as your Linux distribution. It's likely that Debian would work as well, but I haven't tested it.

Within the terminal in Ubuntu, run these commands to install the prerequisites for npm to work:

```
// Fetch new package updates
sudo apt update

// Upgrade all packages
sudo apt upgrade

// Install python2 (python3 is the default version but some packages still require python)
sudo apt install python

// Install tools for building, such as 'make'
sudo apt install build-essential