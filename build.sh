#!/bin/bash
set -o allexport; source .release.env; set +o allexport
extism-js index.js -o ${WASM_FILE}
ls -lh *.wasm