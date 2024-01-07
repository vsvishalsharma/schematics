export const setup = `ARG ELASTIC_VERSION

# https://www.docker.elastic.co/
FROM docker.elastic.co/elasticsearch/elasticsearch:\${ELASTIC_VERSION}

ENTRYPOINT ["/entrypoint.sh"]
`;