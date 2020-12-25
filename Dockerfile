FROM alpine:3.5

ADD docker-entrypoint.sh /

ADD workdir/contacts /usr/bin/contacts

ENTRYPOINT ["/docker-entrypoint.sh"]

CMD ["start"]