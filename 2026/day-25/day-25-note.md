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

