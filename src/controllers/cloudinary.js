const cloudinary = require('cloudinary').v2;
require('dotenv').config()

const {cloud_name, api_key, api_secret} = process.env

cloudinary.config({
    cloud_name: cloud_name,
    api_key: api_key,
    api_secret: api_secret
  });

  // Upload
  async function getCloudy (){

    const {resources} = await cloudinary.search.expression("folder:ecommerce").sort_by("public_id").execute()

    const result = resources.map((img) =>{ 
      return { public_id: img.public_id , secure_url: img.secure_url}
    })
  // The output url
  return console.log(result)
  }

  function deleteCloudy(imageName){
    const res = cloudinary.uploader.destroy(imageName)
    res.then((data) => {
        // console.log(data);
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });

      return console.log(imageName + 'images deleted')
  }

module.exports={
    getCloudy,
    deleteCloudy
}