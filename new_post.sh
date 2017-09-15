#!/bin/sh

if [ $# -ne 1 ] 
then
	echo "please supply the path of the blog including the markdown name"
	echo "note that the path should be the sub-directory of the content directory"
	exit 1
fi

FILENAME=$1

name=${FILENAME%.*}
extension=${FILENAME#*.}

if [ $extension != 'md' ]
then
	echo "File should extended with md"
	exit 1
fi

hugo new $FILENAME
mkdir -p content/$name 