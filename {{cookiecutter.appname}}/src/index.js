const Textile = require('@textile/js-http-client').Textile
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
    try {
      const schema = await textile.schemas.add(schemas.blob)
      blobThread = await textile.threads.add(
        'Blobs Test',
        schema.hash,
        key,
        'public',
        'notshared'
      )
    } catch (err) {
      console.log(err)
    }
  }
  try {
    const form = new FormData()
    form.append('file', Buffer.from('this is a test'), '/data')

    const file = await textile.files.addFile(form, 'caption', blobThread.id)
    console.log(file)
  } catch (err) {
    console.log(err)
  }
}

run()
