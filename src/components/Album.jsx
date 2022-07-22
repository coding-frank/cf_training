import React from "react";
import { useNavigate } from "react-router-dom";

function Album({ id, title }) {
    const navigate = useNavigate();

    return (
        <div className="album" onClick={() => navigate("/photos/" + id)}>
            {title}
        </div>
    );
}

export default Album;
