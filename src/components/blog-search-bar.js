import { MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";
import Fuse from "fuse.js";
import Link from "next/link";

const BlogSearchBar = ({ blogs }) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const fuse = new Fuse(blogs, { keys: ["title", "description"] });

  return (
    <div className="ml-auto relative">
      <div className="flex text-sm pb-1 -mb-1 px-1 duration-150 border-b-2 border-transparent focus-within:border-violet-600">
        <input
          type="text"
          placeholder="Search for a blog ..."
          className="outline-none"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setResults(fuse.search(search));
          }}
        />
        <MagnifyingGlass size={18} />
      </div>

      {search ? (
        <div className="mt-2 min-w-[300px] w-max space-y-2 p-4 border-slate-200 border rounded-md shadow-lg shadow-slate-400/10 bg-white absolute right-0">
          <div className="text-sm font-medium pb-2 border-b text-slate-800 border-slate-100">
            Search results for "
            <span className="text-violet-600">{search}</span>"
          </div>
          {results.length > 0 ? (
            results.map((result) => (
              <div
                key={result.refIndex}
                className="border-b last:border-transparent border-slate-100 pb-4 pt-2 last:pb-2"
              >
                <Link
                  href={`/blog/${result.item.slug}`}
                  className="hover:text-violet-600 text-slate-800 text-sm font-medium truncate"
                >
                  {result.item.title}
                </Link>
                <p className="text-sm text-slate-700 font-light max-w-[50ch] truncate">
                  {result.item.description}
                </p>
              </div>
            ))
          ) : (
            <div className="py-4">
              <h1 className="text-center text-slate-700 font-medium text-sm">
                No blog found.
              </h1>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default BlogSearchBar;
