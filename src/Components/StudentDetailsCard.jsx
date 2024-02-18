import React from "react";
export default function StudentDetailsCard() {
  return (
    <div className="h-full flex justify-center">
      <table className=" w-3/5 h-2/4 text-sm text-center text-gray-500 rounded-sm">
        <tr className="px-6 py-10 border-2">
          <th className=" text-gray-700 border">Student</th>
          <td>Sankalpa Naskar</td>
        </tr>
        <tr className="px-6 py-10 border-2">
          <th className=" text-gray-700 border">Aspiration</th>
          <td>Sankalpa Naskar</td>
        </tr>
        <tr className="px-6 py-10 border-2">
          <th className=" text-gray-700 border">
            Academic Qualification
          </th>
          <td>Sankalpa Naskar</td>
        </tr>
        <tr className="px-6 py-10 border-2">
          <th className=" text-gray-700 border">Self Eval</th>
          <td>Sankalpa Naskar</td>
        </tr>
        <tr className="px-6 py-10 border-2">
          <th className=" text-gray-700 border">Doubts/Queries</th>
          <td>Sankalpa Naskar</td>
        </tr>
        <tr className="px-6 py-10 border-2">
          <th className=" text-gray-700 border">Mentor Response</th>
          <td>Sankalpa Naskar</td>
        </tr>
      </table>
    </div>
  );
}
