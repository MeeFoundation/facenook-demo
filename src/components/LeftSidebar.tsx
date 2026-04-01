import iconFacenookAi from "../assets/icons/facenook-ai.webp";
import { Icon, ICONS, SpriteIcon } from "./Icon";

const NAV_ITEMS: { label: string; icon: string | number | null }[] = [
  { label: "Paul Trevithick", icon: null },
  { label: "Facenook AI", icon: iconFacenookAi },
  { label: "Friends", icon: 22 },
  { label: "Memories", icon: 33 },
  { label: "Saved", icon: 14 },
  { label: "Groups", icon: 5 },
  { label: "Reels", icon: 3 },
  { label: "Feeds", icon: 31 },
  { label: "Events", icon: 18 },
  { label: "Ads Manager", icon: 11 },
  { label: "Play games", icon: 7 },
];

export function LeftSidebar() {
  return (
    <aside className="w-[280px] fixed top-14 left-0 bottom-0 overflow-y-auto p-2 hidden lg:block">
      <nav className="flex flex-col">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href="#"
            className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#e4e6eb] transition-colors no-underline"
          >
            <span className="w-9 h-9 flex items-center justify-center">
              {typeof item.icon === "number" ? (
                <SpriteIcon index={item.icon} size={36} />
              ) : item.icon ? (
                <img src={item.icon as string} alt="" className="w-9 h-9" />
              ) : (
                <Icon d={ICONS.user} size={24} fill="#65676B" />
              )}
            </span>
            <span className="text-[15px] font-medium text-gray-800">
              {item.label}
            </span>
          </a>
        ))}
        <a
          href="#"
          className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#e4e6eb] transition-colors no-underline"
        >
          <span className="w-9 h-9 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#65676B">
              <path d="M12 17a1.5 1.5 0 0 1-1.06-.44l-4.5-4.5a1.5 1.5 0 0 1 2.12-2.12L12 13.38l3.44-3.44a1.5 1.5 0 0 1 2.12 2.12l-4.5 4.5A1.5 1.5 0 0 1 12 17z" />
            </svg>
          </span>
          <span className="text-[15px] font-medium text-gray-800">
            See more
          </span>
        </a>
      </nav>
      <div className="mt-4 px-2 text-[11px] text-gray-400">
        Privacy · Terms · Advertising · Cookies · More
      </div>
    </aside>
  );
}
