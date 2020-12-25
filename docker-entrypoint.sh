  
#!/bin/sh

set -e

wait_for_users-services() {
  echo Waiting for Users Services
  while ! (telnet $USERS_SERVICES_DB_PORT > /dev/null 2>&1); do
    echo -n .
    sleep 1
  done
  echo
}

if [ "$1" = "start" ]
then
  echo Initializing
  wait_for_users-services
  echo Starting
  users-services
fi

exec "$@"