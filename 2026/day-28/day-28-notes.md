# Day 28 – Revision Day: Everything from Day 1 to Day 27

## Task

You've covered a lot of ground in 27 days — DevOps fundamentals, Linux deep dives, Shell scripting, Python basics, Git & GitHub, and even your developer branding. Today, **stop and revise**. No new concepts. Just solidify what you've learned.

The goal is to identify gaps, revisit topics you struggled with, and make sure you can confidently explain and use everything covered so far.

---

## What You've Covered So Far

| Days | Topic | Key Concepts |
|------|-------|-------------|
| 1 | DevOps & Cloud Intro | What is DevOps, SDLC, Cloud basics |
| 2–7 | Linux Fundamentals | Architecture, commands, processes, systemd, file system hierarchy, troubleshooting, text files |
| 8 | Cloud Server Setup | Docker, Nginx, web deployment |
| 9–11 | Users, Permissions & Ownership | User/group management, file permissions, chown/chgrp |
| 12 | Revision Day 1 | Days 1–11 recap |
| 13 | Volume Management | LVM — physical volumes, volume groups, logical volumes |
| 14–15 | Networking | Fundamentals, DNS, IP, subnets, ports, hands-on checks |
| 16–18 | Shell Scripting | Basics, loops, arguments, error handling, functions |
| 19–20 | Shell Scripting Projects | Log rotation, backup, crontab, log analyzer |
| 21 | Shell Scripting Cheat Sheet | Personal reference guide |
| 22–25 | Git & GitHub | Init, branching, merge, rebase, stash, cherry pick, reset, revert, branching strategies |
| 26 | GitHub CLI | Managing GitHub from the terminal |
| 27 | GitHub Profile | Profile README, repo organization, developer branding |

---

## Challenge Tasks

### Task 1: Self-Assessment Checklist
Go through the checklist below. For each item, mark yourself honestly:
- **Can do confidently**
- **Need to revisit**
- **Haven't done yet**

#### Linux
- [✔️] Navigate the file system, create/move/delete files and directories
- [✔️] Manage processes — list, kill, background/foreground
- [✔️] Work with systemd — start, stop, enable, check status of services
- [✔️] Read and edit text files using vi/vim or nano
- [✔️] Troubleshoot CPU, memory, and disk issues using top, free, df, du
- [✔️] Explain the Linux file system hierarchy (/, /etc, /var, /home, /tmp, etc.)
- [✔️] Create users and groups, manage passwords
- [✔️] Set file permissions using chmod (numeric and symbolic)
- [✔️] Change file ownership with chown and chgrp
- [✔️] Create and manage LVM volumes
- [✔️] Check network connectivity — ping, curl, netstat, ss, dig, nslookup
- [✔️] Explain DNS resolution, IP addressing, subnets, and common ports

Ans: DNS Resolution
Translates human-readable domain names (like google.com) to IP addresses (like 142.250.187.174) using a hierarchical system of DNS servers. When you visit a website, your device queries DNS servers to find the corresponding IP address.

IP Addressing
Unique identifiers for devices on a network. IPv4 uses 32-bit addresses (e.g., 192.168.1.1), while IPv6 uses 128-bit addresses (e.g., 2001:0db8:85a3::8a2e:0370:7334). Each device needs a unique IP to communicate.

Subnets
Divide larger networks into smaller, manageable segments using subnet masks (e.g., 255.255.255.0). This improves performance, security, and organization. For example, 192.168.1.0/24 represents a subnet with 256 possible addresses.

port 80 : HTTP 

port 443: HTTPS

port 22: SSH

port 53: DNS 

port 25: SMTP


- [✔️] Write a script with variables, arguments, and user input
- [✔️] Use if/elif/else and case statements
- [✔️] Write for, while, and until loops
- [✔️] Define and call functions with arguments and return values
- [✔️] Use grep, awk, sed, sort, uniq for text processing
- [✔️] Handle errors with set -e, set -u, set -o pipefail, trap
- [✔️] Schedule scripts with crontab

- Need to revisit this Shell Scriting 

#### Git & GitHub
- [✔️] Initialize a repo, stage, commit, and view history
- [✔️] Create and switch branches
- [✔️] Push to and pull from GitHub
- [✔️] Explain clone vs fork
- [✔️] Merge branches — understand fast-forward vs merge commit
- [✔️] Rebase a branch and explain when to use it vs merge
- [✔️] Use git stash and git stash pop
- [✔️] Cherry-pick a commit from another branch
- [✔️] Explain squash merge vs regular merge
- [✔️] Use git reset (soft, mixed, hard) and git revert
- [✔️] Explain GitFlow, GitHub Flow, and Trunk-Based Development
- [✔️] Use GitHub CLI to create repos, PRs, and issues

Explain clone vs fork 

Ans: 
- Clone: You get local copy to work on, no remote ownership
- Fork: you get your own remote copy to modify and purpose changes via pull request

Explain Squash merger vs regular merge

Ans: Regular Merge
- Preserves all individual commits from your feature branch
- Creates a merge commit that ties the branches together
- Shows the full history of how the feature evolved
- Good for collaborative work or when you want to track changes per commit

- Squash Merge
- Combines all commits from your feature branch into one single commit
- No merge commit is created — it’s like cherry-picking one big change
- Keeps history clean and minimal
- Best for small features or fixes where individual commits aren’t meaningful

Explain when to use rebase vs merge 

Ans:When to Use Each

- Use Rebase when:

- Working on a feature branch that's only yours (not shared)
- You want a clean, linear history before merging to main
- Preparing a PR and want to catch up with main without merge commits
- You're the only one working on that branch
- Use Merge when:

- use Merge When:

- Working on a shared/team branch
- You want to preserve the complete history of when branches diverged
- Merging into main or a protected branch
- Collaborating with others on the same bran

Explain GitFlow, GitHub flow, and Trunk-based Developement

Ans:

- GitFlow

- Branching Strategy:

- main 
- develop
- Feature branches
- Release branches 
- Hotfix branches 

- Process:

- Start feature from develop
- Merge to develop via pull request
- Create release branch for testing
- Merge release to main and develop
- Hotfixes go to main and back to develop

- GitHub Flow 

- Branching Strategy:

- main 
- Feature branches
- Process:

- Create branch from main
- Work on feature
- Open pull request
- Merge to main after review


- Trunk-Based Development (TBD)

- Branching Strategy:

- Single main branch 
- Short-lived feature branches (often 1 day or less)

- Process:

- All work happens on main
- Use feature flags to hide incomplete features
- Merge small changes frequently
- Deploy multiple times per day
 
---
### Task 2: Revisit Your Weak Spots
1. Pick **3 topics** from the checklist where you marked "Need to revisit"
2. Go back to that day's challenge and redo the hands-on tasks
3. Document what you re-learned in `day-28-notes.md`

- I re-learned the shell scripting, GitHub CLI, LVM volume 

---

### Task 3: Quick-Fire Questions
Answer these from memory (no Googling). Then verify your answers:

1. What does `chmod 755 script.sh` do?

Ans: The chmod 755 is a command use to give permission to the file.
- In this case the owner has read,write,execute, group has read and execute, other also has read and execute permissions.

2. What is the difference between a process and a service?

Ans: A process is any application that is currently running, whether it is one that interacts directly with the user, such chrome, or one that is runnig quietly in the background. 

- A service, on the other hand is a special kind of process that tends to run quietly in the background, often launching at boot time and being managed by the operating system.

- While services are processes, not all processes are services.

- Services tend to have no user interface and instead tend to perform functions such as managing networkd connections, databases and print queues and will often start up again if they crash.

- In unix and similar operating systems,services tend to be called "daemons" and are managed by "init".

3. How do you find which process is using port 8080?

Ans: Using command sudo netstat -tulpn | grep 8080, we can find out which process is using port 8080.

4. What does `set -euo pipefail` do in a shell script?

Ans: The set -euo pipefaill line in a shell script enables three important saftey options:

- -e: Exit immediately if any command exits with a non-zero status
- -u: Treat unset variables an error and exit immediately if one is used

- -o pipefail: if any commnad in pipeline fails the entire pipeline returns a non-zero exit code(instead of just the last command).


5. What is the difference between `git reset --hard` and `git revert`?

Ans:
- git reset --hard: Rewrites history by moving the barnch pointer to a previous commit and discarding all changes.

- It is desctructive and should never be used on shared branches.

- git revert: Creates a new commit that undoes the changes of the previous commit.

- It is safe for shared branches because it does not alter history it just adds a new "undo" commit.

6. What branching strategy would you recommend for a team of 5 developers shipping weekly?

Ans: The branching strategy i would recommend for a team of 5 developers shipping weekly:

- Trunk-Based Development (With short-lived branches)

- This is usually the best fit for small teams shipping frequently.

- How it works

- One main branch 

-  Developers create short-lived feature branches(1-2 days max)

- Merge back into main quickly via PRs

- Use feature flags for incomplete work if needed

- CI/CD runs on every merge alway releasable.

7. What does `git stash` do and when would you use it?

Ans: 
- git stash lets you temporarily save your uncommitted changes so you can switch branches or work on something else without committing unfinished work.

8. How do you schedule a script to run every day at 3 AM?

Ans: Using follow command and script:
- crontab -e

- Script: 0 3 * * * /path/to/your/script.sh

9. What is the difference between `git fetch` and `git pull`?

Ans: The difference between git fetch and git pull:

- git fetch: Downloads new commits, branches and tags from the remote repository.

- But does not merge or modify your local working copy. it is safe and lets you review changes before integrating them.

- git pull: it fetches and immediately integrates changes into you current branch.

- note: Think of fetch as "Chech what is new" and pullas "get what is new and apply it"


10. What is LVM and why would you use it instead of regular partitions?

Ans: LVM (Logical Volume Manager) lets you create flexibel resizable storge volumes from multiple disks. unlike regular partitions.

- Resize volumes online
- combine disks into one storage pool.
- create snapshots for backups or testing 
- Add/remove disks easily.

- Use it when you need flexibility and scalability
- especially on servers or multi-disk setups. 
- Avoid it for simple, static system where basic partitions suffice.

---

### Task 4: Organize Your Work
1. Make sure all your daily submissions (day-1 through day-27) are committed and pushed
2. Check that your `git-commands.md` is up to date
3. Check that your shell scripting cheat sheet is complete
4. Verify your GitHub profile and repos are clean (from Day 27)

---

### Task 5: Teach It Back
Pick **one topic** you've learned and write a short explanation (5-10 lines) as if you're teaching it to someone who has never heard of it. Add it to your `day-28-notes.md`.

Examples:
- Explain Git branching to a non-developer
- Explain file permissions to a new Linux user
- Explain what a crontab is and why sysadmins use it

Teaching is the best test of understanding.

- Explain Git branching to non-developer

Ans: Imagine you are writing a book and want to try a new ending without ruining the original. That is what Git branching does

- A branch is like a separate copy of your work where can make changes safely.The main version called "Main"stays untouched while you experiment.

- If your changes turn out good, you can merge them back into the main version. if not, you can simply discard the branch.

- This lets multiple people work on different idea at the same time without interfering with each other.

---

## Submission
1. Add your `day-28-notes.md` to `2026/day-28/`
2. Push to your fork
3. Make sure all previous days are pushed and up to date

---

## Learn in Public

Share your self-assessment results or your "teach it back" explanation on LinkedIn. Be honest about what you found easy and what you need to work on.

`#90DaysOfDevOps` `#DevOpsKaJosh` `#TrainWithShubham`

Happy Learning!
**TrainWithShubham**

