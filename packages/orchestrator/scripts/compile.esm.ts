import { build } from 'esbuild'

import entryPoints from './glob'

build({
  entryPoints,
  format: 'esm',
  outdir: 'dist/es',
}).then(() => {
  console.log('✓ es module')
}).catch(console.error)
