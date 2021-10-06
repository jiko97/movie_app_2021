import React from 'react';
import PropTypes from 'prop-types';

// React 장점 : 재사용 가능한 컴포넌트를 만들 수 있음
// 컴포넌트를 계속 반복해서 사용 가능 
const foodMyFav = [
  {
    id: 1,
    name: "kimchi",
    image: "https://images.unsplash.com/photo-1583224944844-5b268c057b72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2ltY2hpfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    rating: 5.0
  },
  {
    id: 2,
    name: "bulgogi",
    image: "https://images.unsplash.com/photo-1559863658-57587f49d0c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVsZ29naXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    rating: 4.5
  },
  {
    id: 3,
    name: "bibimbap",
    image: "https://images.unsplash.com/photo-1584278858536-52532423b9ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YnVsZ29naXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    rating: 4.0
  }
];

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I love {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture}></img>
    </div>    
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodMyFav.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating}>
        </Food>
        ))}
    </div>
  );
}

export default App;
