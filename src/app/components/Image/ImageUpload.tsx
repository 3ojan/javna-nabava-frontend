import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';  // Assuming you're using axios

interface ImageUploadProps {
  onImageUpload?: (data: any) => void;
}

export const StyledImageWrapper = styled.div`
text-align:center;
background:#ebebea;
overflow:hidden;
max-height:200px;
img{
  width:100%
}
`

export default function ImageUpload(props: ImageUploadProps) {
  const { onImageUpload } = props;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const onUploadImage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedImage) return;

    const data = new FormData();
    data.append('image', selectedImage);
    axios.post('/store-image', data).then((response) => {
      // Handle response if necessary
    }).catch((error) => {
      console.log(error);
    });
  };

  const onCustomUpload = (event: ChangeEvent<HTMLInputElement>, file: File) => {
    event.preventDefault();
    const data = new FormData();
    data.append('image', file);
    axios.post('/store-image', data).then((response) => {
      console.log(response.data);
      onImageUpload && onImageUpload(response.data);
    }).catch((error) => {
      console.log(error);
    });
  };

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(file);
      onCustomUpload(event, file);
    }
  }

  return (
    <>
      <form onSubmit={onUploadImage}>
        <div className="image">
          {selectedImage && (
            <StyledImageWrapper>
              <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
            </StyledImageWrapper>
          )}
          <input type="file" className="form-control" required name="image"
            onChange={onImageChange} />
        </div>
        {/* <ButtonSecondary title="Upload Image"></ButtonSecondary> */}
      </form>
    </>
  );
}

