import React from "react";
import Portfolio from "./Portfolio";

test("Portfolio renders", () => {
  const props = {};
  const wrapper = shallow(<Portfolio {...props} />);
  expect(wrapper).toMatchSnapshot();
});
