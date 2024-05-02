import React from "react";

const Header = () => {
  return (
    <>
      <code className="font-bold">
        <span>
          buzzwords = [&quot;innovative&quot;, &quot;creative&quot;,
          &quot;awesome&quot;];
        </span>
        <br />
        <span>
          generateBuzzwords = () =&gt; setInterval(() =&gt; buzzword =
          buzzwords[++index % buzzwords.length], 2000);
        </span>
        <br />
        <span className="animate-pulse text-[#4CE470]">generateBuzzwords(), index = 0;</span>
      </code>
      <h1 className="text-7xl font-bold my-2">
        Building {"{"}buzzword&#125; Web Solutions for Your Business.
      </h1>
    </>
  );
};

export default Header;
