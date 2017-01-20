import path from 'path'

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  root: path.normalize(`${__dirname}/../..`),

  slack: {
    webhookUri: process.env.SLACK_WEBHOOK_URI || 'https://hooks.slack.com/services/TOKEN'
  }
}
