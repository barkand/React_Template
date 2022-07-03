const AuthSchema = (params) => {
  return {
    sendMobile: {
      query: `
            query GetSendMobile {
                sendMobile ( username:"${params.username}" ) {
                    status
                    message
                }
            }
            `,
    },
    sendMail: {
      query: `
            query GetSendMail {
                sendMail ( username:"${params.username}" ) {
                    status
                    message
                }
            }
            `,
    },
    sendMobileCode: {
      query: `
            query GetSendMobileCode {
                sendMobileCode ( username:"${params.username}", receivedCode:"${params.receivedCode}" ) {
                    status
                    message
                }
            }
            `,
    },
    sendMailCode: {
      query: `
            query GetSendMailCode {
                sendMailCode ( username:"${params.username}", receivedCode:"${params.receivedCode}" ) {
                    status
                    message
                }
            }
            `,
    },
    login: {
      query: `
            query GetLogin {
                login ( username:"${params.username}" ) {
                    connected
                    user
                    token
                    refreshToken
                }
            }
            `,
    },
  };
};

export default AuthSchema;
