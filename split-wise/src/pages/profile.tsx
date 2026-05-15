import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/input";

function ProfilePage() {
  const navigate = useNavigate();
  const savedUser = JSON.parse(localStorage.getItem("spenvaUser") || "{}");

  const [profileName, setProfileName] = useState(savedUser.profileName || "");
  const [phone, setPhone] = useState(savedUser.phone || "");
  const [currency, setCurrency] = useState(savedUser.currency || "INR");

  const handleSubmit = () => {
    localStorage.setItem(
      "spenvaUser",
      JSON.stringify({
        ...savedUser,
        profileName,
        phone,
        currency,
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
       <h2 className="text-2xl font-bold text-center text-[#0f3f4a] mb-6">

          Profile Settings
        </h2>

        <div className="flex flex-col gap-4">
          <Input
            name="profileName"
            type="text"
            placeholder="Profile name"
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            required
          />

          <Input
            name="phone"
            type="text"
            placeholder="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
          >
            <option value="INR">INR - Indian Rupee</option>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
          </select>
        </div>

        <div className="mt-6">
          <Button label="Save Profile" onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

