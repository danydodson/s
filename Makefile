CIRCLE_BUILD_NUM ?= 0
USER = (CIRCLE_USERNAME)
TAG = $(CIRCLE_PROJECT_REPONAME)-$(shell git rev-parse --short HEAD)

P="\\033[34m[+]\\033[0m"

test:
	@echo "  $(P) test $(CIRCLE_USERNAME) $(CIRCLE_PROJECT_REPONAME)"

.PHONY: test