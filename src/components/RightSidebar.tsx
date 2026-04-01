import { Icon, ICONS } from "./Icon";

const CONTACTS = [
  "Alice Johnson",
  "Bob Smith",
  "Carlos Rivera",
  "Diana Chen",
  "Erik Novak",
  "Fiona O'Brien",
  "George Kim",
  "Hannah Lee",
];

export function RightSidebar() {
  return (
    <aside className="w-[280px] fixed top-14 right-0 bottom-0 overflow-y-auto p-4 hidden xl:block">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-[17px] font-semibold text-[#65676B]">
          Contacts
        </h3>
        <div className="flex gap-1">
          <button className="hover:bg-[#e4e6eb] rounded-full w-8 h-8 flex items-center justify-center">
            <Icon d={ICONS.search} size={16} fill="#65676B" />
          </button>
          <button className="hover:bg-[#e4e6eb] rounded-full w-8 h-8 flex items-center justify-center">
            <Icon
              d={ICONS.moreH}
              size={16}
              fill="#65676B"
              viewBox="0 0 20 20"
            />
          </button>
        </div>
      </div>
      {CONTACTS.map((name) => (
        <a
          key={name}
          href="#"
          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#e4e6eb] transition-colors no-underline"
        >
          <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold text-white relative">
            {name[0]}
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
          </div>
          <span className="text-[15px] font-medium text-gray-800">
            {name}
          </span>
        </a>
      ))}

      <div className="border-t border-gray-300 mt-4 pt-4">
        <h3 className="text-[17px] font-semibold text-[#65676B] mb-3">
          Group chats
        </h3>
        <a
          href="#"
          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#e4e6eb] transition-colors no-underline"
        >
          <div className="w-9 h-9 rounded-full bg-[#e4e6eb] flex items-center justify-center text-xl text-gray-600">
            +
          </div>
          <span className="text-[15px] font-medium text-gray-800">
            Create group chat
          </span>
        </a>
      </div>
    </aside>
  );
}
