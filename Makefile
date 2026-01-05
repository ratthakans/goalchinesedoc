.PHONY: up down git-sync rebuild cert cert-init cert-renew

git-sync:
	git fetch
	git pull

up:
	docker compose up -d --build

down:
	docker compose down

rebuild:
	$(MAKE) git-sync
	$(MAKE) down
	$(MAKE) up

cert-init:
	mkdir -p ./certbot/conf/live/goalchinesedoc.com
	openssl req -x509 -nodes -newkey rsa:4096 -days 1 \
		-keyout ./certbot/conf/live/goalchinesedoc.com/privkey.pem \
		-out ./certbot/conf/live/goalchinesedoc.com/fullchain.pem \
		-subj '/CN=localhost'
	docker compose up -d nginx
	docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot \
		-d goalchinesedoc.com -d www.goalchinesedoc.com --force-renewal
	docker compose restart nginx

cert:
	docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d goalchinesedoc.com -d www.goalchinesedoc.com

cert-renew:
	docker compose run --rm certbot renew
	docker compose restart nginx