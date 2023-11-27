import { Navigate } from 'react-router-dom';
import ImageUpload from '../components/Image/ImageUpload';
import { useStateContext } from 'src/contexts/ContextProvider';

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function ImageUploadTestPage({ title }: { title: string }) {
  const { token } = useStateContext();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <ImageUpload></ImageUpload>
    </>
  );
}

export default ImageUploadTestPage;
