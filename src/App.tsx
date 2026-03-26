import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { ConfirmPage } from "./pages/ConfirmPage";
import { WelcomePage } from "./pages/WelcomePage";
import { FeedPage } from "./pages/FeedPage";

const currentYear = new Date().getFullYear();

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex justify-center px-4 py-5 pb-10 font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
      <div className="w-full max-w-[440px]">
        {children}
        <footer className="mt-8 border-t border-gray-200 pt-4">
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
            {["English (UK)", "Deutsch", "Magyar", "Bosanski", "Hrvatski", "More languages..."].map((lang) => (
              <a key={lang} href="#" className="text-xs text-gray-500 hover:underline">{lang}</a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-2.5 gap-y-1 mb-3">
            {["Sign up", "Log in", "Messenger", "Facenook Lite", "Video", "Privacy Centre", "About", "Create Page", "Developers", "Careers", "Cookies", "Terms", "Help"].map((link) => (
              <a key={link} href="#" className="text-xs text-gray-400 hover:underline">{link}</a>
            ))}
          </div>
          <p className="text-xs text-gray-400">Facenook &copy; {currentYear}</p>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/reg" element={<Layout><RegisterPage /></Layout>} />
        <Route path="/reg/confirm" element={<Layout><ConfirmPage /></Layout>} />
        <Route path="/reg/welcome" element={<Layout><WelcomePage /></Layout>} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </HashRouter>
  );
}
