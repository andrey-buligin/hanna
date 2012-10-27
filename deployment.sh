#!/bin/bash  

rsync -avrzt --copy-links --delete-during --progress --exclude '__saved_data*' --exclude 'error_log' --exclude '.git' -e ssh /Users/andrey/Sites/hanna/ andreybu@andreybuligin.com:public_html/hanna/