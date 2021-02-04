#! /bin/bash

# run with sudo
# killall node
domain="green.tru.io"
mhome="/home/ubuntu"

if [ "$1" == "--http" ]; then
    port=80
    echo "Deploying $(pwd) on port $port..."
    npx http-server ./ --port $port & 
elif [ "$1" == "--https" ]; then
    port=443
    echo "Deploying $(pwd) on port $port..."
    HTTPS=true
    npx http-server ./ --ssl --cert "$mhome/.acme.sh/$domain/$domain.cer" --key "$mhome/.acme.sh/$domain/$domain.key" --port $port & 
elif [ "$1" == "--killall" ]; then
    echo "Killing all instances of node server..."
    killall -9 node
elif [ "$1" == "--listall" ]; then
    echo "Ports that are open and listening:"
    lsof -Pi | grep -E "LISTEN"
fi
