build:
	docker build -t registry.hiiir.com/f2emock .

run:
	docker-compose up -d

log:
	docker-compose logs -f

stop:
	docker-compose stop

rm:
	docker-compose down