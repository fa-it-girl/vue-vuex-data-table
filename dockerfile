FROM --platform=linux/amd64 node:18 AS ui-build

WORKDIR /app
COPY . .

ARG PORT=3000
ENV PORT $PORT

EXPOSE 3000

CMD ["node", "server/index.js"]
