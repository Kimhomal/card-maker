class ImageUploader {
  async upload(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'a0xcuhkg');

    const result = await fetch(
      'https://api.cloudinary.com/v1_1/dx2cdsjjl/upload',
      {
        method: 'POST',
        body: formData,
      }
    );
    return await result.json();
  }
}

export default ImageUploader;
