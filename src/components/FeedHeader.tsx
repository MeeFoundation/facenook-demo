import { Logo } from "./Logo";
import { Icon, ICONS } from "./Icon";

const TOP_NAV = [
  { label: "Home", d: ICONS.home, active: true },
  { label: "Friends", d: ICONS.friends, active: false },
  { label: "Reels", d: ICONS.reels, active: false },
  { label: "Groups", d: ICONS.groups, active: false },
  { label: "Gaming", d: ICONS.gaming, active: false },
];

export function FeedHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm flex items-center px-4 z-50">
      <div className="flex items-center gap-2 w-[280px]">
        <Logo size={40} />
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search Facenook"
            className="w-full bg-[#f0f2f5] rounded-full py-2 pl-10 pr-3 text-[15px] outline-none"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            <Icon d={ICONS.search} size={16} fill="#65676B" />
          </span>
        </div>
      </div>

      <nav className="flex-1 flex justify-center gap-1">
        {TOP_NAV.map((item) => (
          <button
            key={item.label}
            className={`px-8 py-4 rounded-lg hover:bg-[#f0f2f5] transition-colors ${item.active ? "text-[#1877f2] border-b-[3px] border-[#1877f2] rounded-b-none" : "text-[#65676B]"}`}
            title={item.label}
          >
            <Icon
              d={item.d}
              size={24}
              fill={item.active ? "#1877f2" : "#65676B"}
            />
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-2 w-[280px] justify-end">
        <button className="w-10 h-10 rounded-full bg-[#e4e6eb] flex items-center justify-center">
          <Icon d={ICONS.menu} size={20} fill="#050505" />
        </button>
        <button className="w-10 h-10 rounded-full bg-[#e4e6eb] flex items-center justify-center">
          <Icon
            d={ICONS.messenger}
            size={20}
            fill="#050505"
            viewBox="0 0 16 16"
          />
        </button>
        <button className="w-10 h-10 rounded-full bg-[#e4e6eb] flex items-center justify-center relative">
          <Icon d={ICONS.notifications} size={20} fill="#050505" />
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-[11px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
            19
          </span>
        </button>
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-sm font-bold text-white">
          PT
        </div>
      </div>
    </header>
  );
}
