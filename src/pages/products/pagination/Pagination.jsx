import React from "react";
import "./Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
    const getPageNumbers = () => {
        const pages = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1, 2, 3);
            pages.push("...");
            pages.push(totalPages - 2, totalPages - 1, totalPages);
        }

        return pages;
    };

    const pages = getPageNumbers();

    return (
        <div className="pagination"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
            {/* Previous */}
            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
                className="pagination-button-previous"
                style={{
                    ...buttonStyle,
                    cursor: currentPage === 1 ? "default" : "pointer",
                }}
                aria-label="Previous"
            >
                ← Previous
            </button>

            {/* Page numbers */}
            {pages.map((page, index) =>
                page === "..." ? (
                    <button
                        key={`ellipsis-${index}`}
                        disabled
                        style={{
                            ...buttonStyle,
                            cursor: 'default',
                            color: "#888",
                            backgroundColor: "#eee",
                            pointerEvents: "none",
                            border: "1px solid #ccc",
                        }}
                    >
                        ...
                    </button>
                ) : (
                    <button
                        key={page}
                        onClick={() => onPageChange(page)}
                        style={{
                            ...buttonStyle,
                            backgroundColor: page === currentPage ? "#ddd" : "#eee",
                            color: page === currentPage ? "#444" : "#888",
                            cursor: page === currentPage ? "default" : "pointer",
                        }}
                        disabled={page === currentPage}
                    >
                        {page}
                    </button>
                )
            )}

            {/* Next */}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
                style={{
                    ...buttonStyle,
                    borderTopRightRadius: '6px',
                    borderBottomRightRadius: '6px',
                    backgroundColor: "#eee",
                    color: "#888",
                    cursor: currentPage === totalPages ? "default" : "pointer",
                }}
                aria-label="Next"
            >
                Next →
            </button>
        </div>
    );
}

const buttonStyle = {
    border: "1px solid #ccc",
    backgroundColor: "#eee",
    color: "#888",
    padding: "6px 12px",
    fontSize: "14px",
    userSelect: "none",
    margin: 0,
};

export default Pagination;

