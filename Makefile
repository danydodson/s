# CIRCLE_BUILD_NUM ?= 0
# TAG = 0.0.$(CIRCLE_PROJECT_REPONAME)-$(shell git rev-parse --short HEAD)

TAG = $(CIRCLE_PROJECT_REPONAME):${CIRCLE_COMMIT_HASH}

P="\\033[34m[+]\\033[0m"

test:
	@echo "  $(P) test "

.PHONY: test