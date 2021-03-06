install:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

link:
	npm link

test:
	npx jest

test-coverage:
	npx -n '--experimental-vm-modules  --no-warnings' jest --coverage