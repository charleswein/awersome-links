import { configure as rtlConfigure } from "@testing-library/dom";
import "@testing-library/jest-dom";

rtlConfigure({
  testIdAttribute: "data-abc-id",
});

process.on("unhandledRejection", (reason: unknown) => {
  // eslint-disable-next-line no-console
  console.log("REJECTION", reason);
});
