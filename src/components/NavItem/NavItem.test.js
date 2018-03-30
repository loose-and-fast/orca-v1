import React from "react";
import NavItem from "./NavItem";

test("NavItem renders", () => {
  const props = {
    text: "test"
  };
  const wrapper = shallow(<NavItem {...props} />);
  expect(wrapper).toMatchSnapshot();
});
