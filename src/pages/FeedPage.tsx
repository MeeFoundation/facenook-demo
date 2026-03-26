import iconFacenookAi from "../assets/icons/facenook-ai.webp";
import iconSprite from "../assets/icons/icons.webp";

const Icon = ({
  d,
  size = 20,
  fill = "currentColor",
  viewBox = "0 0 24 24",
}: {
  d: string | string[];
  size?: number;
  fill?: string;
  viewBox?: string;
}) => (
  <svg width={size} height={size} viewBox={viewBox} fill={fill}>
    {(Array.isArray(d) ? d : [d]).map((p, i) => (
      <path key={i} d={p} />
    ))}
  </svg>
);

const ICONS = {
  home: "M9.464 1.286C10.294.803 11.092.5 12 .5c.908 0 1.707.303 2.537.786.795.462 1.7 1.142 2.815 1.977l2.232 1.675c1.391 1.042 2.359 1.766 2.888 2.826.53 1.059.53 2.268.528 4.006v4.3c0 1.355 0 2.471-.119 3.355-.124.928-.396 1.747-1.052 2.403-.657.657-1.476.928-2.404 1.053-.884.119-2 .119-3.354.119H7.93c-1.354 0-2.471 0-3.355-.119-.928-.125-1.747-.396-2.403-1.053-.656-.656-.928-1.475-1.053-2.403C1 18.541 1 17.425 1 16.07v-4.3c0-1.738-.002-2.947.528-4.006.53-1.06 1.497-1.784 2.888-2.826L6.65 3.263c1.114-.835 2.02-1.515 2.815-1.977zM10.5 13A1.5 1.5 0 0 0 9 14.5V21h6v-6.5a1.5 1.5 0 0 0-1.5-1.5h-3z",
  friends: [
    "M12.496 5a4 4 0 1 1 8 0 4 4 0 0 1-8 0zm4-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-9 2.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm-2 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0zM5.5 15a5 5 0 0 0-5 5 3 3 0 0 0 3 3h8.006a3 3 0 0 0 3-3 5 5 0 0 0-5-5H5.5zm-3 5a3 3 0 0 1 3-3h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1zm12-9.5a5.04 5.04 0 0 0-.37.014 1 1 0 0 0 .146 1.994c.074-.005.149-.008.224-.008h4.006a3 3 0 0 1 3 3 1 1 0 0 1-1 1h-3.398a1 1 0 1 0 0 2h3.398a3 3 0 0 0 3-3 5 5 0 0 0-5-5H14.5z",
  ],
  reels: [
    "M10.996 12.132A1 1 0 0 0 9.5 13v4a1 1 0 0 0 1.496.868l3.5-2a1 1 0 0 0 0-1.736l-3.5-2z",
    "M12.075 1h-.15C9.632 1 7.81 1 6.38 1.192c-1.472.198-2.674.616-3.623 1.565-.949.95-1.367 2.15-1.565 3.623C1 7.81 1 9.632 1 11.925v.15c0 2.293 0 4.116.192 5.545.198 1.472.616 2.674 1.565 3.623.95.949 2.15 1.367 3.623 1.565C7.81 23 9.632 23 11.925 23h.15c2.293 0 4.116 0 5.545-.192 1.472-.198 2.674-.616 3.623-1.565.949-.95 1.367-2.15 1.565-3.623.192-1.43.192-3.252.192-5.545v-.15c0-2.293 0-4.116-.192-5.545-.198-1.472-.616-2.674-1.565-3.623-.95-.949-2.15-1.367-3.623-1.565C16.19 1 14.368 1 12.075 1zM4.172 4.172c.515-.516 1.224-.83 2.475-.998l.183-.023L8.113 7H3.132c.013-.121.027-.239.042-.353.168-1.25.482-1.96.998-2.475zM10.22 7 8.895 3.023C9.778 3 10.801 3 12 3c.642 0 1.234 0 1.78.004L15.114 7H10.22zm6.253 2h4.507c.02.86.02 1.848.02 3 0 2.385-.002 4.074-.174 5.353-.168 1.25-.482 1.96-.998 2.475-.515.516-1.224.83-2.475.998-1.28.172-2.968.174-5.353.174s-4.074-.002-5.353-.174c-1.25-.168-1.96-.482-2.475-.998-.516-.515-.83-1.224-.998-2.475C3.002 16.073 3 14.385 3 12c0-1.152 0-2.14.02-3h13.454zm.747-2-1.316-3.949c.537.026 1.016.065 1.448.123 1.25.168 1.96.482 2.475.998.516.515.83 1.224.998 2.475.015.114.03.232.042.353H17.22z",
  ],
  groups: [
    "M.5 12c0 6.351 5.149 11.5 11.5 11.5S23.5 18.351 23.5 12 18.351.5 12 .5.5 5.649.5 12zm2 0c0-.682.072-1.348.209-1.99a2 2 0 0 1 0 3.98A9.539 9.539 0 0 1 2.5 12zm.84-3.912A9.502 9.502 0 0 1 12 2.5a9.502 9.502 0 0 1 8.66 5.588 4.001 4.001 0 0 0 0 7.824 9.514 9.514 0 0 1-1.755 2.613A5.002 5.002 0 0 0 14 14.5h-4a5.002 5.002 0 0 0-4.905 4.025 9.515 9.515 0 0 1-1.755-2.613 4.001 4.001 0 0 0 0-7.824zM12 5a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm-2 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0zm11.291 1.01a9.538 9.538 0 0 1 0 3.98 2 2 0 0 1 0-3.98zM16.99 20.087A9.455 9.455 0 0 1 12 21.5c-1.83 0-3.54-.517-4.99-1.414a1.004 1.004 0 0 1-.01-.148V19.5a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v.438a1 1 0 0 1-.01.148z",
  ],
  gaming: [
    "M8 8a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2H9v2a1 1 0 1 1-2 0v-2H5a1 1 0 1 1 0-2h2V9a1 1 0 0 1 1-1zm8 2a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0zm-2 4a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z",
    "M.5 11a7 7 0 0 1 7-7h9a7 7 0 0 1 7 7v2a7 7 0 0 1-7 7h-9a7 7 0 0 1-7-7v-2zm7-5a5 5 0 0 0-5 5v2a5 5 0 0 0 5 5h9a5 5 0 0 0 5-5v-2a5 5 0 0 0-5-5h-9z",
  ],
  menu: "M18.5 1A1.5 1.5 0 0 0 17 2.5v3A1.5 1.5 0 0 0 18.5 7h3A1.5 1.5 0 0 0 23 5.5v-3A1.5 1.5 0 0 0 21.5 1h-3zm0 8a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 21.5 9h-3zm-16 8A1.5 1.5 0 0 0 1 18.5v3A1.5 1.5 0 0 0 2.5 23h3A1.5 1.5 0 0 0 7 21.5v-3A1.5 1.5 0 0 0 5.5 17h-3zm8 0A1.5 1.5 0 0 0 9 18.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm8 0a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3a1.5 1.5 0 0 0-1.5-1.5h-3zm-16-8A1.5 1.5 0 0 0 1 10.5v3A1.5 1.5 0 0 0 2.5 15h3A1.5 1.5 0 0 0 7 13.5v-3A1.5 1.5 0 0 0 5.5 9h-3zm0-8A1.5 1.5 0 0 0 1 2.5v3A1.5 1.5 0 0 0 2.5 7h3A1.5 1.5 0 0 0 7 5.5v-3A1.5 1.5 0 0 0 5.5 1h-3zm8 0A1.5 1.5 0 0 0 9 2.5v3A1.5 1.5 0 0 0 10.5 7h3A1.5 1.5 0 0 0 15 5.5v-3A1.5 1.5 0 0 0 13.5 1h-3zm0 8A1.5 1.5 0 0 0 9 10.5v3a1.5 1.5 0 0 0 1.5 1.5h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 13.5 9h-3z",
  messenger:
    "M.5 8a7.5 7.5 0 1 1 4.006 6.638.341.341 0 0 0-.236-.041l-2.193.534A1 1 0 0 1 .87 13.923l.534-2.193a.341.341 0 0 0-.04-.236A7.47 7.47 0 0 1 .5 8zm11.389-.907a.56.56 0 0 0-.79-.78L9.25 7.75 7.294 6.327a1 1 0 0 0-1.386.205L4.111 8.906a.56.56 0 0 0 .791.781L6.75 8.25l1.957 1.423a1 1 0 0 0 1.385-.205l1.797-2.375z",
  notifications:
    "M3 9.5a9 9 0 1 1 18 0v2.927c0 1.69.475 3.345 1.37 4.778a1.5 1.5 0 0 1-1.272 2.295h-4.625a4.5 4.5 0 0 1-8.946 0H2.902a1.5 1.5 0 0 1-1.272-2.295A9.01 9.01 0 0 0 3 12.43V9.5zm6.55 10a2.5 2.5 0 0 0 4.9 0h-4.9z",
  moreH:
    "M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0",
  close:
    "M15.543 3.043a1 1 0 1 1 1.414 1.414L11.414 10l5.543 5.542a1 1 0 0 1-1.414 1.415L10 11.414l-5.543 5.543a1 1 0 0 1-1.414-1.415L8.586 10 3.043 4.457a1 1 0 1 1 1.414-1.414L10 8.586l5.543-5.543z",
  user: "M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm-3 5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-4.5 10A4.5 4.5 0 0 1 9 12.5h6a4.5 4.5 0 0 1 4.5 4.5v.5a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 17.5V17z",
  memories:
    "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16zm-.5 3a1 1 0 0 0-1 1v4.414l2.293 2.293a1 1 0 0 0 1.414-1.414L12.5 11.586V8a1 1 0 0 0-1-1z",
  saved:
    "M5 2a2 2 0 0 0-2 2v17.586a1 1 0 0 0 1.707.707L12 15l7.293 7.293A1 1 0 0 0 21 21.586V4a2 2 0 0 0-2-2H5zm0 2h14v14.586l-6.293-6.293a1 1 0 0 0-1.414 0L5 18.586V4z",
  feeds:
    "M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v3A1.5 1.5 0 0 1 19.5 9h-15A1.5 1.5 0 0 1 3 7.5v-3zm2 .5v2h14V5H5zm-2 8.5A1.5 1.5 0 0 1 4.5 12H11a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 11 22H4.5A1.5 1.5 0 0 1 3 20.5v-7zm2 .5v6h5.5v-6H5zm10-1.5A1.5 1.5 0 0 1 16.5 12h3A1.5 1.5 0 0 1 21 13.5v7a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-7zm2 .5v6h2v-6h-2z",
  events:
    "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4zm0 2h16v2H4V6zm0 4h16v8H4v-8zm3-7a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1z",
  ads: "M3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3zm1 2h16v14H4V5zm3 3v8h2V5.5zm4 2v6h2V10zm4-1v7h2V9z",
  search:
    "M10 2a8 8 0 1 0 4.906 14.32l4.387 4.387a1 1 0 0 0 1.414-1.414l-4.387-4.387A8 8 0 0 0 10 2zm-6 8a6 6 0 1 1 12 0 6 6 0 0 1-12 0z",
  like: "M2.535 10.099A4.483 4.483 0 0 1 6.2 8h.6a4.48 4.48 0 0 1 3.665 1.899A4.483 4.483 0 0 1 14.13 8h.6c1.418 0 2.698.66 3.523 1.69.453.567.79 1.238.978 1.973.187.73.224 1.512.07 2.32-.238 1.252-.859 2.452-1.728 3.482A17.47 17.47 0 0 1 14.2 20.59l-.157.122a3.36 3.36 0 0 1-4.085 0L9.8 20.59a17.47 17.47 0 0 1-3.373-3.125c-.87-1.03-1.49-2.23-1.728-3.481a5.105 5.105 0 0 1 .07-2.321 4.525 4.525 0 0 1 1.766-1.564z",
  comment:
    "M12 2C6.477 2 2 6.145 2 11.243c0 2.907 1.517 5.499 3.876 7.192V22l3.372-1.85A11.27 11.27 0 0 0 12 20.486c5.523 0 10-4.145 10-9.243S17.523 2 12 2z",
  share:
    "M12 2.897l-7.071 7.071 1.414 1.414L11 6.726V16h2V6.726l4.657 4.656 1.414-1.414L12 2.897z",
};

const SpriteIcon = ({ index, size = 36 }: { index: number; size?: number }) => (
  <div
    style={{
      width: size,
      height: size,
      backgroundImage: `url(${iconSprite})`,
      backgroundSize: `${size}px auto`,
      backgroundPosition: `0 ${-index * size}px`,
      backgroundRepeat: "no-repeat",
    }}
  />
);

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

const POSTS = [
  {
    group: "New York Expat Community",
    author: "Hannah Lee",
    time: "6h",
    text: "Hello again expats 👋\nR... See more",
    image: true,
  },
  {
    group: null,
    author: "Diana Chen",
    time: "2h",
    text: "Just moved to a new apartment! The view is incredible 🏙️",
    image: false,
  },
  {
    group: "React Developers",
    author: "Erik Novak",
    time: "12h",
    text: "Has anyone tried the new React components library? Thoughts?",
    image: false,
  },
];

const TOP_NAV = [
  { label: "Home", d: ICONS.home, active: true },
  { label: "Friends", d: ICONS.friends, active: false },
  { label: "Reels", d: ICONS.reels, active: false },
  { label: "Groups", d: ICONS.groups, active: false },
  { label: "Gaming", d: ICONS.gaming, active: false },
];

export function FeedPage() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm flex items-center px-4 z-50">
        <div className="flex items-center gap-2 w-[280px]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
            <circle cx="6" cy="12" r="5" stroke="#1877f2" strokeWidth="2" />
            <circle cx="18" cy="12" r="5" stroke="#1877f2" strokeWidth="2" />
          </svg>
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

      <div className="flex pt-14">
        {/* Left sidebar */}
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

        {/* Main feed */}
        <main className="flex-1 max-w-[590px] mx-auto py-6 px-4">
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

          {/* Posts */}
          {POSTS.map((post, i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm mb-4">
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
                  <Icon d={ICONS.like} size={18} fill="#65676B" /> Like
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg hover:bg-[#f0f2f5] text-sm text-[#65676B] font-medium">
                  <Icon d={ICONS.comment} size={18} fill="#65676B" /> Comment
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg hover:bg-[#f0f2f5] text-sm text-[#65676B] font-medium">
                  <Icon d={ICONS.share} size={18} fill="#65676B" /> Share
                </button>
              </div>
            </div>
          ))}
        </main>

        {/* Right sidebar - contacts */}
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
      </div>
    </div>
  );
}
