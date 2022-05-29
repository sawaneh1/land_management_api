import fs from "fs";
import Image from "../models/image.js";

// Upload a Multipart-File then saving it to MySQL database
export const upload = (req, res) => {
  Image.create({
    type: req.file.mimetype,
    name: req.file.originalname,
    data: fs.readFileSync(__basedir + "/File/" + req.file.filename),
  }).then((image) => {
    try {
      fs.writeFileSync(__basedir + "/tmp/" + image.name, image.data);

      // exit node.js app
      res.json({ msg: "File uploaded successfully!", file: req.file });
    } catch (e) {
      console.log(e);
      res.json({ err: e });
    }
  });
};
