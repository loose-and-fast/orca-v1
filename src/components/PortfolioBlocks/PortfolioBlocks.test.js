import React from "react";
import PortfolioBlocks from "./PortfolioBlocks";

test("PortfolioBlocks renders", () => {
  const props = {
  	className: 'mockClass',
  	imageSrc: 'fakeImageSrc',
  };
  const wrapper = shallow(<PortfolioBlocks {...props} />);
  expect(wrapper).toMatchSnapshot();
});
