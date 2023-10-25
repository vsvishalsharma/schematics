export const preCommit = `#!/usr/bin/env sh
. "\$(dirname -- "\$0")/_/husky.sh"

npm run lint
docker compose -f docker-compose.ci.yaml --env-file env-example -p ci up --build --exit-code-from api
# npm test
# npm test:e2e -- --runInBank --passWithNoTests`;
