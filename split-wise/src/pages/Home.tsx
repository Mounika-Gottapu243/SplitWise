import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-between px-10 py-4 bg-[#0f3f4a] shadow-md">
        <div>
          <p className="text-left text-4xl font-bold tracking-tight text-white">
            SPENVA
          </p>
        </div>

        <div className="flex gap-4">
          <Button label="Login" onClick={() => navigate("/login")} />
          <Button label="Signup" onClick={() => navigate("/login", { state: { signup: true } })} />
        </div>
      </div>

      <main className="min-h-screen p-10 bg-slate-100">
        <h1 className="text-5xl font-bold text-center text-[#0f3f4a]">
          Welcome to Spenva
        </h1>

        <p className="text-center text-black mt-4 font-bold">
          Split expenses with your friends and family easily.
        </p>
        <p className="text-center text-black mt-2 font-bold">
          Sign up now to get started!
        </p>
        <p className="text-center text-black mt-2 font-bold">
          Already have an account? Log in to manage your expenses.
        </p>

        <div className="text-center py-4 mt-10 font-bold">
          <Button
            label="Sign Up"
            onClick={() => navigate("/login", { state: { signup: true } })}
          />
        </div>
      </main>
    </>
  );
};

export default HomePage;
