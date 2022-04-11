require("dotenv").config();
require("./db/connection");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const yargsObj = yargs(hideBin(process.argv)).argv;
const Artist = require("./models/artist");
const Album = require("./models/album");
const Song = require("./models/song");
const connection = require("./db/connection");


const {
  deleteArtist,
  updateArtist,
  listArtists,
  findArtist 
}= require("./Repository/aristMethods");
const {
  deleteAlbum,
  updateAlbum,
  listAlbum,
  findAlbum} = require("./Repository/albumMethods");
const { deleteSong, updateSong, listSongs, findSong } = require("./Repository/songMethods");



// Basically our main() function
(async (yargsObj) => {
  await Artist.sync({ alter: true });
  await Album.sync({ alter: true });
  await Song.sync({ alter: true });

  if (yargsObj.addArtist || yargsObj.addAlbum || yargsObj.addSong) {
    //npm start -- --addArtist --artistname "sfsafdgdfgdfjgdfjlfjld" --album --albumname "sfsdasdasdadasdasjslfsjdlfs" --song --songname "skdjfsljfsdsdfsdsdfsdfsd"

    const artist = await Artist.create({ name: yargsObj.artistname });
    console.log(artist);
    const album = await Album.create({
      name: yargsObj.albumname,
      ArtistId: artist.id,
    });
    console.log(album);
    const song = await Song.create({
      name: yargsObj.songname,
      AlbumId: album.id,
    });

  } if(yargsObj.deleteArtist) {
    await deleteArtist(yargsObj.id);
  } else if (yargsObj.updateArtist) {
    await updateArtist(yargsObj.id,  yargsObj.name);
  } else if (yargsObj.listArtists) {
    await listArtists();
    console.log(await listArtists());
  } else if (yargsObj.findArtist) {
    console.log(await findArtist(yargsObj.id, yargsObj.name));
  } else if (yargsObj.deleteAlbum) {
    await deleteAlbum(yargsObj.id);
  } else if (yargsObj.updateAlbum) {
    await updateAlbum(yargsObj.id, yargsObj.name);
  } else if (yargsObj.listAlbum) {
    await listAlbum();
    console.log(await listAlbum());
  } else if (yargsObj.findAlbum) {
    console.log(await findAlbum(yargsObj.id, yargsObj.name));
  } else if (yargsObj.deletesong) {
    await deleteSong(yargsObj.id);
  } else if (yargsObj.updateSong) {
    await updateSong(yargsObj.id, yargsObj.name);
  } else if (yargsObj.listSongs) {
    console.log(await listSongs());
  } else if (yargsObj.findSong) {
    await findSong(yargsObj.id)
  }

  // const deleteSong = async (id, title) => {
  //   const deleteS = await Song.destroy({ where: {id:id}});
  // }



})(yargsObj);

