#!/bin/bash
# docker run -dp 127.0.0.1:3306:3306 --name click-art-db -e MARIADB_ROOT_PASSWORD=123456789 mariadb:10.2.38-bionic

sudo docker-compose -f stack2.yml up
