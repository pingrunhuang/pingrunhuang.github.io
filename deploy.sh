#!/bin/sh

# generate the html content
hugo

mv public .public

git checkout master

ls | grep -v deploy.sh | xargs rm -r

mv .public/* .

rm -rf .public

git add *

git commit -m "update at $(date)"

git push -u origin master 

