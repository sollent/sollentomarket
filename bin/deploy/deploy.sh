#!/bin/bash
sudo chmod -R 777 /var/www/sollentoCI
cd /var/www/sollentoCI/sollentomarket
fuser -n tcp -k 5555
npm i
yarn run encore production
sudo nohup php bin/console s:r *:5555 &
