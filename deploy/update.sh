#!/usr/bin/env bash

set -e

PROJECT_BASE_PATH='/usr/local/apps/simplesocial'

git pull
$PROJECT_BASE_PATH/env/bin/python manage.py migrate
$PROJECT_BASE_PATH/env/bin/python manage.py collectstatic --noinput

# Configure supervisor
cp $PROJECT_BASE_PATH/deploy/supervisor_profiles_api.conf /etc/supervisor/conf.d/simplesocial.conf
supervisorctl reread
supervisorctl update
supervisorctl restart simplesocial

echo "DONE! :)"
