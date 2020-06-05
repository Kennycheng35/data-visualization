set -e

psql --username ${POSTGRES_USER} --dbname mydb -f /database/init.sql
