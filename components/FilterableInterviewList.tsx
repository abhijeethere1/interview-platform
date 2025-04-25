"use client";

import { useState } from "react";
import InterviewCard from "./InterviewCard";

interface Interview {
  id: string;
  role: string;
  type: string;
  techstack: string[];
  createdAt: string;
}

interface Props {
  interviews: Interview[];
}

export default function FilterableInterviewList({ interviews }: Props) {
  const [typeFilter, setTypeFilter] = useState("All");
  const [roleFilter, setRoleFilter] = useState("All");
  const [techFilter, setTechFilter] = useState("All");

  const unique = (key: keyof Interview) =>
    ["All", ...new Set(interviews.map((i) => i[key]).flat())];

  const filtered = interviews.filter((i) => {
    return (
      (typeFilter === "All" || i.type === typeFilter) &&
      (roleFilter === "All" || i.role === roleFilter) &&
      (techFilter === "All" || i.techstack.includes(techFilter))
    );
  });

  return (
    <>
      <div className="flex flex-wrap gap-4 mb-6">
        <select onChange={(e) => setTypeFilter(e.target.value)} value={typeFilter}>
          {unique("type").map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
        <select onChange={(e) => setRoleFilter(e.target.value)} value={roleFilter}>
          {unique("role").map((role) => (
            <option key={role}>{role}</option>
          ))}
        </select>
        <select onChange={(e) => setTechFilter(e.target.value)} value={techFilter}>
          {["All", ...new Set(interviews.flatMap((i) => i.techstack))].map((tech) => (
            <option key={tech}>{tech}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map((interview) => (
          <InterviewCard
            key={interview.id}
            interviewId={interview.id}
            role={interview.role}
            type={interview.type}
            techstack={interview.techstack}
            createdAt={interview.createdAt}
          />
        ))}
      </div>
    </>
  );
}
