FROM hocnguyen90/serverless-build:0.0.1
COPY package.json ./
RUN yum install nodejs -y
RUN yarn
COPY . .
EXPOSE 1234:1234
CMD ["npm", "start"]