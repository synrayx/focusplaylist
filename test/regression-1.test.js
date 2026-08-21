const test = require('node:test');
const assert = require('node:assert');
const { FormatHandler } = require('../src/features/feature-format-1.js');

test('format regression guard ' + '1', async () => {
 const result = await new FormatHandler({ retries: 1 }).run('sample-1');
 assert.strictEqual(result.ok, true);
});