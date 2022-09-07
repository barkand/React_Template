// Custom Config
process.env.API_TYPE = "GRAPHQL";
const API_PATH = "/api/graphql/v1";

let chai = require("chai");
let chaiGraphQL = require("chai-graphql");

chai.use(chaiGraphQL);

const { assert } = chai;
const request = require("supertest")(
  `http://localhost:${process.env.SERVER_PORT}`
);
const expect = chai.expect;

describe("========== GRAPHQL ==========", () => {
  // Check Mobile Apis
  describe("===== Mobile =====", () => {
    describe("/sendMobile", () => {
      it("it should POST a Mobile number", (done) => {
        let data = {
          query: `
                query GetSendMobile {
                    sendMobile ( username:"1234" ) {
                        status
                        message
                    }
                }
                `,
        };

        request
          .post(API_PATH + "/sendMobile")
          .send(data)
          .end((err, res) => {
            if (err) return done(err);

            expect(res.body.data.sendMobile.message).to.equal(
              "mobile success sended"
            );
            done();
          });
      });
    });

    describe("/sendMobileCode --Invalid Code", () => {
      it("it should POST a received code and get error", (done) => {
        let data = {
          query: `
                    query GetSendMobileCode {
                        sendMobileCode ( username:"1234", receivedCode:"1-2-3-4" ) {
                            status
                            message
                        }
                    }
                    `,
        };

        request
          .post(API_PATH + "/sendMobileCode")
          .send(data)
          .end((err, res) => {
            if (err) return done(err);

            expect(res.body.data.sendMobileCode.message).to.equal(
              "code is wrong"
            );
            done();
          });
      });
    });

    describe("/sendMobileCode --Empty Code", () => {
      it("it should POST a empty code and get error", (done) => {
        let data = {
          query: `
                    query GetSendMobileCode {
                        sendMobileCode ( username:"1234", receivedCode:"" ) {
                            status
                            message
                        }
                    }
                    `,
        };

        request
          .post(API_PATH + "/sendMobileCode")
          .send(data)
          .end((err, res) => {
            if (err) return done(err);

            expect(res.body.data.sendMobileCode.message).to.equal(
              "code is wrong"
            );
            done();
          });
      });
    });
  });

  // Check Mail Apis
  describe("===== Mail =====", () => {
    describe("/sendMail", () => {
      it("it should POST a Mail number", (done) => {
        let data = {
          query: `
                query GetSendMail {
                    sendMail ( username:"a@a.a" ) {
                        status
                        message
                    }
                }
                `,
        };

        request
          .post(API_PATH + "/sendMail")
          .send(data)
          .end((err, res) => {
            if (err) return done(err);

            expect(res.body.data.sendMail.message).to.equal(
              "email success sended"
            );
            done();
          });
      });
    });

    describe("/sendMailCode --Invalid Code", () => {
      it("it should POST a received code and get error", (done) => {
        let data = {
          query: `
                  query GetSendMailCode {
                      sendMailCode ( username:"a@a.a", receivedCode:"1-2-3-4" ) {
                          status
                          message
                      }
                  }
                  `,
        };

        request
          .post(API_PATH + "/sendMailCode")
          .send(data)
          .end((err, res) => {
            if (err) return done(err);

            expect(res.body.data.sendMailCode.message).to.equal(
              "code is wrong"
            );
            done();
          });
      });
    });

    describe("/sendMailCode --Empty Code", () => {
      it("it should POST a empty code and get error", (done) => {
        let data = {
          query: `
                  query GetSendMailCode {
                      sendMailCode ( username:"a@a.a", receivedCode:"" ) {
                          status
                          message
                      }
                  }
                  `,
        };

        request
          .post(API_PATH + "/sendMailCode")
          .send(data)
          .end((err, res) => {
            if (err) return done(err);

            expect(res.body.data.sendMailCode.message).to.equal(
              "code is wrong"
            );
            done();
          });
      });
    });
  });
});
