FROM alpine:3.5

ADD docker-entrypoint.sh /

ADD workdir/users-services /usr/bin/users-services

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["start"]