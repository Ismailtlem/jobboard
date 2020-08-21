// user.test.js

import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import JobBoardComponent from "../JobBoardComponent";

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

it("renders user data", async () => {
  const fakejob = {
    id: 1,
    company: "Marjane",
    logo: "/images/account.svg",
    isNew: true,
    featured: false,
    position: "Web developer",
    role: "Web developer",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Full Time",
    location: "Morocco Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  };
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakejob),
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<JobBoardComponent job={fakejob} key={fakejob.id} />, container);
  });

  expect(
    container.querySelector("[data-testid='company-logo']").getAttribute("src")
  ).toEqual(fakejob.logo);
  expect(
    container.querySelector("[data-testid='job-details']").textContent
  ).toContain(fakejob.company);
  if (fakejob.isNew) {
    expect(
      container.querySelector("[data-testid='job-details']").textContent
    ).toContain("New");
  }
  if (fakejob.featured) {
    expect(
      container.querySelector("[data-testid='job-details']").textContent
    ).toContain("Featured");
  }

  expect(
    container.querySelector("[data-testid='job-details']").textContent
  ).toContain(fakejob.position);
  expect(
    container.querySelector("[data-testid='job-details']").textContent
  ).toContain(fakejob.postedAt);

  expect(
    container.querySelector("[data-testid='job-details']").textContent
  ).toContain(fakejob.contract);

  global.fetch.mockRestore();
});
