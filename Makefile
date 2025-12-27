.PHONY: up down git-sync rebuild

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
