import Link from "next/link";
import React from "react";

const NotFoundPage404 = () => {
  return (
    <div>
      <h3>404 Not Found</h3>
      <Link href="/">
        <button className="p-4 rounded-2xl bg-gradient-to-br from-blue-300 to-violet-600">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage404;
