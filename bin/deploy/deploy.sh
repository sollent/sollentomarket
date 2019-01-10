cd /var/www && \
sudo chmod -R 777 sollentoCI && \
cd sollentoCI && \
nohup php bin/console s:r *:5555 &
