import { FeedHeader } from "../components/FeedHeader";
import { LeftSidebar } from "../components/LeftSidebar";
import { RightSidebar } from "../components/RightSidebar";
import { CreatePost } from "../components/CreatePost";
import { PostCard } from "../components/PostCard";

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

export function FeedPage() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
      <FeedHeader />

      <div className="flex pt-14">
        <LeftSidebar />

        <main className="flex-1 max-w-[590px] mx-auto py-6 px-4">
          <CreatePost />

          {POSTS.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </main>

        <RightSidebar />
      </div>
    </div>
  );
}
