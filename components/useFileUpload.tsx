import { useState } from 'react';
import { FileInputComponent } from './FileInputComponent';

export const useFileUpload = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadFile = async (file) => {
    setFile(file);
    setUploading(true);
    setError(null);

    try {
      // your upload logic here, e.g. using fetch or axios
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: file,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      // handle successful upload here, e.g. show a success message
      console.log('Upload successful');
    } catch (error) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  return { FileInputComponent, file, uploading, error, uploadFile };
};
