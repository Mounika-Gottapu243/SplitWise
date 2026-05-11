import { useState } from "react";
import Button from "../components/common/Button";
import Input from "../components/common/input";

interface Form {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function LoginPage() {
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

  const handleSubmit = () => {
    console.log(isLogin ? "Logging in:" : "Signing up:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center text-green-500 mb-6">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>

        <div className="flex flex-col gap-4">
          {!isLogin && (
            <Input
              name = "enter"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
            />
          )}
          <Input
            name ="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <Input
            name ="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          {!isLogin && (
            <Input
              name =" password"
              type="password"
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
            />
          )}
        </div>

        <div className="mt-6">
          <Button
            label={isLogin ? "Log In" : "Sign Up"}
            type="submit"
            onClick={handleSubmit}
          />
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-500 cursor-pointer font-semibold"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage;
