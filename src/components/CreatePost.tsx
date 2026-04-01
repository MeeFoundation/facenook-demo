export function CreatePost() {
  return (
    <>
      {/* Create post */}
      <div className="bg-white rounded-lg shadow-sm p-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
            AI
          </div>
          <button className="flex-1 bg-[#f0f2f5] rounded-full py-2.5 px-4 text-left text-[15px] text-gray-500 hover:bg-[#e4e6eb] transition-colors">
            What's on your mind, Paul?
          </button>
        </div>
        <div className="flex border-t border-gray-200 mt-3 pt-2">
          <button className="flex-1 flex items-center justify-center gap-2 py-1.5 rounded-lg hover:bg-[#f0f2f5] text-sm text-gray-600 font-medium">
            <span className="text-red-500">●</span> Live video
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-1.5 rounded-lg hover:bg-[#f0f2f5] text-sm text-gray-600 font-medium">
            <span className="text-green-500">●</span> Photo/video
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-1.5 rounded-lg hover:bg-[#f0f2f5] text-sm text-gray-600 font-medium">
            <span className="text-yellow-500">●</span> Feeling
          </button>
        </div>
      </div>

      {/* Create story */}
      <div className="bg-white rounded-lg shadow-sm p-3 mb-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#e7f3ff] flex items-center justify-center text-2xl text-[#1877f2]">
          +
        </div>
        <div>
          <p className="text-[15px] font-semibold text-gray-800">
            Create story
          </p>
          <p className="text-[13px] text-gray-500">
            Share a photo or write something.
          </p>
        </div>
      </div>
    </>
  );
}
