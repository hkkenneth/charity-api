#!/bin/bash

cd /var/charity-api;

npm install

node index.js >> /var/log/charity-api/log.log

