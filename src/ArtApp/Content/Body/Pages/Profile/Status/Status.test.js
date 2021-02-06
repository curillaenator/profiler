import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";

describe("ProfileStatusComponent", () => {
  test("input displayed instead of div", () => {
    const component = create(<Status status="some status" />);
    const root = component.root;
    const div = root.findByType("div");
    div.props.children.props.onDoubleClick();
    const input = root.findByType("input");
    expect(input.props.value).toBe("some status");
  });
});
