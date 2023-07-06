import React from "react";
import { useState } from "react";
import { storage } from "../../firebase";
import { ref,uploadBytes } from "firebase/storage";
function Index() {
  const [image, setImage] = useState(null);
  const uploadImage = () => {
    if (image == null) return;
    const imageRef = ref(storage, `${image.name}`);
    uploadBytes(imageRef,image).then(()=>{
        alert("Submitted");
    });
  };
  return (
    <>
      {/* <form action=""> */}
        {/* <label htmlFor="">
          Enter the Project Name:
          <input type="text" />
        </label>
        <label htmlFor="">
          Enter the description for the Project:
          <input type="text" />
        </label> */}
        <div htmlFor="">
          Give the the cover image
          <input
            type="file"
            onChange={(event) => {
              setImage(event.target.files[0]);
            }}
          />
        </div>
        <button onClick={uploadImage}>Submit</button>
      {/* </form> */}
    </>
  );
}
export default Index;
