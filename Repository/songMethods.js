const Song = require("../models/song");
const { Sequelize } = require("sequelize");
const connection = require("../db/connection");


// const addSong = async (yargsObj) => {
//   if (!Song) {
//     console.error("Please input a value!");
//   }
//   try {
//     const Song = await Song.create({ name: yargsObj.title });
//   } catch (error) {
//     console.error(error.message);
//   }
// };

//npm start -- --deleteSong --id <id here>
const deleteSong = async (id) => {
  if (!id) {
    throw new Error(
      "An id value is required to delete from db, try --delete --id <id here>"
    );
  };
  try {
    return await Song.destroy({where: {id: id}});
  } catch (error) {
    console.error(error.message);
  }
};

//  npm start -- --updateSong --id 1 --name "Imagine Dragons"
const updateSong= async (id, name) => {
  if (!id || !name) {
    throw new Error(
      "id and name are required, try --updateSong --id <id here> --name <new name here>."
    );
  }
  const query = { id: id };
  const values = { name: name };
  console.log(values, query);
  try {
    return await Song.update(values, { where: query });
  } catch (error) {
    console.error(error.message);
  }
};

//npm start -- --listSongs

const listSongs = async () => {
  try {
    await Song.findAll();
    if (listSongs.length < 1) {
      console.error("Database is empty, there's nothing to return.");
      return;
    }
  } catch (error) {
    console.error(error.message);
  }
};

const findSong = async (id) => {
  if (!id) {
    throw new Error(
      "An id value must be entered. Try --findSong --id <id here>"
    );
  }
  const query = { id: id };
  try {
    return console.log(await Song.findOne(query));
  } catch (error) {
    console.error(error.message);
  }
};


module.exports = { deleteSong, updateSong, listSongs, findSong };
