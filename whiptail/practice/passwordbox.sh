#! /bin/bash

PASSWORD=$(whiptail -- passwordbox "Please Enter your Password" 8 78 
            --title "password dialog" 3>&11>&2 2>&3)
    exitstatus=$?
        if[$exitstatus == 0];
        then echo "User selected Ok and entered " $PASSWORD
        else
            echo "User selected Cancel."
        fi
    echo "(Exit status was $exitstatus)"