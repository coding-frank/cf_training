import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getPhotos } from "../../api/albums";
import Photo from "../../components/Photo";
import ButtonGroup from "../../components/ButtonGroup";

const MAX_PHOTOS_PER_PAGE = 10;

function Photos() {
  const { albumId } = useParams();

  const [photos, setPhotos] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalPhotos, setTotalPhotos] = useState(0);

  const fetchPhotos = useCallback(async () => {
    const response = await getPhotos(albumId);

    setPhotos(response);
    setTotalPhotos(response.length);

    // calculate total pages
    if (response.length > 0) {
      setTotalPages(Math.ceil(response.length / MAX_PHOTOS_PER_PAGE));
    }
  }, []);

  useEffect(() => {
    fetchPhotos();
  }, []);

  if (!setPhotos) return <div>Loading...</div>;

  const EmptyAlbum = () => <p>The album is empty.</p>;

  const ShowAlbum = () => {
    const start = page > 1 ? (page - 1) * MAX_PHOTOS_PER_PAGE : 0;
    const end = page > 1 ? page * MAX_PHOTOS_PER_PAGE : 10;

    return photos
      .slice(start, end)
      .map(({ id, title, thumbnailUrl }) => (
        <Photo key={id} title={title} url={thumbnailUrl} />
      ));
  };

  return (
    <div className="albums">
      <h2>Photos</h2>

      <section>{totalPhotos === 0 ? <EmptyAlbum /> : <ShowAlbum />}</section>

      <ButtonGroup
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        totalPhotos={totalPhotos}
      />
    </div>
  );
}

export default Photos;
