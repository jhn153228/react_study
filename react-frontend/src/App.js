// import logo from "./logo.svg";
// import "./App.css";
import React from "react";
// import { Button } from "antd";
// import RefAutoComplete from "antd/es/auto-complete";

class PostDetail extends React.Component {
  state = {
    postDetail: null,
  };
  componentDidMount() {
    const { postId } = this.props;
    this.requestPost(postId);
  }
  componentDidUpdate(prevProps) {
    const { postId } = this.props;
    if (postId !== prevProps.postId) {
      this.requestPost(postId);
    }
  }
  requestPost(postId) {
    console.log(`request post #${postId}`);
    this.setState({
      postDetail: `로딩된 post #${postId}`,
    });
  }
  render() {
    const { postId } = this.props;
    const { postDetail } = this.state;
    return (
      <div>
        포스팅 # {postId}
        <hr />
        {postDetail}
      </div>
    );
  }
}

/*
const actions = {
  init() {
    return { value: 0 };
  },
  increment(prevState) {
    return { value: prevState.value + 1 };
  },
  decrement(prevState) {
    return { value: prevState.value - 1 };
  },
  decodeURIComponent(prevState) {},
};
*/
/*
class Counter1 extends React.Component {
  
  state = actions.init(this.props.initialValue);

  render() {
    const { value } = this.state;
    return (
      <div>
        Counter1: {value}
        <Button onClick={() => this.setState(actions.increment)}>+1</Button>
        <Button onClick={() => this.setState(actions.decrement)}>-1</Button>
      </div>
    );
  }
*/
// Getter
// state = {
//   value: this.props.initialValue,
// };

// onClick = () => {
//   // Setter
//   // this.setState({ value: this.state.value + 1 });
//   /** setState
//    * setState에서 Arrow 함수를 사용하여 값을 받고 스테이터스 변환 작업을 할 때
//    * 매개변수로 호촐되기 직전 최근 상태값을 받는다
//    * 최근 상태값을 이어 받아서 값을 변경하기 유용함
//    * */

//   this.setState((prevState) => {
//     const { value } = prevState;
//     return { value: value + 1 };
//   });
//   this.setState((prevState) => {
//     const { value } = prevState;
//     return { value: value + 1 };
//   });
// };

// render() {
//   const { value } = this.state;
//   return (
//     <div>
//       counter1 : {value}
//       <Button onClick={this.onClick}>+1</Button>
//     </div>
//   );
// }
//}

class App extends React.Component {
  state = {
    postId: 10,
  };
  render() {
    return (
      <div>
        <PostDetail postId={this.state.postId} />
        <button onClick={() => this.setState({ postId: 20 })}>
          postId 변경
        </button>
      </div>
    );
  }
}

export default App;
