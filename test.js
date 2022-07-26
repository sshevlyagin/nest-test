const fs = require('fs');
const fetch = require('make-fetch-happen');

function base64_encode(file) {
  // read binary data
  const bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  return new Buffer(bitmap).toString('base64');
}

const encodedImage = base64_encode('./big_bear.png');
const body = {
  input_png_blob_string: encodedImage,
};
const headers = {
  accept: 'application/json',
  'content-type': 'application/json;charset=UTF-8',
};
async function call() {
  const result = await fetch('http://localhost:3000/uploadAlt', {
    method: 'post',
    body: JSON.stringify(body),
    headers,
  });
  console.log(JSON.stringify(await result.json()));
}

(async () => await call())();
