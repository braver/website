build:
	npm install
	npx @11ty/eleventy

lint:
	npx eslint

clean:
	rm -rf _site/*

serve:
	open http://localhost:8080/
	npx @11ty/eleventy --serve --quiet
