/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

  app.on(["issues.edited","issues.opened"] , async (context) => {
    //console.log("Context is "+JSON.stringify(context))
    console.log("\nAction: Issue Opened or Edited \nIssue Number: "+context.payload.issue.number+"\nIssue Title:"+context.payload.issue.title)
    // const issueComment = context.issue({
    //   body: "Thanks for opening this issue!",
    // });
    // return context.octokit.issues.createComment(issueComment);
  });

  app.on(["pull_request.opened", "pull_request.edited"], async(context) => {
    console.log("\nAction: PR Opened or Edited \nPR Number: "+context.payload.pull_request.number+"\nPR Title:"+context.payload.pull_request.title)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
