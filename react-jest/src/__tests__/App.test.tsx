import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import App from "../App";

describe("Testing App.tsx File", () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    })
    test("App Header Test", () => {
        expect(wrapper.find("header").text()).toContain("TDD App"); 
    })

    test("button text is BUTTON", () => {
        expect(wrapper.find("button").text()).toContain("BUTTON"); 
    })

    test("current theme is light", () => {
        expect(wrapper.find("#current-theme").text()).toContain("light");
    })

    test("Toggle to switch theme", () => {
        const button = wrapper.find("button");
        button.simulate('click');
        const theme = wrapper.find("#current-theme").text();
        expect(theme).toContain("dark");
    })
})