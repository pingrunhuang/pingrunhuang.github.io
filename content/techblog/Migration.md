+++
date = "2017-09-13T11:27:27+08:00"
title = "Migration"
draft = true
+++

## From hexo to django
I still love blogging the knowledge that I lean everyday. It is like my RAM is not very large like 2 Gb or so. I really need to flush the things that I read just now to my laptop which performs the function like the hard disk and later on compact them together.

## From django to hugo
Django is great. But for rendering a static webpage like blog or company advertisement, it is better to use a generator framework like hexo though since the process of deploying django is so time consuming. But as I said before, hexo has plenty of shortcoming, so I decided to go for another framework. Hugo is one of the framework that I found very clean and decoupling. It is built on top of go which is a great server language due to speed and structure design. Below is the structure of the hugo site project:
```
site-name
  -> content
    -> all the Markdown
  -> static
    -> all the static file including css file and javascript file
  -> themes
    -> your customized themes or themes created by others
  -> archetypes
    -> define your static posts' archetypes
  -> data
    -> contains extra files in the format of TOML or yaml which could be access by .Site.Data
  -> layouts
    -> this directory is an extent of the theme to customize your site's layout
```
That's it. Everything is here. You can reference image very easily from the markdown by specifying `[](/content/image.jpg)` and put your post related picture in the content directory or subdirectory. This feature is very useful since I can migrate in the future very easily(decoupling). One more great feature of hugo is everything you wrote on markdown will reflect immediately on the browser. So fast no?
