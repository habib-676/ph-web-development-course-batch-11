export default function ToDo({ task, isDone, time = 0 }) {
  //   if (isDone) {
  //     return (
  //       <li>
  //         Task : {task} is Done || Duration : {time}
  //       </li>
  //     );
  //   } else {
  //     return (
  //       <li>
  //         Pending Task : {task} || Duration : {time}
  //       </li>
  //     );
  //   }
  //   using ternary operator

  return isDone ? (
    <li>
      Task : {task} is Done || Duration : {time}
    </li>
  ) : (
    <li>
      Pending Task : {task} || Duration : {time}
    </li>
  );
}

// conditional rendering


