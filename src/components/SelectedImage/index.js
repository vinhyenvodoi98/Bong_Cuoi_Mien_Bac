import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const imgStyle = {
  transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s'
};
const selectedImgStyle = {
  transform: 'translateZ(0px) scale3d(0.9, 0.9, 1)',
  transition: 'transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s'
};
const cont = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative'
};

const SelectedImage = ({
  index,
  photo,
  margin,
  direction,
  top,
  left,
  selected
}) => {
  const [isSelected, setIsSelected] = useState(selected);
  //calculate x,y scale
  const sx = (100 - (30 / photo.width) * 100) / 100;
  const sy = (100 - (30 / photo.height) * 100) / 100;
  selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

  if (direction === 'column') {
    cont.position = 'absolute';
    cont.left = left;
    cont.top = top;
  }

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  return (
    <div
      style={{ margin, height: photo.height, width: photo.width, ...cont }}
      className={!isSelected ? 'not-selected' : ''}
    >
      <Link to={`/images/${photo.title}/${photo.id}`}>
        <img
          onContextMenu={(e) => e.preventDefault()}
          alt={photo.title}
          style={{ ...imgStyle }}
          {...photo}
          // onClick={handleOnClick}
        />
      </Link>

      <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
    </div>
  );
};

export default SelectedImage;
