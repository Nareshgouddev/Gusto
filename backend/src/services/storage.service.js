const ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: "public_5mXDxIOCVxnm87jIVyr6I7HuJPc=",
  privateKey: "private_nJmJyRsU33ICss59tESI89oqEXs=",
  urlEndpoint: "https://ik.imagekit.io/ihetkdnj4",
});
// const imagekit = new ImageKit({
//   publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
//   privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
//   urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
// });

async function uploadFile(file, fileName) {
  // Ensure the filename includes proper extension
  if (!fileName.endsWith(".mp4")) {
    fileName += ".mp4"; // Add extension
  }
}

async function uploadFile(file, fileName) {
  const result = await imagekit.upload({
    file: file, // required
    fileName: fileName, // required
  });

  return result; // Return the URL of the uploaded file
}

module.exports = {
  uploadFile,
};
