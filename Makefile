CIRCLE_BUILD_NUM ?= 0
TAG = 0.0.$(CIRCLE_BUILD_NUM)-$(shell git rev-parse --short HEAD)

P="\\033[34m[+]\\033[0m"

test:
	@echo "  $(P) test"

.PHONY: test