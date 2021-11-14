import { Provider } from "react-redux";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createStore } from "redux";

const initialState = { value: 0 };

// Reducer，处理 Action 返回新的 State
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return { value: state.value + 1 };
    case "counter/decremented":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// 利用 Redux API 创建一个 Store，参数就是 Reducer
const store = createStore(counterReducer);


function Counter() {
  // 从 state 中获取当前的计数值
  const count = useSelector(state => state.value)

  // 获得当前 store 的 dispatch 方法
  const dispatch = useDispatch()

  // 在按钮的 click 时间中去分发 action 来修改 store
  return (
    <div>
      <button
        onClick={() => dispatch({ type: 'counter/incremented' })}
      >+</button>
      <span>{count}</span>
      <button
        onClick={() => dispatch({ type: 'counter/decremented' })}
      >-</button>
    </div>
  )
}

export default function demo(){
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};
