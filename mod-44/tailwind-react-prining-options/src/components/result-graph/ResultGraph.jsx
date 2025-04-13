import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";
const studentMarks = [
  {
    id: 1,
    name: "Ayaan",
    physics: 78,
    chemistry: 84,
    math: 91,
  },
  {
    id: 2,
    name: "Zara",
    physics: 88,
    chemistry: 79,
    math: 85,
  },
  {
    id: 3,
    name: "Rihan",
    physics: 92,
    chemistry: 89,
    math: 95,
  },
  {
    id: 4,
    name: "Meera",
    physics: 67,
    chemistry: 73,
    math: 70,
  },
  {
    id: 5,
    name: "Kabir",
    physics: 81,
    chemistry: 76,
    math: 88,
  },
  {
    id: 6,
    name: "Anaya",
    physics: 90,
    chemistry: 91,
    math: 93,
  },
  {
    id: 7,
    name: "Yash",
    physics: 69,
    chemistry: 72,
    math: 65,
  },
  {
    id: 8,
    name: "Tara",
    physics: 85,
    chemistry: 88,
    math: 80,
  },
  {
    id: 9,
    name: "Ishaan",
    physics: 75,
    chemistry: 70,
    math: 78,
  },
  {
    id: 10,
    name: "Diya",
    physics: 93,
    chemistry: 95,
    math: 97,
  },
];

const ResultGraph = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={studentMarks}>
      <XAxis dataKey="name"></XAxis>
      <YAxis></YAxis>
        <Line type="monotone" dataKey="math" stroke="#e5e7e6"></Line>
        <Line type="monotone" dataKey={'physics'} stroke="#b80c09"></Line>
        <Line type="monotone" dataKey={'chemistry'} stroke="yellow"></Line>
      </LineChart>
    </div>
  );
};

export default ResultGraph;
