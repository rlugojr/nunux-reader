# Nunux Reader Docker image.
#
# VERSION 0.0.1
#
# BUILD:  docker build --rm -t ncarlier/reader .

FROM ncarlier/nodejs

MAINTAINER Nicolas Carlier <https://github.com/ncarlier>

# Port
EXPOSE 3000

# Add files
ADD . /opt/reader
WORKDIR /opt/reader
RUN chown node.node -R /opt/reader

# Def. user
USER node
ENV HOME /home/node

# Install App
RUN npm install

ENTRYPOINT ["/usr/bin/npm"]

CMD ["start"]