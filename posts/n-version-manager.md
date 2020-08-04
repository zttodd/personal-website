---
layout: layouts/post.njk

title: Getting started with n (node version management)
description: Manage your versions of node and npm
date: 2020-08-04
tags:
  - post
  - node
  - npm
---

When it comes to installing and managing your versions of Node and npm, I recommend using the [n version manager](https://github.com/tj/n). For the purposes of this post, `n` will enable us to:  

- Install Node, npm, and npm packages within your home directory instead of `/usr/local/bin`  
- Quickly and easily switch between multiple versions of `node` and `npm`  

The main benefit to installing Node within your home directory instead of `/usr/local/bin` is the prevention of potential permissions errors and/or having to use `sudo` to run Node or npm.  

With the ability to install multiple versions, you will be able to maintain older projects that might rely on an earlier version of Node.  

### Installing n  

Complete documentation of these steps can also be found within the project's [official GitHub repo](https://github.com/tj/n#installation).  

**If you already have npm installed:**  
You can install `n` using the following command:  

`npm install -g n`  

**If you don't already have npm installed:**   
You can use `curl` to grab a copy of `n` and get started.  

First, let's `cd` into our home directory and get a copy of `n`:  
`cd ~`  
`curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n`  

**Setting home directory for installation:**  
Next, let's (temporarily) set a location for `n` to install Node/npm:

*Note: this won't persist to a new terminal instance, so this line will also need to be added to your `.bashrc` or `.zshrc` file, depending on your default shell. See the "Set the PATH" section in this post for more details.*

`export N_PREFIX=$HOME/.n`

Finally, let's install the `lts` version of Node into the home directory location set in the previous step. This uses the bootstrap file named `n` that was previously downloaded using the `curl` script:

`bash n lts`  

Based on the `N_PREFIX` value set above, this will install the `lts` version of Node into `$HOME/.n`.  

### Set the PATH  

In order for `n` to be discoverable by the `PATH` for future terminal instances, add the following lines to your shell's configuration file (such as `.bashrc` or `.zshrc`):  

```
export N_PREFIX=$HOME/.n
export PATH=$N_PREFIX/bin:$PATH
```

To test out whether the `n` command has been correctly added to the `PATH`, restart your terminal and run the `n list` command to see a list of your installed versions of Node.  

If you're having trouble, please double check whether the `export` lines were added to your shell's config file. Also, check whether the path to your `n` installation exists in the `PATH`:  

`echo $PATH`  

Refer to [the official docs](https://github.com/tj/n) for further details and troubleshooting with getting the `n` command up and running.

### Installing other versions of Node  

So far, we've installed the `lts` version of Node and npm. Let's install the `latest` version:  

`n install latest`  

Verify that the latest version of Node and npm were installed:  

`node -v`  
`npm -v`  

Now that we have more than one version of Node installed (`lts` and `latest`), we can switch between them by typing `n` in the command line and pressing enter. Follow the prompts to switch to a different version!  

### Conclusion  

After setting up `n`, you are now able to install as many versions of Node and npm as you need for different projects. Try experimenting with the latest versions of Node as they are released. You can always roll back to a more stable version if the latest is incompatible with your projects.  

Make sure and check out the [official GitHub repo](https://github.com/tj/n) for the project for complete documentation and more!  