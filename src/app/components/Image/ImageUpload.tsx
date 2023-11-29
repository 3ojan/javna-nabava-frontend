import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Assuming you're using axios
import axiosClient from 'src/axios-client';
import {
  // getEXPIRATION_key,
  useStateContext,
} from 'src/contexts/ContextProvider';
import { Navigate } from 'react-router-dom';
import { Button } from 'antd';

interface ImageUploadProps {
  onImageUpload?: (data: any) => void;
}

export const StyledImageWrapper = styled.div`
  text-align: center;
  background: #ebebea;
  overflow: hidden;
  max-height: 200px;
  img {
    width: 100%;
  }
`;

// function setExpirationFromLocalStorage() {

// }

export default function ImageUpload(props: ImageUploadProps) {
  const { onImageUpload } = props;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // const [expiration, setExpiration] = useState<Date | null>(
  //   setExpirationFromLocalStorage() || null
  // );
  const { setToken, setUser } = useStateContext();

  // if (new Date() > new Date(expiration!)) {
  //   // Perform logout logic here
  //   // Redirect the user to the login page or show a logout modal
  // }

  const onUploadImage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedImage) return;
    console.log('selectedImage', selectedImage);
    const data = new FormData();
    data.append('image', selectedImage);
    axiosClient
      .post('/store-image', data)
      .then((response) => {
        // Handle response if necessary
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onCustomUpload = () =>
    /* event: ChangeEvent<HTMLInputElement>, file: File*/
    {
      if (!selectedImage) return;
      // event.preventDefault();
      const data = new FormData();
      data.append('image', selectedImage, selectedImage.name);
      console.log('data', data);
      axiosClient
        .post('/store-image', data)
        .then((response) => {
          console.log('resp', response.data);
          onImageUpload && onImageUpload(response.data);
          alert('Image uploaded successfully');
        })
        .catch((error) => {
          alert(`Error while uploading image: ${error.response.data.message}`);
          // console.log(error);
        });
    };
        

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setSelectedImage(file);
      // onCustomUpload(event, file);
    }
  };

  const onLogout = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    axiosClient.post('/logout').then(() => {
      console.log('logout');

      setUser({}), setToken(null);
    });
  };

  // const checkTokenExpiration = () => {
  //   if (
  //     localStorage.getItem(getEXPIRATION_key) &&
  //     new Date() > new Date(localStorage.getItem(getEXPIRATION_key)!)
  //   ) {
  //     // alert('Session expired');
  //     //passing null logs out user
  //     setToken(null);
  //     <Navigate to="/login" />;
  //   }
  // };

  useEffect(() => {
    // console.log('expiration', expiration);
    // checkTokenExpiration();
    axiosClient.get('/user').then(({ data }) => {
      console.log('user', data);
      setUser(data);
    });
  }, []);

  return (
    <>
      <form onSubmit={onUploadImage}>
        <div className="image">
          {selectedImage && (
            <StyledImageWrapper>
              <img
                alt="not fount"
                width={'250px'}
                src={URL.createObjectURL(selectedImage)}
              />
            </StyledImageWrapper>
          )}
          <input
            type="file"
            className="form-control"
            required
            name="image"
            accept=".jpg, .jpeg, .png"
            onChange={onImageChange}
          />
          <button onClick={onCustomUpload}>Upload</button>
        </div>
        <Button title="Logout" onClick={onLogout}>
          Logout
        </Button>
      </form>
    </>
  );
}
