import logo from './logo.svg';
import './App.css';

import React from "react"
import ToDo from "./ToDo"

import Sample from "./Sample"


class App extends React.Component {
  constructor(props){
    super(props)
    // this.state.item = {id : 0, "title":"Hello React", "done":true}
    // ToDo.jsx로 넘겨 줄 데이터를 this.state 이름으로 만들어 줌.
    // 이것을 ToDo에서 props로 받아 사용한다.
    // 3개의 객체를 가진 배열을 생성
    this.state = {items:[ {id : 0, title:"Hello React", done:true},
                          {id : 1, title : "vue", done : false}, 
                          {id : 2, title : "angular", done : false}]
                        }
  }


  render(){
    // 배열을 순회하며 출력할 내용을 생성
    // item은 배열을 순회할 때 각각의 데이터이고 idx는 인덱스
    // 배열을 순회하여 출력물을 생성 할 때는 Key를 설정해야 한다. 
    // key를 설정하지 않으면 출력에는 문제가 없지만 콘솔에러가 발생한다.
    let display = this.state.items.map((item, idx) => (
      <ToDo item = {item} key = {item.id} />
    )); // 람다 함수라서 리턴을 쓸 필요가 없다.
      // 태그 안에서 반복문을 쓸 수 없기 때문에 밖에서 작성
    return(
      <div>
        {display}
      </div>
    )
  }
}

  export default App;



// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <ToDo />
//       <Sample />
//     </div>
//   );
// }

// export default App;
