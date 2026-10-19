import { useState } from "react";
import Sidebar from "./Component/Sidebar";
import Header from "./Component/Header";
import Guide from "./Component/Guide";
import Docs from "./Component/Docs";
import Section from "./Component/Section";
import StatCard from "./Component/StatCard";
import Feedback from "./Component/Feedback";

function App() {
  const [yes, setYes] = useState(0);
  const [no, setNo] = useState(0);
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

  function handleYes() {
    setYes(yes + 1);
  }

  function handleNo() {
    setNo(no + 1);
  }


  function handleClear() {
    setYes(0);
    setNo(0);
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

      <main className="px-20 pt-4">
        <Section title="Create" description="Creates an empty Git repository in the current folder." command="git init"/>
        <Section title="Rename" description="Sends the main branch to the remote named origin." command="git branch -M main"/>
        <Section title="Upload" description="Creates an empty Git repository in the current folder." command="git push -u origin main"/>
        <Section title="Connect" description="Links this local project to your forked repository on GitHub, under the name origin." command="git clone https://github.com/markjosephbarino-source/CSIT340-G8-Midterms-Barino.git"/>
      </main>

      
      


    </div>
    
  );
}

export default App;