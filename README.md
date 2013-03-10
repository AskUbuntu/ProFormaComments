# About

This repository is designed to be a central location for Ask Ubuntu Canned Comments
provided by the [AutoReviewComments - Pro-Forma comments for Stack Exchange](http://stackapps.com/q/2116/1690)
user script. This is a community mantained project see below how you can help contribute.

# Install

Once you have installed the AutoReviewComments Userscript, you'll need to this repository as a "remote".
Visit a question and choose "Add Comment", if the extension is installed properly you should see an "auto"
option.

![auto comment](http://i.imgur.com/1XUO0rc.png) 

Select auto, then choose "remote" at the bottom of the new popup window.

![](http://i.imgur.com/svesd9a.png)

Enter the following URL in to the box, select the checkbox for auto-loading, and save.

![](http://i.imgur.com/QbIfDD9.png)

    https://raw.github.com/askubuntu/ProFormaComments/master/comments.jsonp

# Contribute

So you want to add more comments to this. That's great! You'll first need to [fork the
repository](https://help.github.com/articles/fork-a-repo).

Make sure you're working on top of the latest code from the repository or your merge 
request may be rejected.

For sake of accountability and easy of rollback please make each new line item a single
commit. So if you add two new entries each line should be it's own commit. In doing so
it helps reverse malformed lines. If you make several commits for one line please Squash
the commits to form a single commit. You can do this with the `git rebase` command. An
example of this, if you wanted to merge the last two commits in to one is as follows:

    git rebase -i HEAD~2

If you have more commits to squash, change the `2` to that number. Once the text editor
comes up replace the words "pick" with "squash" next to each commit you want to squash
in to the commit preceeding it. Save and close the text editor (<kbd>Ctrl</kbd> + <kbd>O</kbd>,
<kbd>Ctrl</kbd> + <kbd>X</kbd>) Then edit the commit message you want to use for these
new commits.

Finally push to github and [open a pull request](https://help.github.com/articles/using-pull-requests)

# Style Guide

