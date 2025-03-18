import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolated must be true')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //TODO: add context methods
  })
} catch (error) {
  console.error(error)
}
