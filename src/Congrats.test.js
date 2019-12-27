import React from 'react'
import Enzyme, {shallow} from "enzyme"
import EnzymeAdapter from "enzyme-adapter-react-16"
import Congrats from "./Congrats"
import {findByTestAttr, checkProps} from "../test/testUtils"



Enzyme.configure({adapter: new EnzymeAdapter()})


/**
 * Factory function to create a ShallowWrapper for the app component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */


const setup = (props={}) => {
    return shallow(<Congrats {...props} />);
}

test("renders without `error`", ()=> {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1)
})

test("renders not text when `success` props is false", () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe("");
})
test("renders no-empty congrats message when `success ` props is true", () => {
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, "congrats-message");
    expect(message.text().lenght).not.toBe(0)

})

test('does not throw warning with expected props', () => {
    const expectedProps = { success: "no success" };
    checkProps(Congrats, expectedProps);
  });