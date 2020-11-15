const getImage = (event, setImage) => {
  event.preventDefault();
  if (event.target.files[0] !== undefined) {
    var reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(event.target.files[0]);
  }
};

export default getImage;
