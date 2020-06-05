FROM postgres:alpine

COPY init.sql /database/init.sql

# COPY bash/create-tables.sh /docker-entrypoint-initdb.d/10-create-tables.sh
