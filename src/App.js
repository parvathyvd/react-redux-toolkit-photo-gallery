import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPhotos } from "./store/gallery-slice";

function App() {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.gallery);

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>PHOTO GALLERY</h1>
      <p>Photo gallery made using react redux toolkit and redux thunk</p>
      <hr />
      <div className="gallery">
        {photos.length > 0 &&
          photos.map((photo, index) => {
            return (
              <img
                key={index}
                src={photo.download_url}
                alt={photo.author}
                width="400"
                height="400"
              />
            );
          })}
      </div>
    </div>
  );
}

export default App;
