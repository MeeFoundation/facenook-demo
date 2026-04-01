import { Icon, ICONS } from "./Icon";

interface Post {
  group: string | null;
  author: string;
  time: string;
  text: string;
  image: boolean;
}

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="bg-white rounded-lg shadow-sm mb-4">
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-white">
              {post.author[0]}
            </div>
            <div>
              {post.group && (
                <p className="text-[15px] font-semibold text-gray-800 leading-tight">
                  {post.group}
                </p>
              )}
              <p
                className={`text-[13px] ${post.group ? "text-gray-500" : "text-[15px] font-semibold text-gray-800"}`}
              >
                {post.author} · {post.time} ·{" "}
                <span className="text-gray-400">🌐</span>
              </p>
            </div>
          </div>
          <div className="flex gap-1 text-[#65676B]">
            <button className="hover:bg-[#f0f2f5] rounded-full w-8 h-8 flex items-center justify-center">
              <Icon
                d={ICONS.moreH}
                size={20}
                fill="#65676B"
                viewBox="0 0 20 20"
              />
            </button>
            <button className="hover:bg-[#f0f2f5] rounded-full w-8 h-8 flex items-center justify-center">
              <Icon
                d={ICONS.close}
                size={20}
                fill="#65676B"
                viewBox="0 0 20 20"
              />
            </button>
          </div>
        </div>
        <p className="mt-2 text-[15px] text-gray-800 whitespace-pre-line">
          {post.text}
        </p>
      </div>
      {post.image && (
        <div className="w-full h-[300px] bg-gradient-to-br from-blue-200 via-green-100 to-yellow-100 flex items-center justify-center text-gray-400 text-sm"></div>
      )}
      <div className="flex border-t border-gray-200 mx-3 py-1">
        <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg hover:bg-[#f0f2f5] text-sm text-[#65676B] font-medium">
          <Icon d={ICONS.like} size={18} fill="#65676B" viewBox="0 0 16 16" /> Like
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg hover:bg-[#f0f2f5] text-sm text-[#65676B] font-medium">
          <Icon d={ICONS.comment} size={18} fill="#65676B" /> Comment
        </button>
        <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg hover:bg-[#f0f2f5] text-sm text-[#65676B] font-medium">
          <Icon d={ICONS.share} size={18} fill="#65676B" /> Share
        </button>
      </div>
    </div>
  );
}
