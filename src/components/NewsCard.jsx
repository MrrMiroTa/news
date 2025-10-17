import React from "react";

function NewsCard({ article, category }) {
  const title = article.title || "Untitled";
  const desc = article.description || "";
  const img = article.urlToImage;
  const source = article.source?.name;
  const displayCategory = category
    ? String(category)
        .toLowerCase()
        .replace(/(^|\s)\S/g, (t) => t.toUpperCase())
    : null;

  return (
    <article className=" bg-[#c2d7db]  rounded-md shadow-card overflow-hidden flex flex-col h-full">
      {/* badge at top of card */}
      {displayCategory && (
        <div className="px-4 pt-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 shadow">
            {displayCategory}
          </span>
        </div>
      )}

      <div className="relative mt-3">
        {img ? (
          <img className="news-card-img" src={img} alt={title} />
        ) : (
          <div className="w-full h-44 bg-slate-100 flex items-center justify-center text-slate-400">
            No image
          </div>
        )}
      </div>

      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-lg font-semibold text-slate-900 line-clamp-2">
          {title}
        </h2>

        {source && (
          <span className="text-xs text-slate-500 mt-2">Source: {source}</span>
        )}

        <p className="text-sm text-slate-700 mt-3 flex-1 line-clamp-3">
          {desc}
        </p>

        <div className="mt-4">
          <a
            href={article.url}
            rel="noopener noreferrer"
            target="_blank"
            className="p-3 bg-blue-600 rounded-full inline-block text-sm font-medium text-brand hover:bg-blue-800"
          >
            Read more
          </a>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;
