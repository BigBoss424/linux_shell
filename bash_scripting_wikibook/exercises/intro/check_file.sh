#! bin/bash 
#
#This script tests whether there exists a file name readme.txt in the current directory, and uses an if statement to control, based on that test, which commands are run. It can be directly typed at the prompt,
#
#There will be two versions of this script. 
#
#This is version 1

if [[ -e readme.txt ]] ; then
    echo 'The file "readme.txt" exists.'
else
    echo 'The file "readme.txt" does not exist.'
fi

