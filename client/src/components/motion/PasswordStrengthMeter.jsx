import { Check, X } from "lucide-react";
import React from "react";

const PasswordCriteria = ({ password }) => {
  const criteria = [
    { label: "At least 6 Characters", met: password.length >= 6 },
    { label: "Contains upper case letter", met: /[A-Z]/.test(password) },
    { label: "Contains lower case letter", met: /[a-z]/.test(password) },
    { label: "Contains a Number", met: /\d/.test(password) },
    {
      label: "Contains a Speacial Character",
      met: /[^A-Za-z0-9]/.test(password),
    },
  ];

  return (
    <div className="mt-2 space-y-1">
      {criteria.map((item) => (
        <div key={item.label} className="flex items-center text-xs">
          {item.met ? (
            <Check className="size-4 text-green-500 mr-2" />
          ) : (
            <X className="size-4 text-gray-500 mr-2" />
          )}
          <span className={item.met ? "text-green-500" : "text-gray-400"}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

const PasswordStrengthMeter = ({ password }) => {
  const getStrength = (pass) => {
    let strength = 0;
    if (pass.length >= 6) strength++;
    if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
    if (pass.match(/\d/)) strength++;
    if (pass.match(/[^a-zA-Z\d]/)) strength++;
    return strength;
  };

  const strength = getStrength(password);
  const getTextStrength = (strength) => {
    if (strength === 0) return "Very Weak !!";
    if (strength === 1) return "Weak !";
    if (strength === 2) return "Good";
    if (strength === 3) return "Perfect";
    return "Strong";
  };
  const getColor = (strength) => {
    if (strength === 0) return "bg-red-500";
    if (strength === 1) return "bg-orange-500";
    if (strength === 2) return "bg-yellow-500";
    if (strength === 3) return "bg-green-500";
    return "bg-green-500";
  };
  return (
    <div className="mt-2">
      <div className="flex justify-between items-center mb-1 ">
        <span className="text-xs text-gray-400">Password Strength</span>
        <span className="text-xs text-gray-400">
          {getTextStrength(strength)}
        </span>
      </div>
      <div className="flex space-x-1">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className={`h-1 w-1/4 rounded-full transition-colors duration-300 
            ${index < strength ? getColor(strength) : "bg-gray-600"}
        `}
          />
        ))}
      </div>
      <PasswordCriteria password={password} />
    </div>
  );
};

export default PasswordStrengthMeter;
