import React from "react";

function Category({ category, onCategoryChange }) {
  const categories = [
    { id: "general", name: "General" },
    { id: "business", name: "Business" },
    { id: "entertainment", name: "Entertainment" },
    { id: "health", name: "Health" },
    { id: "science", name: "science" },
    { id: "sports", name: "Sports" },
    { id: "technology", name: "Technology" },
  ];
  return (
    <nav aria-label="Categories">
      <div className="flex flex-wrap gap-2  ">
        {categories.map((cat) => (
          <button
            onClick={() => onCategoryChange(cat.id)}
            className={`cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 
                 ${
              category === cat.id
                ? "bg-brand text-white ring-2 ring-brand/30"
                : "bg-white text-slate-700 hover:bg-slate-50"
            }`}
            key={cat.id}
          >
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Category;
