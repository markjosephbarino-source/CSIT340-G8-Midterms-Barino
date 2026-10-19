import { useState } from "react";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import Guide from "./Component/Guide";

function App() {
  const [read, setRead] = useState(0);
  const [bookmarks, setBookmarks] = useState(0);

  function handleRead() {
    setRead(read + 1);
  }

  function handleBookmark() {
    setBookmarks(bookmarks + 1);
  }

  function handleReset() {
    setRead(0);
    setBookmarks(0);
  }

  return (
    <div className="grid min-h-screen grid-cols-[24rem_1fr] grid-rows-[auto_auto_1fr] bg-[#EDE9E6] text-[#5C4F4A]">
      <Sidebar author="Mark Barino" />

      <div className="flex items-end justify-between px-20 pt-10">
        <div>
          <Header />
          <div className="mt-6 flex gap-4">
            <button
              className="cursor-pointer rounded-lg bg-[#5C766D] px-8 py-3 text-xl font-bold text-[#EDE9E6]"
              onClick={handleRead}
            >
              Mark as read
            </button>
            <button
              className="cursor-pointer rounded-lg bg-[#C9996B] px-8 py-3 text-xl font-bold text-[#5C4F4A]"
              onClick={handleBookmark}
            >
              Bookmark
            </button>
            <button
              className="cursor-pointer rounded-lg border-2 border-[#5C4F4A] px-8 py-3 text-xl font-bold"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex gap-6">
          <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
            <p className="text-4xl font-bold text-[#5C766D]">{read}</p>
            <p className="mt-1 text-lg">Marked as read</p>
          </div>
          <div className="w-48 rounded-xl border-2 border-[#5C4F4A] py-4 text-center">
            <p className="text-4xl font-bold text-[#5C766D]">{bookmarks}</p>
            <p className="mt-1 text-lg">Bookmarks</p>
          </div>
        </div>
      </div>

      <Guide />
    </div>
  );
}

export default App;