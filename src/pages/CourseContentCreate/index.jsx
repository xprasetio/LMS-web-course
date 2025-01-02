
export default function ManageContentCreatePage() {
  return (
    <>
    <div id="Breadcrumb" className="flex items-center gap-5 *:after:content-['/'] *:after:ml-5">
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Manage Course</span>
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Course</span>
                <span className="last-of-type:after:content-[''] last-of-type:font-semibold">Add Content</span>
            </div>
            <header className="flex items-center justify-between gap-[30px]">
                <div className="flex items-center gap-[30px]">
                    <div className="flex shrink-0 w-[150px] h-[100px] rounded-[20px] overflow-hidden bg-[#D9D9D9]">
                        <img src="/assets/images/thumbnails/th-1.png" className="w-full h-full object-cover" alt="thumbnail" />
                    </div>
                    <div>
                        <h1 className="font-extrabold text-[28px] leading-[42px]">Add Content</h1>
                        <p className="text-[#838C9D] mt-[1]">Give a best content for the course</p>
                    </div>
                </div>
            </header>
            <form action="manage-course-materi.html" className="flex flex-col w-[930px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="title" className="font-semibold">Content Title</label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img src="/assets/images/icons/note-favorite-black.svg" className="w-6 h-6" alt="icon" />
                        <input type="text" name="title" id="title" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent" placeholder="Write better name for your course" required />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="type" className="font-semibold">Select Type</label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img src="/assets/images/icons/crown-black.svg" className="w-6 h-6" alt="icon" />
                        <select name="type" id="type" className="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent">
                            <option value="" hidden>Choose content type</option>
                            <option value="" >test</option>
                            <option value="" >test</option>
                            <option value="" >test</option>
                        </select>
                        <img src="/assets/images/icons/arrow-down.svg" className="w-6 h-6" alt="icon" />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label htmlFor="video" className="font-semibold">Youtube Video ID</label>
                    <div className="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]">
                        <img src="/assets/images/icons/bill-black.svg" className="w-6 h-6" alt="icon" />
                        <input type="text" name="video" id="video" className="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent" placeholder="Write tagline for better copy" />
                    </div>
                </div>
                <div className="flex flex-col gap-[10px]">
                    <label className="font-semibold">Content Text</label>
                    <textarea name="content" id="content" className="w-full rounded-[10px] border border-[#CFDBEF] p-5 resize-none" placeholder="Write description for your course" rows="10"></textarea>
                </div>
                <div className="flex items-center gap-[14px]">
                    <button type="submit" className="w-full rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap">
                        Save as Draft
                    </button>
                    <button type="submit" className="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap">
                        Add Content Now
                    </button>
                </div>
            </form>
    </>
  )
}
