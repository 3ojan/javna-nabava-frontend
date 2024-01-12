import { Button } from 'antd';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import axiosClient from 'src/axios-client';
import { useStateContext } from 'src/contexts/ContextProvider';
import LogoutButton from '../buttons/LogoutButton';
import {
  StyledButtonsContainer,
  StyledImageFormWrapperDiv,
  StyledImageWrapper,
} from './styled';
// =======
// import { Button } from 'antd';
// import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
// import axiosClient from 'src/axios-client';
// import { useStateContext } from 'src/contexts/ContextProvider';
// import LogoutButton from '../buttons/LogoutButton';
// import {
//   StyledButtonsContainer,
//   StyledImageFormWrapperDiv,
//   StyledImageWrapper,
// } from './styled';
// >>>>>>> Stashed changes

interface ImageUploadProps {
  onImageUpload?: (data: any) => void;
}

export default function ImageUpload(props: ImageUploadProps) {
  const { onImageUpload } = props;
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  // const [expiration, setExpiration] = useState<Date | null>(
  //   setExpirationFromLocalStorage() || null
  // );
  const { token, setToken, setUser } = useStateContext();

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

  const onInputFile = () => {};

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

  useEffect(() => {
    axiosClient.get('/user').then(({ data }) => {
      console.log('user', data);
      setUser(data);
    });
  }, []);

  // if (!token) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      <LogoutButton />
      <StyledImageFormWrapperDiv>
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
            <StyledButtonsContainer>
              <input
                type="file"
                className="form-control"
                id="image-input"
                required
                name="image"
                accept=".jpg, .jpeg, .png, .svg"
                onChange={onImageChange}
              />
              {/* <Button
                onClick={document.getElementById('image-input')?.click?}
              >
                {<UploadOutlined />}Odaberi...
              </Button> */}
              <Button onClick={onCustomUpload}>Upload</Button>
            </StyledButtonsContainer>
          </div>
        </form>
      </StyledImageFormWrapperDiv>
    </>
  );
}
