---
layout: post
title: "Building a blog with Jekyll"
date: "2019-04-17"
---

Over the last week I've rebuilt my one-page site into a blog using Jekyll. Here are some thoughts from along the way:

- If you are versed in npm and understand using `package.json` to generate `node_modules`, then it shouldn't take long to figure out how the `Gemfile` works.
- The docs are really well-written and reading through all of them in order will give you what you need to get a basic site up and running.
- In your project, build out the directory structure from [this page](https://jekyllrb.com/docs/structure/) with empty folders so you can see a kitchen-sink version of the site and match up which directories override which theme partials.
- Looking through [the repository](https://github.com/jekyll/minima/) for the included `minima` theme is also helpful to understanding how theming works. The theme files aren't included within the project that is created when `jekyll new` is run. From the docs: _"Run `bundle show` followed by the name of the theme’s gem, e.g., `bundle show minima` for Jekyll’s default theme."_
- [This page](https://github.com/jekyll/jekyll-sass-converter/tree/master/docs) is a great resource for understanding how to structure the main Sass file and its partials using the preferred Jekyll directory structure.
- Having a good understanding of markdown is helpful to quickly get into writing content. [This resource](https://daringfireball.net/projects/markdown/dingus) is a good place to experiment and learn.
