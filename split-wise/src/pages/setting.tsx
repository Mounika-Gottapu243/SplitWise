import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/input";

function ProfileSettings() {
  const navigate = useNavigate();
  const savedUser = JSON.parse(localStorage.getItem("spenvaUser") || "null") as {
    name?: string;
    profileName?: string;
    email?: string;
  } | null;

  const [profileName, setProfileName] = useState(
    savedUser?.profileName || savedUser?.name || "",
  );
  const [currency, setCurrency] = useState("INR");

  if (!savedUser) {
    return <Navigate to="/login" replace />;
  }

  const handleSave = () => {
    localStorage.setItem(
      "spenvaUser",
      JSON.stringify({
        ...savedUser,
        name: profileName,
        profileName,
      }),
    );

    navigate("/dashboard");
  };

  const handleLogout = () => {
    localStorage.removeItem("spenvaUser");
    navigate("/login");
  };

  const initial = (profileName || "U").charAt(0).toUpperCase();

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <header className="bg-[#0f3f4a] text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link to="/dashboard" className="text-2xl font-bold">
            Spenva
          </Link>
          <Link to="/dashboard" className="text-sm font-semibold hover:text-slate-200">
            Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6">
        <h1 className="text-4xl font-semibold text-slate-900">Your account</h1>

        <section className="mt-6 grid gap-8 rounded-md bg-white p-6 shadow-sm md:grid-cols-[260px_1fr]">
          <div>
            <div className="flex h-52 w-full items-center justify-center rounded-md bg-gradient-to-br from-[#0f3f4a] to-[#0f766e] text-6xl font-bold text-white">
              {initial}
            </div>
            <p className="mt-3 text-sm text-slate-500">Profile avatar</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-5">
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-600">Your name</p>
                <Input
                  name="profileName"
                  type="text"
                  placeholder="Your name"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                />
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold text-slate-600">
                  Your email address
                </p>
                <p className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                  {savedUser.email || "No email saved"}
                </p>
              </div>

              <div>
                <p className="mb-1 text-sm font-semibold text-slate-600">Your password</p>
                <p className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
                  ********
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div>
                <p className="mb-2 text-sm font-semibold text-slate-600">
                  Your default currency
                </p>
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:border-[#0f766e]"
                >
                  <option value="INR">INR (Rs)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>

              <div>
                <p className="mb-2 text-sm font-semibold text-slate-600">Language</p>
                <select className="h-11 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none focus:border-[#0f766e]">
                  <option>English</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="primary" label="Save" onClick={handleSave} />
          <Button variant="secondary" label="Log out" onClick={handleLogout} />
        </div>
      </main>
    </div>
  );
}

export default ProfileSettings;