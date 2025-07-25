import React from "react";

const pageDetails = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <p>Service details of {id}</p>
    </div>
  );
};

export default pageDetails;
