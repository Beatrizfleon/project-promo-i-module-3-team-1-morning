import React from 'react';
import Box1 from './Box1';
import Box2 from './Box2';
import '../stylesheets/Main.scss';
import {useState} from 'react';

/* let formObject = {
  name: 'pipi',
  job: 'Front End Developer',
  email: 'pipi@gmail.com',
  tel: '644555334',
  linkedin: 'https://www.linkedin.com/in/beatrizfleon/',
  github: 'https://github.com/Beatrizfleon',
}; */

function Main(props) {
  const [data, setData] = useState({});

  const handleInputPreview = (value) => {
    const newData = {
      ...data,
      [value.name]: value.value,
    };
    setData(newData);
  };
  const saveDataImg = (dtaImg) => {
    const newImg = {
      ...data,
      photo: dtaImg.photo,
    };
    setData(newImg);
  };
  /* console.log(data); */
  return (
    <div className="container-box">
      <Box1 infoFromInput={data} />
      <Box2 handlefunction={handleInputPreview} handleSaveImg={saveDataImg} photo={data.photo} />
    </div>
  );
}

//   return(
//       <div className = "container-box" >
//       <Box1 formObject={formObject} infoFromInput={data} />
//       <Box2 handlefunction={handleInputPreview} />
//       </div>
//     );
//   }
// }

export default Main;
