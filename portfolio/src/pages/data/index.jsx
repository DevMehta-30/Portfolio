import React from "react";
import { useState } from "react";
import { storage } from "../../firebase";
import { ref as storageRef, uploadBytes } from "firebase/storage";
import { database } from "../../firebase";
import { push, child, update, ref as databaseRef } from "firebase/database";
function Index() {
  const [name, setName] = useState(null);
  const [desc, setDesc] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    let obj = {
      name: name,
      desc: desc,
    };
    const newPostKey = push(child(databaseRef(database, "posts"), "/")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(databaseRef(database), updates);
  };
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "name") {
      setName(value);
    }
    if (id === "desc") {
      setDesc(value);
    }
  };
  const uploadImage = () => {
    if (image == null) return;
    const imageRef = storageRef(storage, `${name}`);
    uploadBytes(imageRef, image).then(() => {
      alert("Submitted");
    });
  };
  return (
    <>
      <div className="flex justify-center pt-36">
        <div className="bg-gradient-to-b from-yellow-300 to-transparent h-96 border-2 border-black rounded-lg flex flex-col">
          <label htmlFor="" className="px-8 flex flex-col font-bold py-4">
            Enter the Project Name:
            <div className="py-4 ">
              <input
                type="text"
                value={name}
                onChange={(e) => handleInputChange(e)}
                className="opacity-40 border-2 border-black w-full"
              />
            </div>
          </label>
          <label htmlFor="" className="px-8 flex flex-col font-bold py-4">
            Enter the description for the Project:
            <div className="py-4 ">
              <input
                type="text"
                value={desc}
                onChange={(e) => handleInputChange(e)}
                className="opacity-40 border-2 border-black w-full"
              />
            </div>
          </label>
          <div htmlFor="" className="px-8 flex flex-col font-bold py-4">
            Give the the cover image
            <div className="font-medium pb-4">
              <input
                type="file"
                onChange={(event) => {
                  setImage(event.target.files[0]);
                }}
              />
            </div>
          </div>
          <div className="px-8">
            <button
              onClick={() => {
                uploadImage();
                handleSubmit();
              }}
              className="border-yellow-600 border-2 w-36 rounded-lg font-bold"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Index;
