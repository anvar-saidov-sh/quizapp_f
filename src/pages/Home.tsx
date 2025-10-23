import { useEffect, useState } from "react";

declare global {
  interface Window {
    Telegram: any;
  }
}

interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
}

const tg = window.Telegram?.WebApp;

const Home = () => {
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (!tg) return;

    tg.ready();
    tg.expand();

    const currentTheme = tg.colorScheme === "dark" ? "dark" : "light";
    setTheme(currentTheme);

    tg.onEvent("themeChanged", () => {
      setTheme(tg.colorScheme === "dark" ? "dark" : "light");
    });

    const userData = tg.initDataUnsafe?.user;
    if (userData) {
      setUser(userData);
    } else {
      setUser({
        id: 1,
        first_name: "Local",
        last_name: "User",
        username: "dev_mode",
      });
    }
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 ${
        theme === "light" ? "bg-white text-slate-900" : "bg-slate-900 text-slate-100"
      }`}
    >
      <div
        className={`rounded-2xl shadow-lg p-8 w-80 ${
          theme === "light" ? "bg-gray-100" : "bg-slate-800"
        }`}
      >
        <div className="flex flex-col items-center">
          {user?.photo_url ? (
            <img
              src={user.photo_url}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4 border-2 border-blue-500"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl mb-4">
              {user?.first_name?.[0] ?? "?"}
            </div>
          )}
          <h1 className="text-xl font-semibold mb-1">
            {user?.first_name} {user?.last_name}
          </h1>
          <p className="text-gray-500">@{user?.username}</p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            className={`w-full py-2 rounded-lg font-medium ${
              theme === "light"
                ? "bg-blue-700 text-white hover:bg-blue-800"
                : "bg-blue-500 text-white hover:bg-blue-400"
            } transition-colors`}
            onClick={() => tg.sendData("User clicked Start Quiz")}
          >
            Start Quiz
          </button>

          <button
            className={`w-full py-2 rounded-lg font-medium ${
              theme === "light"
                ? "bg-gray-300 text-gray-800 hover:bg-gray-400"
                : "bg-slate-700 text-gray-200 hover:bg-slate-600"
            } transition-colors`}
            onClick={() => tg.close()}
          >
            Close App
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
