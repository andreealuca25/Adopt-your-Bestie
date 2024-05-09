import React, { useState, useEffect } from "react";
import MemberBadge from "./MemberBadge";
import axios from "axios";

const AboutUs = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  useEffect(() => {
    const fetchTeamMembers = async () => {
      axios
        .get("http://localhost:8080/team")
        .then((response) => {
          setTeamMembers(response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    fetchTeamMembers();

    return () => {};
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full mb-10">
      <h2 className="text-lg font-semibold mb-6">About Us</h2>

      <div className="w-full max-w-xl p-8 bg-white shadow-md rounded-lg">
        <h3 className="text-xl font-semibold mb-4">Our Story</h3>
        <p className="mb-6">
          We are a non-profit organization dedicated to connecting families with
          loving pets in need of a home. Our mission is to ensure that every pet
          finds a nurturing family, and every family finds their furry best
          friend.
        </p>
        {teamMembers.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold mb-4">Meet the Team</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <MemberBadge
                  key={index}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  icon={member.icon}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUs;
