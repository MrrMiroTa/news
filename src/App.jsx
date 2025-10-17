import { useEffect, useState } from "react";
import axios from "axios";
import Category from "./components/Category";
import NewList from "./components/NewsList";
import Pagination from "./components/Pagination";
import newicon from "./assets/news.png";
import Footer from "./components/Footer";

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("general");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const PAGE_SIZE = 20;

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `/api/news?category=${category}&page=${currentPage}`
      );
      console.log(response);
      const articles = response.data.articles || [];
      setNews(articles);
      setTotalResults(response.data.totalResults || 0);
      setTotalPages(Math.ceil((response.data.totalResults || 0) / PAGE_SIZE));
    } catch (err) {
      setError("Failed to fetch news.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category, currentPage]);

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setCurrentPage(1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-4 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-brand text-white flex items-center justify-center font-bold shadow cursor-pointer">
              <img src={newicon} alt="news" />
            </div>
            <h1 className="text-2xl text-blue-400 font-semibold">Uzita News</h1>
          </div>
          <div className="text-sm text-slate-600">
            Stay updated — curated headlines
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <div className="flex flex-col items-start md:items-center gap-3">
            <div className="w-full md:w-auto">
              <Category
                category={category}
                onCategoryChange={handleCategoryChange}
              />
            </div>
          </div>
        </div>

        <section>
          {loading && (
            <div className="py-20 flex items-center justify-center text-slate-500">
              Loading latest headlines...
            </div>
          )}
          {error && (
            <div className="p-6 bg-red-50 border border-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
          {!loading && !error && (
            <>
              <NewList articles={news} category={category} />
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPrev={handlePrev}
                    onNext={handleNext}
                  />
                </div>
              )}
            </>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
