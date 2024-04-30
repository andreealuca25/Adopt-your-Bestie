import React from "react";

const MemberBadge = ({ name, role, description, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
      {icon && (
        <img
          src={icon}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
      )}
      <div>
        <h3 className="text-lg font-semibold text-purple-400">{name}</h3>
        <p className="text-sm text-gray-600">{role}</p>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default MemberBadge;
