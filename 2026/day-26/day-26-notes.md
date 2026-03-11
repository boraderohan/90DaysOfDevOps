## Task 1

1)What authentication methods does gh support?

Ans: GitHub CLI (gh) supports multiple authentication methods:

Browser-based login: Automatically opens a browser for OAuth authentication, ideal for most users.

Authentication token: You can paste a personal access token (PAT) manually if browser login isn’t available.

SSH key: If you’ve configured SSH keys for Git operations, gh can use them for authentication, especially when you select SSH as your preferred protocol during setup.

You can switch or re-authenticate anytime using gh auth login 

# Task 3 

2)How could you use gh issue in a script or automation?

Ans: The gh issue command is useful for automating GitHub issue workflows. Here are the main ways to use it in scripts:

Common use cases:

Create issues: gh issue create --title "Bug" --body "Description" — automate issue creation from logs or monitoring alerts
List issues: gh issue list --label "bug" --state open — fetch issues for processing or reporting
Update issues: gh issue edit <number> --title "New title" — bulk update issues programmatically
Add comments: gh issue comment <number> --body "Comment text" — auto-respond or add status updates
Close/reopen: gh issue close/reopen <number> — manage issue lifecycle automatically

Typical automation scenarios:

CI/CD pipelines creating issues for failed tests
Scheduled scripts that triage or label issues
Monitoring systems that auto-report problems
Release workflows that close resolved issues

You can pipe commands together or loop through issue lists to perform batch operations. 
The --json flag also lets you parse structured output for complex automation.

## Task 4

3) What merge methods does gh pr merge support?

Ans: gh pr merge supports three merge methods:

merge: Creates a merge commit (default)
squash: Combines all commits into one, then merges
rebase: Applies commits linearly onto target branch

4)How would you review someones else's PR using gh?

Ans: gh pr checkout 5
gh pr review 5 --comment "Looks good!" --repo owner/repo-name
gh pr review 5 --approve
gh pr review 5 --request-changes
gh pr review 5 --comment "Fix this line" --path README.md --line 10

# Task 5 

How could gh run and workflow be useful in CI/CD piplines?

Ans: gh run & gh workflow in CI/CD pipelines — key uses:

Monitor runs: gh run list track status of recent workflow runs.
View details: gh run view RUN-ID inspect logs, jobs, and outcomes.
Trigger workflows: gh workflow run workflow.yml manually start workflows (e.g., deploy, test).
List workflows: gh workflow list see all available workflows in repo.
Rerun failed jobs: gh run rerun RUN-ID retry without pushing new code.
Script automation: Combine with --json, --silent, and jq to parse and react to run status in scripts or CI steps.

Useful for:

Auto-retrying failed builds
Triggering deploys on demand
Reporting build status in Slack/CI scripts
Auditing workflow history programmatically
