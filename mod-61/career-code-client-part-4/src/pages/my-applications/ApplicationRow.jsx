import React from "react";

const ApplicationRow = ({ application, index }) => {
  const { title, company, company_logo } = application;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
          </div>
        </div>
      </td>
      <td>{title}</td>
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ApplicationRow;
