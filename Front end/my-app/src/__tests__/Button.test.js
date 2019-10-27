
import React from "react";
import { act } from "react-test-renderer";
import {render , unmountComponentAtNode } from "react-dom";
import signin from '../Components/signin';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// testing 
test("verify handlechange" , ()=>{
  act(() => {
    ReactDOM.render(<signin />, container);
  });
  
})

