## Build Status:

In order to ensure quality and help prevent pull requests from breaking the script, we are using [travis-ci.org](http://travis-ci.org) for continuous integration testing. The current status is:

![ProForma Continuous Integration Status](https://secure.travis-ci.org/AskUbuntu/ProFormaComments.png)

## Overview

So, on [Ask Ubuntu](http://askubuntu.com), we have a problem.

We have a bunch of 'stock' comments that we use, as part of keeping the site running smoothly. More or less, what we do is we use [this userscript](http://stackapps.com/questions/2116/autoreviewcomments-pro-forma-comments-for-se) and then store our community suggested comments over [here on meta](http://meta.askubuntu.com/q/1323/6005). 

However, this is a problem, and no longer works for us - mainly, because the pro forma script that I linked to above now has support for remote sources - so this git repo is where we're storing them.

To install them, simply add the following link as a `remote source`:

> https://raw.github.com/askubuntu/ProFormaComments/master/comments.jsonp

## Contributions

If you would like to contribute to the list of comments or suggest changes, just open a pull request and we'll be glad to take a look at it.

