#!/bin/sh

# generate the html content
hugo

mv public .public

git checkout master

mv .public/* .

rm -rf .public

ls | grep -v themes | git add 

git commit -m "update at $(date)"

git push -u origin master 

