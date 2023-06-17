import {
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
  afterEach,
} from "matchstick-as/assembly/index";

import { createExampleEvent } from "./example-utils";
import { hanldeExampleEvent } from "../src/mapping";

describe("Tests", () => {
  beforeAll(() => {});

  afterAll(() => {
    clearStore();
  });

  afterEach(() => {
    clearStore();
  });

  test("Test", () => {
    let newEvent = createExampleEvent();
    hanldeExampleEvent(newEvent);
  });
});
