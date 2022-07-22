import React, { useCallback } from "react";

import { useContentful } from "../../lib/useContentful";
import { formatDatestringToLocale } from "../../functions";

function About() {
    const cleanUpData = useCallback((rawData) => {
        const cleanData = rawData.map((data) => {
            const { sys, fields } = data;
            const { id } = sys;

            return {
                id: id,
                title: fields.title,
                age: fields.age,
                company: fields.company,
                dateOfBirth: fields.dateOfBirth,
                aboutMe: fields.aboutMe,
            };
        });

        return cleanData[0];
    }, []);

    const [isLoading, isError, data] = useContentful({
        content_type: "about",
    });

    if (isLoading || !data) return <div>Loading...</div>;
    if (isError) return <div>Oops, something went wrong...</div>;

    const { title, aboutMe, age, company, dateOfBirth } = cleanUpData(data);

    return (
        <div className="about">
            <h2>{title}</h2>
            <section>
                <p>
                    <span className="about-age">
                        Age: {age} ({formatDatestringToLocale(dateOfBirth)})
                    </span>
                    , <span className="about-company">Company: {company}</span>
                </p>
                <i>“{aboutMe}“</i>
            </section>
        </div>
    );
}

export default About;
