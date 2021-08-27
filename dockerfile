FROM alpine:latest


RUN useradd xyz -u 1724 -G root;


RUN apk add --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.7/main/ nodejs=8.9.3-r1
RUN npm -g install --unsafe-perm=true --allow-root apiconnect



USER xyz

EXPOSE 3000

CMD sleep infinity






