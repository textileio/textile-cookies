const Textile = require('@textileio/js-http-client').Textile
const FormData = require('form-data')

const key = 'BlobThreadKey'

const textile = new Textile({
  url: 'http://127.0.0.1',
  port: 40602
})

async function run () {
  let blobThread
  const threads = await textile.threads.list()
  for (const thread of threads.items) {
    if (thread.key === key) {
      blobThread = thread
    }
  }
  if (!blobThread) {
    const schemas = await textile.schemas.defaults()
    const schema = await textile.schemas.add(schemas.blob)
    blobThread = await textile.threads.add('Blobs Test', {
      key,
      type: 'public',
      sharing: 'notshared',
      schema
    })
  }

  const form = new FormData()
  form.append('file', Buffer.from('this is a test'), '/data')

  const file = await textile.files.addFile(blobThread.id, form, 'caption')
  console.log(file)
}

run()
