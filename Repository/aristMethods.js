const Artist = require("../models/artist");
const { Sequelize } = require("sequelize");
const connection = require("../db/connection");


// const addArtist = async (yargsObj) => {
//   if (!Artist) {
//     console.error("Please input a value!");
//   }
//   try {
//     const artist = await Artist.create({ name: yargsObj.title });
//   } catch (error) {
//     console.error(error.message);
//   }
// };

//npm start -- --deleteArtist --id <id here>
const deleteArtist = async (id) => {
  if (!id) {
    throw new Error(
      "An id value is required to delete from db, try --delete --id <id here>"
    );
  };
  try {
    return await Artist.destroy({where: {id: id}});
  } catch (error) {
    console.error(error.message);
  }
};

//  npm start -- --updateArtist --id 1 --name "Imagine Dragons"
const updateArtist = async (id, name) => {
  if (!id && !name) {
    throw new Error(
      "id and name are required, try --updateArtist --id <id here> --name <new name here>."
    );
  }
  const query = { id: id };
  const values = { name: name };
  console.log(values, query);
  try {
    return await Artist.update(values, { where: query });
  } catch (error) {
    console.error(error.message);
  }
};

//npm start -- --listArtists

const listArtists = async () => {
  try {
    await Artist.findAll();
    if (listArtists.length < 1) {
      console.error("Database is empty, there's nothing to return.");
      return;
    }
  } catch (error) {
    console.error(error.message);
  }
};

const findArtist = async (id) => {
  if (!id) {
    throw new Error(
      "An id value must be entered. Try --findArtist --id <id here>"
    );
  }
  const query = { id: id };
  try {
    return console.log(await Artist.findOne(query));
  } catch (error) {
    console.error(error.message);
  }
};


module.exports = { deleteArtist, updateArtist, listArtists, findArtist };
