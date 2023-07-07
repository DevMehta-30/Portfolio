import React from "react";
import { useState } from "react";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { database } from "../../firebase";
import { push, child, update } from "firebase/database";
function Index() {
  const [name, setName] = useState(null);
  const [desc, setDesc] = useState(null);
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    let obj = {
      name: name,
      desc: desc,
    };
    const newPostKey = push(child(ref(database), "posts")).key;
    const updates = {};
    updates["/" + newPostKey] = obj;
    return update(ref(database), updates);
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
    const imageRef = ref(storage, `${image.name}`);
    uploadBytes(imageRef, image).then(() => {
      alert("Submitted");
    });
  };
  return (
    <>
      {/* <form action=""> */}
      <label htmlFor="">
        Enter the Project Name:
        <input
          type="text"
          value={name}
          onChange={(e) => handleInputChange(e)}
          id="name"
          placeholder="Name"
        />
      </label>
      <label htmlFor="">
        Enter the description for the Project:
        <input
          type="text"
          value={desc}
          onChange={(e) => handleInputChange(e)}
          id="desc"
          placeholder="Description"
        />
      </label>
      <div htmlFor="">
        Give the the cover image
        <input
          type="file"
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
        />
      </div>
      <button
        onClick={() => {
          uploadImage();
          handleSubmit();
        }}
      >
        Submit
      </button>
      {/* </form> */}
    </>
  );
}
export default Index;
