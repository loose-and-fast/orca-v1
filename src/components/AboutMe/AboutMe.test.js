import React from "react";
import AboutMe from "./AboutMe";

test("AboutMe renders", () => {
  const props = {};
  const wrapper = shallow(<AboutMe {...props} />);
  expect(wrapper).toMatchSnapshot();
});
