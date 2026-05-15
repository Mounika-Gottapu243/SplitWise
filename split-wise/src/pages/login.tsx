import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/input";

interface Form {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function LoginPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    localStorage.setItem(
      "spenvaUser",
      JSON.stringify({
        name: form.name,
        email: form.email,
      })
    );

    navigate("/profile");
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <header className="bg-[#0f3f4a] text-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/login" className="text-2xl font-bold">
            Spenva
          </Link>
        </div>
      </header>

      <section className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4 py-10">
        <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0f3f4a] text-2xl font-bold text-white">
              S
            </div>

            <h1 className="text-3xl font-bold text-slate-900">
              {isLogin ? "Welcome back" : "Create account"}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Manage shared expenses with friends.
            </p>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {!isLogin && (
              <Input
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            )}

            <Input
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            {!isLogin && (
              <Input
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={form.confirmPassword}
                onChange={handleChange}
                required
              />
            )}

            <Button
              label={isLogin ? "Log In" : "Sign Up"}
              type="submit"
            />
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="font-semibold text-[#0f766e] hover:text-[#0f3f4a]"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>
      </section>
    </main>
  );
}

export default LoginPage;
