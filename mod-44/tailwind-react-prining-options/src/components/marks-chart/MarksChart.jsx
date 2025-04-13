import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;

  // data processing

  const marksChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      physics: studentData.subjects.physics,
      chemistry: studentData.subjects.chemistry,
      math: studentData.subjects.math,
    };

    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;

    return student;
  });

  console.log(marksChartData);
  return (
    <div>
      <BarChart width={400} height={400} data={marksChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Bar dataKey="avg" fill="yellow"></Bar>
        <Bar dataKey="chemistry" fill="blue"></Bar>
        <Bar dataKey="math" fill="red"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
