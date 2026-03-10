# Task 1 

Use git reset --soft What happens to the changes?

Ans: The commit history is removed. But in staging area changes from head is still staged.

use git reset --mixed what happens?

Ans: The commit history is removed. But in the staging area it is unstaged. in work directory changes are still present.

use git reset --hard What happens this time?

Ans: The commit history is removed. the staging is cleared, from working directory also the changes are deleted.


1)What is the difference --soft, --mixed, and --hard?

Ans: --soft: Moves the branch pointer back but keeps all changes staged (ready to commit). Useful if you want to reword or combine commits.

--mixed (default): Moves the branch pointer back and unstages changes, leaving them in your working directory. You can edit or re-stage them before committing.

--hard: Moves the branch pointer back and discards all changes — both staged and unstaged. Use with caution, as it’s irreversible

2)Which one is destructive and why?

Ans: The --hard reset is considered destructive because it:

Overwrites your working directory to match the target commit — any uncommitted changes are permanently lost.
Discards staged changes — anything you had prepared for commit is gone.
Cannot be undone easily — unless you’ve stashed or committed the changes elsewhere.


3) When would you see each one?

Ans: --soft -I want recommit or combine the commit: You made a commit but you want to tweak the message or combine it with previous one.

--mixed —I want to rework or reorganize changes before committing: You committed too early or want to split changes into multiple commits.

 --hard —I want to completely discard everything and go back: You messed up your working directory and want to start fresh from a known good commit.

4) Should you ever use git reset on commits that are already pushed?

Ans: No — avoid git reset on pushed commits unless you’re absolutely sure and coordinate with your team.
git reset rewrites history — if others have pulled the old commits, their repos will be out of sync.
Pushing after a reset can cause merge conflicts, lost work, or force others to git reset --hard too.

only if: You’re the only one working on the branch.


# Task 2

5)How is git revert different from git reset?

Ans: git reset moves the branch pointer backward to a previous commit, effectively "undoing" commits as if they never happened. 
git revert creates a new commit that undoes the changes from a previous commit, leaving the commit history intact.

6)Why is revert considered safer than reset for shared branches?

Ans: With reset, you're rewriting history — if others have already pulled those commits, their branches will diverge and cause conflicts.
With revert, you're adding a new commit that undoes changes, so the history remains linear and others can pull cleanlywithout conflicts.

7)When would you use revert vs reset?

Ans: Use reset on local/unpublished commits when you want to clean up your history before pushing.
Use revert on shared/published commits to safely undo changes without disrupting collaborators' work.

# Task 4 

8)How it works?

Ans: GitFlow: Multiple permanent branches with specific purposes.
main holds production code, develop is the integration branch.
Features branch from develop, releases get their own branch for final testing, and hotfixes branch from main for urgent production fixes.

where it's used: Large projects with scheduled releases, multiple versions in production, teams needing formal releasecycles

Pros:

Clear separation of concerns
Multiple versions can be maintained simultaneously
Structured release management

Cons:

Complex with many branches to manage
Slower feedback loops
Overkill for small teams or continuous deployment

GitHub Flow
How it works: Simpler than Git Flow. Uses main as the single source of truth.
Developers create feature branches, open pull requests for review, and merge directly to main after approval. 
main is always deployable.

where it's used: Continuous deployment environments, web applications, startups, teams practicing frequent releases.

Pros:

Simple and easy to understand
Fast feedback and iteration
Ideal for continuous deployment
Fewer merge conflicts

Cons:

Difficult to maintain multiple production versions
Requires robust CI/CD and testing
main must always be stable

Trunk-Based Development

How it works: Developers commit directly to a single main (trunk) branch or use very short-lived feature branches that merge back quickly. 
Emphasizes small,frequent commits and feature flags for incomplete work.

where it's used: High-velocity teams, microservices architectures, organizations practicing continuous integration/deployment, teams with strong testing practices.

Pros:

Minimizes merge conflicts
Encourages small, focused commits
Fast integration and feedback
Reduces branch management overhead

Cons:

Requires excellent test coverage
Feature flags add complexity
Not ideal for inexperienced teams
Needs disciplined commit practices

9)Which strategy would you use for a startup shipping fast?

Ans: For a startup shipping fast GitHub Flow: It’s lightweight, encourages rapid iteration, and keeps main always deployable — perfect for startups needing speed and agility.

10)Which strategy would you use for a large team with scheduled releases?

Ans: For a large team with scheduled releases Git Flow: It provides structure for managing multiple releases, hotfixes, and parallel development — ideal for enterprise or teams with formal release cycles.

11)Which one does your favorite open-source project use? (check any repo on GitHub)

Ans: As for my favorite open-source project — many popular ones (like React, Nodes.js) use Trunk-Based Development or a simplified GitHub Flow variant.
They prioritize small, frequent merges, CI/CD, and feature flags — keeping the main branch stable while shipping fast.
