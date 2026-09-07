const fs = require('fs')
const s = fs.readFileSync('lib/content.ts', 'utf8')
let line = 1
let inStr = null
let inBlock = false
let inLine = false
const stack = []

function lineText(idx) {
  const st = s.lastIndexOf('\n', idx - 1) + 1
  let en = s.indexOf('\n', idx)
  if (en === -1) en = s.length
  return s.slice(st, en).trim().slice(0, 50)
}

for (let i = 0; i < s.length; i++) {
  const c = s[i]
  const n = s[i + 1]
  if (c === '\n') { line++; if (inLine) inLine = false }
  if (inLine) continue
  if (inBlock) {
    if (c === '*' && n === '/') { inBlock = false; i++ }
    continue
  }
  if (inStr) {
    if (c === '\\') { i++; continue }
    if (c === inStr) inStr = null
    continue
  }
  if (c === '/' && n === '/') { inLine = true; i++; continue }
  if (c === '/' && n === '*') { inBlock = true; i++; continue }
  if (c === "'" || c === '"' || c === '`') { inStr = c; continue }
  if (c === '{') { stack.push({ line: line, ctx: lineText(i) }) }
  else if (c === '}') { if (stack.length) stack.pop() }
}
console.log('UNMATCHED OPEN BRACES (' + stack.length + '):')
stack.forEach(function (o) { console.log('  line ' + o.line + '  ' + o.ctx) })