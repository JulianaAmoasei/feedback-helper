#!/bin/bash

REPOS=`cat repos.txt`

IFS=$'\n'; arrREPOS=($REPOS); unset IFS;

echo $arrREPOS;

# REPOARR=$(echo $REPOS | tr ";" "\n")

# for repo in $REPOARR
# do
#     echo "> [$repo]"
# done

# #Read the main string
# echo "Enter the string with colon(:) to split"
# read mainstr

# #Split the string based on the delimiter, ':'
# readarray -d : -t strarr <<< "$mainstr"
# printf "\n"

# # Print each value of the array by using loop
# for (( n=0; n < ${#strarr[*]}; n++))
# do
#   echo "${strarr[n]}"
# done