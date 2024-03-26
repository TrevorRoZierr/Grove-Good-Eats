import React from "react";

const Footer = () => {
  return (
    <div className="w-full mt-14 lg:mt-0 flex flex-col justify-center items-center text-center lg:absolute lg:bottom-0 lg:p-6 p-4 bg-gradient-to-r border-t-4 border-black from-indigo-200 to-fuchsia-400">
      <h1 className="font-unbounded font-semibold">Project Made by:</h1>
      <div className="flex flex-row mt-2">
        <p>Manager: Sarvar Ali</p>
        <p>Tester: Maqbool Pathan</p>
        <p>Software Architect: Shoaib Nadaf</p>
        <p>Developer: Sayyed Saad</p>
      </div>
    </div>
  );
};

export default Footer;
