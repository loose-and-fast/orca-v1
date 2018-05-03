import React from "react";
import Footer from "./Footer";

test("Footer renders", () => {
  const props = {};
  const wrapper = shallow(<Footer {...props} />);
  expect(wrapper).toMatchSnapshot();
});
