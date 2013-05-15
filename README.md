## Build Status:

In order to ensure a base level of quality and help prevent pull requests from breaking the script, we are using [travis-ci.org](http://travis-ci.org) for continuous integration testing. The current status is:

![ProForma Continuous Integration Status](https://secure.travis-ci.org/AskUbuntu/ProFormaComments.png)

## Overview

On [Ask Ubuntu](http://askubuntu.com) we have a problem:

We have a bunch of "stock" comments that we use, as part of keeping the site running smoothly. More or less, what we do is we use [this userscript](http://stackapps.com/questions/2116/autoreviewcomments-pro-forma-comments-for-se) and then store our community suggested comments [over here on meta](http://meta.askubuntu.com/q/1323/6005). 

However, this became a problem - mainly because the pro-forma script that linked above now has support for remote sources - so this Git repo is where we're storing them.

To install them, simply add the following link as a `remote source`:

> https://raw.github.com/askubuntu/ProFormaComments/master/comments.jsonp

## Contributions

If you would like to contribute to the list of comments or suggest changes, please follow these simple steps:

1. Ensure you have signed up for an account here on GitHub.
1. Click the ![fork](http://i.stack.imgur.com/v7AJR.png) button in the upper-right corner of this page.
1. Once the process is complete, click the ![comments.jsonp](http://i.stack.imgur.com/zeC41.png) file.
1. Click the ![edit](http://i.stack.imgur.com/EDgnk.png) button to begin editing the file.
1. Once complete, save your changes with a descriptive message.
1. Click the ![pull request](http://i.stack.imgur.com/iust6.png) button to begin submitting a pull request.
1. Provide a brief overview of your changes and send the pull request.
1. Someone will review your pull request shortly.
