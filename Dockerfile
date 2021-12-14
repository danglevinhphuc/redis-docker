FROM amazonlinux:latest
CMD ["/bin/bash"]
WORKDIR /deploy
RUN yum install -y make gcc*
RUN curl --silent --location https://rpm.nodesource.com/setup_12.x | bash -
RUN yum -y install nodejs
RUN npm i -g yarn
RUN yarn global add serverless
COPY package.json ./
RUN yarn
COPY . .
RUN ["chmod", "+x", "install-redis.sh"]
CMD ./install-redis.sh ; sleep 2m
# COPY . .
# EXPOSE 1234:1234
# CMD ["npm", "start"]