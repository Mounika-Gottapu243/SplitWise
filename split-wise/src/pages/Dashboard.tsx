import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const friends = [
  { name: "James", status: "owes you", amount: "Rs 800", color: "text-teal-700" },
  { name: "Mounika", status: "owes you", amount: "Rs 500", color: "text-teal-700" },
];

const groups = ["Goa Trip", "Roommates", "Office Lunch"];

function Dashboard() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("spenvaUser") || "null") as {
    name?: string;
    profileName?: string;
    email?: string;
  } | null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const profileName = user.profileName || user.name || "User";
  const initial = profileName.charAt(0).toUpperCase();

  const handleLogout = () => {
    localStorage.removeItem("spenvaUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-[#0f3f4a] text-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link to="/dashboard" className="text-2xl font-bold tracking-tight">
            Spenva
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-white/10"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d85f3d] text-sm font-bold text-white">
                {initial}
              </span>
              <span className="hidden text-sm font-semibold md:block">{profileName}</span>
            </button>

            {menuOpen && (
              <div className="absolute right-0 z-20 mt-2 w-52 rounded-md border border-slate-200 bg-white py-2 text-slate-700 shadow-lg">
                <Link
                  to="/setting"
                  className="block px-4 py-2 text-sm hover:bg-slate-100"
                >
                  Your account
                </Link>
                <button
                  type="button"
                  onClick={handleLogout}
                  className="block w-full px-4 py-2 text-left text-sm hover:bg-slate-100"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto grid max-w-6xl grid-cols-1 gap-0 bg-white md:grid-cols-[230px_1fr] lg:grid-cols-[230px_1fr_230px]">
        <aside className="border-b border-slate-200 bg-slate-50 px-4 py-5 md:min-h-[calc(100vh-60px)] md:border-b-0 md:border-r">
          <nav className="space-y-1">
            <Link className="block border-l-4 border-[#0f3f4a] bg-white px-3 py-2 font-semibold text-[#0f3f4a]" to="/dashboard">
              Dashboard
            </Link>
            <button className="block w-full px-3 py-2 text-left text-sm font-medium text-slate-600 hover:bg-white">
              Recent activity
            </button>
            <button className="block w-full px-3 py-2 text-left text-sm font-medium text-slate-600 hover:bg-white">
              All expenses
            </button>
          </nav>

          <div className="mt-8">
            <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-400">
              <span>Groups</span>
              <button className="text-[#0f3f4a]">+ add</button>
            </div>
            <div className="mt-3 space-y-2">
              {groups.map((group) => (
                <button
                  key={group}
                  className="block w-full rounded px-3 py-2 text-left text-sm text-slate-600 hover:bg-white"
                >
                  {group}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between text-xs font-bold uppercase text-slate-400">
              <span>Friends</span>
              <button className="text-[#0f3f4a]">+ add</button>
            </div>
            <div className="mt-3 space-y-2">
              {friends.map((friend) => (
                <button
                  key={friend.name}
                  className="block w-full rounded px-3 py-2 text-left text-sm text-slate-600 hover:bg-white"
                >
                  {friend.name}
                </button>
              ))}
            </div>
          </div>
        </aside>

        <section className="min-h-[calc(100vh-60px)] border-slate-200 lg:border-r">
          <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 md:flex-row md:items-center md:justify-between">
            <h1 className="text-3xl font-semibold text-slate-900">Dashboard</h1>
            <div className="flex gap-3">
              <Button label="Add an expense" />
              <Button label="Settle up" />
            </div>
          </div>

          <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-center">
            <div className="px-2 py-4">
              <p className="text-xs text-slate-500">total balance</p>
              <p className="font-semibold text-[#0f766e]">Rs 1,300</p>
            </div>
            <div className="border-x border-slate-200 px-2 py-4">
              <p className="text-xs text-slate-500">you owe</p>
              <p className="font-semibold text-slate-700">Rs 0</p>
            </div>
            <div className="px-2 py-4">
              <p className="text-xs text-slate-500">you are owed</p>
              <p className="font-semibold text-[#0f766e]">Rs 1,300</p>
            </div>
          </div>

          <div className="grid min-h-[420px] grid-cols-1 divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0">
            <div className="px-5 py-5">
              <h2 className="mb-8 text-lg font-semibold uppercase text-slate-500">You owe</h2>
              <p className="text-slate-500">You do not owe anything.</p>
            </div>

            <div className="px-5 py-5">
              <h2 className="mb-6 text-lg font-semibold uppercase text-slate-500">
                You are owed
              </h2>
              <div className="space-y-5">
                {friends.map((friend) => (
                  <div key={friend.name} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400">
                      {friend.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-slate-900">{friend.name}</p>
                      <p className="text-sm text-slate-500">
                        {friend.status} <span className={friend.color}>{friend.amount}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <aside className="hidden bg-slate-50 px-5 py-7 lg:block">
          <h2 className="text-sm font-bold uppercase text-slate-500">Spenva on the go</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Track shared balances, add IOUs, and settle up with friends from anywhere.
          </p>
          <div className="mt-5 rounded-md bg-[#0f3f4a] px-4 py-3 text-center text-sm font-bold text-white">
            Mobile app later
          </div>
        </aside>
      </main>
    </div>
  );
}

export default Dashboard;