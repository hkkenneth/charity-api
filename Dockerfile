FROM   dockerfile/nodejs

EXPOSE  8080

ADD start.sh /start.sh

RUN chmod 0777 /start.sh

CMD ["/start.sh"]
