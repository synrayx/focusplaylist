const test = require('node:test');
const assert = require('node:assert');
const { RunnerHandler } = require('../src/features/feature-runner-0.js');

test('runner regression guard ' + '0', async () => {
 const result = await new RunnerHandler({ retries: 1 }).run('sample-0');
 assert.strictEqual(result.ok, true);
});