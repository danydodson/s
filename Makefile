TAG = 0.0.$(CIRCLE_PROJECT_REPONAME)-$(shell git rev-parse --short HEAD)

P="\\033[34m[+]\\033[0m"

test:
	@echo "  $(P) test $(TAG)"

.PHONY: test