import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

// React 장점 : 재사용 가능한 컴포넌트를 만들 수 있음
// 컴포넌트를 계속 반복해서 사용 가능 

// 2. class component 
// App 클래스는 React 컴포넌트에서 확장됨 
// 출력할 내용을 render 메소드안에 넣기 
// 바꿀 데이터를 state안에 넣기
// .setState를 호출하면 state를 refresh하고 render function을 호출한다
// 가장 먼저 호출될 componentDidMount()에서 data를 fetch한다 
// async(비동기; 함수가 호출될 때까지 대기) -> await 사용 가능 
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  };  

  componentDidMount() {
    this.getMovies();
  }

  render(){
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : ( 
          <div className="movies">
            {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
            ))}
          </div>
        )}
      </section>
    );
  }
}
export default App;
