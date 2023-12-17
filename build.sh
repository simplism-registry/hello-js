#!/bin/bash
set -o allexport; source .release.env; set +o allexport
extism-js index.js -i index.d.ts -o ${WASM_FILE}
ls -lh *.wasm
