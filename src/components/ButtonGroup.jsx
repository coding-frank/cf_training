import React from "react";
import { useNavigate } from "react-router-dom";

function ButtonGroup({ totalPages, page, totalPhotos, setPage }) {
    const navigate = useNavigate();

    return (
        <div className="btn-group">
            {totalPhotos > 0 && (
                <button onClick={() => setPage(page - 1)} disabled={page < 1} className="btn">
                    prev
                </button>
            )}

            <button onClick={() => navigate("/albums")} className="btn">
                Overview
            </button>

            {totalPhotos > 0 && (
                <button onClick={() => setPage(page + 1)} disabled={page + 1 >= totalPages} className="btn">
                    next
                </button>
            )}
        </div>
    );
}

export default ButtonGroup;
