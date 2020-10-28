export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51HZ8pKFyWqipsJWCBIGcYK1E5FV8CUcPeqHEq9HLw6QcbaDTa7MPSeRo3MpmIw40AgHScuiPZJRcXoCJHuGCobJD00PbNxAuoq",
    s3: {
      REGION: "us-west-1",
      BUCKET: "notes-app-tutorial-18"
    },
    apiGateway: {
      REGION: "us-west-1",
      URL: "https://88bth5u1g6.execute-api.us-west-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_9WJagoi7O",
      APP_CLIENT_ID: "29cnsnpshjj1hlp0qj695qtd2f",
      IDENTITY_POOL_ID: "us-east-1:b7dba417-6839-4f8d-bcc1-baa8270a92d5"
    }
  };