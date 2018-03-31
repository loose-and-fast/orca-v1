import React from "react";
import COMPONENT_NAME from "./COMPONENT_NAME";

test("COMPONENT_NAME renders", () => {
  const props = {};
  const wrapper = shallow(<COMPONENT_NAME {...props} />);
  expect(wrapper).toMatchSnapshot();
});
