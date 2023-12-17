#!/bin/bash
set -o allexport; source .release.env; set +o allexport
echo "📦 create release: $TAG $MESSAGE"

extism-js index.js -o ${WASM_FILE}

find . -name '.DS_Store' -type f -delete

git add .
git commit -m "📦 ${MESSAGE}"

git tag -a ${TAG} -m "${MESSAGE}"
git push origin ${TAG}

gh release create ${TAG} ./${WASM_FILE} --title "${TITLE}" --notes "${MESSAGE}"
