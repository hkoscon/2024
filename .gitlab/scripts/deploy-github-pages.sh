#!/usr/bin/env bash

# if there is not repository URL for pages deploy, skip.
if [ -z $PAGES_REPOSITORY_URL ]; then
  echo "No PAGE_REPOSITORY_URL specified. Skip."
  exit 0
fi

# default of a few environment variables
if [ -z "$GIT_USER_NAME" ]; then
  GIT_USER_NAME="CI Auto Build"
fi
if [ -z "$GIT_USER_EMAIL" ]; then
  GIT_USER_EMAIL="info@hkoscon.org"
fi
if [ -z "$GIT_COMMIT_MESSAGE" ]; then
  GIT_COMMIT_MESSAGE="CI: Build of ${CI_COMMIT_SHA}"
else
  GIT_COMMIT_MESSAGE="$(echo -e "CI: ${GIT_COMMIT_MESSAGE}\n\n* Rebuild (${CI_COMMIT_SHA})")"
fi

# Commit the artifacts in public folder to gh-pages
# branch for direct GitHub deploy or mirroring deploy
# of GitHub Pages.

cd public
rm .gitignore

git init
git config user.name "$GIT_USER_NAME"
git config user.email "$GIT_USER_EMAIL"

git remote add origin "$PAGES_REPOSITORY_URL"
git fetch && git reset origin/gh-pages

touch .

git add -A .
git commit --allow-empty -m "$GIT_COMMIT_MESSAGE"
git push -q origin HEAD:gh-pages

rm -rf .git
