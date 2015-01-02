#!/bin/bash

cd /var/charity-api;

echo "starting npm install"
npm install
echo "npm install done"

echo "starting node index.js now"
node index.js >> /var/log/charity-api/log.log

