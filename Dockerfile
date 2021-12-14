FROM alpine:3.14
WORKDIR /deploy
COPY package.json ./
RUN apk --no-cache add nodejs yarn --repository=http://dl-cdn.alpinelinux.org/alpine/edge/community
RUN apk add --update nodejs npm
RUN yarn 
RUN npm install -g serverless
COPY . .
RUN ["chmod", "+x", "install-redis.sh"]
CMD ./install-redis.sh ; sleep 2m