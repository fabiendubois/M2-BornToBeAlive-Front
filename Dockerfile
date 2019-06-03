FROM nginx:latest

EXPOSE 80
COPY ./default.conf /etc/nginx/conf.d/default.conf
RUN chown -R nginx /etc/nginx