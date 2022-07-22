import React, { useCallback } from "react";

import { useContentful } from "../../lib/useContentful";

function Hero() {
    const cleanUpData = useCallback((rawData) => {
        const cleanData = rawData.map((data) => {
            const { sys, fields } = data;
            const { id } = sys;

            // console.log({ sys });
            // console.log({ fields });
            // console.log({ id });

            return {
                id: id,
                title: fields.title,
                description: fields.description,
                background: fields.background.fields.file.url,
            };
        });

        return cleanData[0];
    }, []);

    const [isLoading, isError, data, error] = useContentful({
        content_type: "hero",
    });

    if (isLoading || !data) return <div>Loading...</div>;
    if (isError) return <div>Error: {error}</div>;

    const { title, description, background } = cleanUpData(data);

    return (
        <div className="hero" style={{ backgroundImage: `url(${background})` }}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}

export default Hero;
