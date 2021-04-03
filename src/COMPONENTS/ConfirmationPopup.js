import React from "react";

export default function ConfirmationPopup() {
  return (
    <div className="top-0 left-0 bg-black bg-opacity-30 w-screen h-screen fixed flex items-center justify-center flex-col">
      <div className="p-3 text-center bg-gray-600 border-2 rounded-md border-gray-400">
        <h3 className="text-xl mb-2">
          Delete Transaction "Car" worth "-300$"?
        </h3>
        <div>
          <button className="px-4 bg-opacity-0 text-green-400 mx-1 text-xl font-semibold">
            Yes
          </button>
          <button className="py-1 px-2 mx-1 text-xl text-red-400">No</button>
        </div>
      </div>
    </div>
  );
}