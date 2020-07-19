---
layout: layouts/post.njk

title: Readability of indentation in Visual Studio Code
description: Leverage colors and whitespace rendering to improve the readability of indentation in VSCode
date: 2020-07-19
tags:
  - post
  - vscode
---

By default, Visual Studio Code is a little sparse when it comes to the readability of code indentation.

![Screenshot of default indentation styles in Visual Studio Code](/images/posts/20200719/vscode-indentation-default.png)

Let's see how it looks if we enable rendering of whitespace. Press `Command-Shift+P` on Mac (`Ctrl-Shift+P` on Windows or Linux) to open VS Code's command palette, type "settings" and select the `Preferences: Open Settings (JSON)` option that appears, and then add the following line to the file:

`"editor.renderWhitespace": "all"`

Here's how it will look with whitespace now enabled.

![Screenshot of indentation styles in Visual Studio Code after enabling whitespace rendering](/images/posts/20200719/vscode-indentation-whitespace.png)

Looking better. Let's add an extension to set the bracket pairs to unique colors so they're easier to visually match up. Open the command palette again and type "install extensions", then select the `Extensions: Install Extensions` option. The extensions pane will open, allowing us to search for an extension to install or remove. Let's search for and install the `Bracket Pair Colorizer` extension. You may have to reload the application for the installation to take effect.

Let's take another look at our progress:

![Screenshot of indentation styles in Visual Studio Code after installing the Bracket Pair Colorizer extension](/images/posts/20200719/vscode-indentation-bracket-pair-colorizer.png)

Great! The brackets and the lines tracing between them are now displaying in different colors. Let's add one more extension to make things even clearer. Open the extensions pane one more time and search for "Indent Rainbow". Install that extension, reload if needed, and have one more look at our changes:

![Screenshot of indentation styles in Visual Studio Code after installing the Indent Rainbow extension](/images/posts/20200719/vscode-indentation-indent-rainbow.png)

Each of the indentation levels now has a subtle background color for better visual separation. The indentation in this screenshot is set to 2 spaces, but if your "Indent using spaces" option in the VSCode User Settings (or per file type settings) is set to 4, then you should see a unique color after every 4 spaces.

After these changes, we have enabled the rendering of whitespace and added extensions to match up bracket pairs and indentation levels using color. To take this a bit further, try experimenting with [VSCode themes](https://code.visualstudio.com/docs/getstarted/themes) to find your preference in different colors and contrast levels. Have fun!