import React, { useCallback, useEffect, useState } from "react";

import { useContentful } from "../../lib/useContentful";
import { getAlbums } from "../../api/albums";
import { USER_ID } from "../../config/variables";
import Album from "../../components/Album";

function Albums() {
    const [fetchedData, setFetchedData] = useState(null);
    const [isLoading, isError, data, error] = useContentful({
        content_type: "hobbies",
    });

    const cleanUpData = useCallback((rawData) => {
        const cleanData = rawData.map((data) => {
            const { sys, fields } = data;
            const { id } = sys;

            return {
                id: id,
                title: fields.title,
            };
        });

        return cleanData[0];
    }, []);

    const fetchAlbums = useCallback(async () => {
        const response = await getAlbums(USER_ID);
        setFetchedData(response);
    }, []);

    useEffect(() => {
        fetchAlbums();
    }, []);

    if (isLoading || !data || !fetchedData) return <div className="album">Loading...</div>;
    if (isError) return <div className="album">Error: {error}</div>;

    const { title } = cleanUpData(data);

    return (
        <div className="albums">
            <h2>{title}</h2>
            <section>
                {fetchedData.map(({ id, title }) => (
                    <Album key={"album_" + id} title={title} id={id} />
                ))}
            </section>
        </div>
    );
}

export default Albums;
