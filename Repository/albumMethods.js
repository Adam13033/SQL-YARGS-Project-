const Album = require("../models/album");
const { Sequelize } = require("sequelize");
const connection = require("../db/connection");



const addAlbum = async (album) => {
  if (!Album) {
    console.error("Please input a value!");
  }
  try {
    const artist = await Album.create({ name: yargsObj.title, ArtistId: artist.id });
  } catch (error) {
    console.error(error.message);
  }
};

const deleteAlbum = async (id) => {
  if (!id) {
    throw new Error(
      "An id value is required to delete from db, try --delete --id <id here>"
    );
  }
  let query = { id: id }
  try {
    return await Album.destroy({ where:  query});
  } catch (error) {
    console.error(error.message);
  }
};

//  npm start -- --updateArtist --id 1 --name "Imagine Dragons"
const updateAlbum = async (id, name) => {
  if (!id || !name) {
    throw new Error(
      "id and name are required, try --updateArtist --id <id here> --name <new name here>."
    );
  }
  const query = { id: id };
  const values = { name: name };
  console.log(values, query);
  try {
    return await Album.update(values, { where: query });
  } catch (error) {
    console.error(error.message);
  }
};

const listAlbum = async () => {
  try {
    await Album.findAll();
    if (listAlbum.length < 1) {
      console.log("Database is empty, there's nothing to return.");
      return;
    }
  } catch (error) {
    console.error(error.message);
  }
};

const findAlbum = async (id) => {
  if (!id) {
    throw new Error(
      "An id value must be entered. Try --findArtist --id <id here>"
    );
  }
  const query = { id: id };
  try {
    return console.log(await Album.findOne(query));
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {deleteAlbum, updateAlbum, listAlbum, findAlbum};

