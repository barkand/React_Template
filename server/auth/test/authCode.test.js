let expect = require("chai").expect;

let { GetActiveCode } = require("../AuthCode");

// Check Mobile Apis
describe("========== GetActiveCode ==========", () => {
  before(() => {});

  it("it should return 4 digit active_code", (done) => {
    // expect(active_code).to.be.a("int");
    expect(active_code).be.greaterThan(999).and.lessThan(10000);
    done();
  });
});
