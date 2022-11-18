#! /bin/bash
#
#This is the second version of the check_file.sh script. In this version however, 
#utilizes the diff and cp utility programs that assumes the presence of a default configuration file
#name config-default.txt, and checks for the presence of a configuration file named config.txt. If config.txt
#exists, then the script uses the external program diff to produce a "diff" (a report of the differences between, in this case, two files), so that the user can see what non-default configurations are in place. If config.txt does not exist, then the script uses the external program cp("copy") to copy the default configuration file to config.txt. 
#

if [[ -e config.txt ]] ; then
    echo 'The file "config.txt" already exists. Comparing with default...'
    diff -u config-default.txt config.txt > config-diff.txt 
    echo 'A diff has been written to "config-diff.txt". '
else
    echo 'The file "config.txt" does not exist. Copying default....'
    cp config-default.txt config.txt
    echo '....done.'
fi
    
