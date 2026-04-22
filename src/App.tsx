import { HashRouter, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { FeedPage } from "./pages/FeedPage";
import { ConfigurePage } from "./pages/ConfigurePage";
import { RegisterPage } from "./pages/RegisterPage";

const currentYear = new Date().getFullYear();

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex justify-center px-4 py-5 pb-10 font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
            <div className="w-full max-w-110">
                {children}
                <footer className="mt-8 border-t border-gray-200 pt-4">
                    <div className="flex flex-wrap gap-x-4 gap-y-2 mb-3">
                        {[
                            "English (UK)",
                            "Deutsch",
                            "Magyar",
                            "Bosanski",
                            "Hrvatski",
                            "More languages...",
                        ].map((lang) => (
                            <a
                                key={lang}
                                href="#"
                                className="text-xs text-gray-500 hover:underline"
                            >
                                {lang}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-x-2.5 gap-y-1 mb-3">
                        {[
                            "Sign up",
                            "Log in",
                            "Messenger",
                            "Facenook Lite",
                            "Video",
                            "Privacy Centre",
                            "About",
                            "Create Page",
                            "Developers",
                            "Careers",
                            "Cookies",
                            "Terms",
                            "Help",
                        ].map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="text-xs text-gray-400 hover:underline"
                            >
                                {link}
                            </a>
                        ))}
                    </div>
                    <p className="text-xs text-gray-400">
                        Facenook &copy; {currentYear}
                    </p>
                </footer>
            </div>
        </div>
    );
}

function RestartLink() {
    const { pathname } = useLocation();
    if (pathname === "/configure") return null;
    return (
        <Link
            to="/configure"
            className="fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-800 text-white text-sm rounded-full hover:bg-gray-700 transition-colors no-underline z-50"
        >
            Restart Demo
        </Link>
    );
}

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <HomePage />
                        </Layout>
                    }
                />
                <Route path="/loginpage" element={<LoginPage />} />
                <Route path="/regpage" element={<LoginPage mode="register" />} />
                <Route path="/regpage/form" element={<RegisterPage />} />
                <Route path="/login" element={<Navigate to="/configure" replace />} />
                <Route path="/reg" element={<Navigate to="/configure" replace />} />
                <Route path="/feed" element={<FeedPage />} />
                <Route path="/configure" element={<ConfigurePage />} />
            </Routes>
            <RestartLink />
        </HashRouter>
    );
}
