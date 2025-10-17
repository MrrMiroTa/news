import React from "react";

function Pagination({ currentPage, totalPages, onPrev, onNext }) {
  const disablePrev = currentPage === 1;
  const disableNext = currentPage === totalPages;
  return (
    <div className="inline-flex items-center gap-3">
      <button
        onClick={onPrev}
        disabled={disablePrev}
        className={`px-4 py-2 rounded-md text-sm font-medium transition ${
          disablePrev
            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
            : "bg-white shadow-sm hover:bg-slate-50"
        }`}
      >
        Previous
      </button>

      <div className="text-sm text-slate-600">
        Page {currentPage} of {totalPages}
      </div>

      <button
        onClick={onNext}
        disabled={disableNext}
        className={`px-4 py-2 rounded-md text-sm font-medium transition ${
          disableNext
            ? "bg-slate-200 text-slate-400 cursor-not-allowed"
            : "bg-blue shadow-sm hover:bg-slate-50"
        }`}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
