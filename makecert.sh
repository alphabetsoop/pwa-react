#! /bin/bash

# https://stackoverflow.com/a/35231213
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
