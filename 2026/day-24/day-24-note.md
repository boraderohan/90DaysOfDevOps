## Task 1 

1)What is a fast-forward merge? 

Ans: Fast-forward merge happens when Git can intergrate changes by simply moving the branch pointer forward, rather than create a new merge commit.

It occurs when:

The target branch has not diverged from the branch being merged.

The branch being merged is directly being ahead of the target branch.

The commit history is linear with no conflicting changes.

2)When does Git create a merge commit instead?

Ans: Git creates a merge commit instead of fast-forwardingwhen the branches have diverged - meaning both branches have unique commits that the other doesn't have.

3) What is a merge conflict? (try creating one intentionally by editing the same line in the both branches)

Ans: A merge conflict occurs when Git can't automatically combine changes because both branches modified the same part of the same file - typically the same lines and Git doesn't know which version to keep.

## Task 2

4)What does rebase actually do to your commit?

Ans: Imagine you are working on feature while the main project get new updates, and you want to bring those lastes changes into your work beforing finishing.

You are writing a paragraph for a report.

While you are writign, someone else updates the report with new lines.

Git rebase moves your changes on top of the latest version making it look like they were added last.


5)How is the history different from a merge?

Ans: Merge keeps the original commit history and branch relationships, providing a full picture of development.

Rebase simplifies history but can obscure the origin of changes and is risky on shared branches.

6)Why should you never rebase commits that have been pushed and shared with others?

Ans: You should never rebase commits that have been pushed and shared with others because it rewrites history, creating new commit IDs that break the shared timeline other collaborators depend on

This causes divergent histories — when teammates pull the original commits and build on them, their local branches no longer match the remote, forcing complex merges or risking lost work

The safe alternative is to use git merge, which preserves the shared history and avoids these conflicts 


7)Why should you never rebase commits that have been pushed and shared with others?

Ans: Rewrites commit history — Rebasing creates new commit IDs, even if the changes are identical, which breaks the shared history that other developers depend on.

Creates divergent histories — When collaborators have already pulled the original commits and built their work on top of them, their local history no longer matches the remote. Git sees the rebased commits as entirely new commits, leading to conflicting versions.

Forces complex conflict resolution — This divergence forces collaborators to resolve complex merge conflicts or risk losing their work.

# Task 3

8)What does squash merging do?

Ans: Squash merging combine all commits from a feature branch into a single commit on top of your target branch, rather than preserving each individual commit

9)When would you use squash merger vs regular merger?

Ans: Squash merging combines all commits from a feature branch into a single commit on the target branch, resulting in a clearner, linear history

This approach is often prefereed when you want o maintain a simple and organized commit history, especially for featurres that are ready to be merged into the main branch.

Regular merging: Preserve History regular merging keeps the full commit history of the feature branch, which can be useful for tracking changes and understanding the develogment process

For significant feature with multiple contributors, preserving the history can provide valuable context.

10)What is the trade-off of squashing?

Ans: The trade-off squashing merges is that while it create a cleaner, more readable commit history by consolidating multiple commits into one.

squashing combines multiple logical changes into single commit, which simplifies history but reduces the ability to trace individual changes or revert specific parts of a feature.

# Task 4

11) what is difference between git stash pop and git stash apply?

Ans: Difference Between git stash pop and git stash apply

git stash apply

Applies the stashed changes to your working directory
Keeps the stash in the stash list
Useful when you want to apply changes multiple times or aren't sure if you need them again

git stash pop

Applies the stashed changes to your working directory
Removes the stash from the stash list after applying
Useful when you're done with the stash and want to clean up

12) When do you use stash in a real-world workflow?

Ans: Here are common situations where stashing is invaluable:

Switching branches mid-work

You're working on a feature but need to quickly fix a bug on another branch

Pulling latest changes

You have uncommitted changes but need to pull updates from the remote

Experimenting safely

You want to try a different approach without losing your current work

Code review feedback

You've made changes but get feedback requiring a different approach

Cleaning up before committing

You have debug code or temporary changes mixed with real work

# Task 5


13)What does cherry-pick do?

Ans: Cherry-pick allows you to apply a specific commit from one branch to another without merging the entire branch. 

It copies the changes from that commit and applies them as a new commit on your current branch.

14)When would you use cherry-pick in real project?

Ans: Selective bug fixes: Apply a critical hotfix from a feature branch to production without merging incomplete features

Backporting: Apply a bug fix to an older release branch
Shared fixes: Apply a fix from one branch to multiple branches (e.g., main and develop)
Accident recovery: If you committed to the wrong branch, cherry-pick it to the correct one

15)What can go wrong with cherry-picking?

Ans: Merge conflicts: If the target branch has diverged significantly, cherry-pick may fail with conflicts
Duplicate commits: If you later merge the source branch, you'll have duplicate commits (same changes, different hashes)

Broken dependencies: The cherry-picked commit might depend on changes from earlier commits that aren't on the target branch

History confusion: Cherry-picking creates a non-linear history, which can make it harder to understand the project's evolution

Lost context: You lose the relationship between related commits that should have been applied together
