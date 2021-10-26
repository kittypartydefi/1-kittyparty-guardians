//Pre requisite you need IPFS running in ur local
const IPFS = require("ipfs-core");
const fs = require("fs");
const run = async () => {
  const ipfs = await IPFS.create();

  const array = [];
  for (let i = 0; i < 10; i++) {
    const data = fs.readFileSync("../assets/ipfs/" + i + ".png");
    array.push({ path: "guardian/" + i + ".png", content: data });
  }

  const results = await ipfs.addAll(array, { wrapWithDirectory: true });

  for await (let file of results) {
    console.log(file.path);

    if (file.path == "guardian") {
      const { cid } = file;
      console.log("The root folder is :", cid);
      await storeMetadataURI(ipfs, cid);
    }
  }

  process.exit(0);
};

const storeMetadataURI = async (ipfs, imageURI) => {

  const array = [];
  for (let i = 0; i < 10; i++) {
    const data = fs.readFileSync("../assets/ipfs/" + i + ".json");
    const jsonMetadata = JSON.parse(data);
    jsonMetadata["image"] =
      "https://ipfs.io/ipfs/" + imageURI + "/" + i + ".png";
      console.log(jsonMetadata);
    array.push({ path: "guardian/" + i, content: JSON.stringify(jsonMetadata) });
  }
  const results = await ipfs.addAll(array, { wrapWithDirectory: true });

  for await (let file of results) {
    console.log(file);

    if (file.path == "guardian") {
      const { cid } = file;
      console.log("The root folder for the metadata uri is :", cid);
    }
  }
};

run();
