FROM node:18-buster
ADD . /app
WORKDIR /app
RUN npm install && npm run build
CMD ["sh", "entrypoint.sh"]
