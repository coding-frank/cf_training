import axios from "axios";
import { ALBUMS_API_URL, PHOTOS_API_URL } from "../config/variables";

export const getAlbums = (userId) =>
    axios
        .get(ALBUMS_API_URL + "?userId=" + userId)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });

export const getPhotos = (albumId) =>
    axios
        .get(PHOTOS_API_URL + "?albumId=" + albumId)
        .then((response) => response.data)
        .catch((error) => {
            console.log(error);
        });
