FROM hocnguyen90/serverless-build:0.0.1
COPY package.json ./
RUN yarn
COPY . .