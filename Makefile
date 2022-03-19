deploy_dev:
	docker run --name grover -v $(PWD):/app -it -d -w /app -p 3006:3000 node:16.14.0
	docker exec grover yarn install
start:
	docker exec grover yarn start
install:
	docker exec grover yarn install