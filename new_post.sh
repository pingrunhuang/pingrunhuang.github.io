#!/bin/sh

if [ $# -ne 1 ] 
then
	echo "please supply the path of the blog including the name"
	exit 1
fi

hugo new $1
mkdir -p $1 

