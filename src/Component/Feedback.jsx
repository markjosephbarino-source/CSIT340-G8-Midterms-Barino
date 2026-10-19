function Feedback(){
    <div className="mx-20 mt-2 flex items-center justify-between self-start rounded-xl bg-[#5C4F4A] p-6 text-[#EDE9E6]>

    <div className="flex items-center gap-4>

        <p className="text-2x1">Was this page helpful?</p>
        


        <button
              className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-2 text-x1 font-bold"
              onClick={handlNo}
            >
              No
        </button>

         <button
              className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-2 text-x1 font-bold"
              onClick={handleYes}
            >
              Yes
        </button>

        <button
              className="cursor-pointer rounded-lg bg-[#5C766D] px-6 py-2 text-x1 font-bold"
              onClick={handleClear}
            >
              Clear
        </button>



    </div>

}
export default Feedback