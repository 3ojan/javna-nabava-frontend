import ImageUpload from '../components/Image/ImageUpload';

/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function ImageUploadTestPage({ title }: { title: string }) {
  // if (!token) {
  //     return <Navigate to="/login" />;
  // }

  return (
    <>
      <ImageUpload></ImageUpload>
    </>
  );
}

export default ImageUploadTestPage;
