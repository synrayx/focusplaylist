const test = require('node:test');
const assert = require('node:assert');
const { RenderHandler } = require('../src/features/feature-render-2.js');

test('render regression guard ' + '2', async () => {
 const result = await new RenderHandler({ retries: 1 }).run('sample-2');
 assert.strictEqual(result.ok, true);
});