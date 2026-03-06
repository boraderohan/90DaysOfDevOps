## Task: Git Merge - Hands-on

git checkout -b feature-login

![git_task_1](https://github.com/user-attachments/assets/ee292428-6fde-4592-865c-1d53c0a071a2)


git switch main

![git_task_cont](https://github.com/user-attachments/assets/a9875db3-d0f3-439a-b47f-ebce78f72db3)


The Git did fast-forward merge.

![Feature_branch](https://github.com/user-attachments/assets/601ad9a8-9e40-45d3-8ca8-70afb9b24a4a)


git checkout -b feature-signup

![feature_signup](https://github.com/user-attachments/assets/2883ead0-3527-476d-a2f3-7901a6055dd5)


git merge feature-signup

![main_feature_signup_merge](https://github.com/user-attachments/assets/a2952f05-8808-46f0-be15-0a6bb7c25414)

# Task 2: Git Rebase- Hands-on

git checkout -b feature-dashboard 

![feature_dashboard-1](https://github.com/user-attachments/assets/592de0b6-3259-4238-9853-df7e0107dc3e)


git add git-commands.md
git commit -m "chore: Added new commands in the git-commands.md"

![feature_dashboard-2](https://github.com/user-attachments/assets/51477ad0-a133-429d-ada4-6b014d47404c)


git log --oneline --graph --all

![feature-dashboard-3](https://github.com/user-attachments/assets/df9d1561-a43e-4660-993a-a63dcc89b85b)


# Task 3: Squash Commit vs Merge Commit

git checkout -b feature-profile 
git switch main
git merge --squash

![feature-profile-1](https://github.com/user-attachments/assets/106c3d5b-a496-4cd1-aada-681d452e3455)

![feature-profile-2](https://github.com/user-attachments/assets/53b210de-de4b-40fb-9e99-ed9cd798569a)

![feature-profile-3](https://github.com/user-attachments/assets/127e4151-20d9-4391-8b03-02dc1c3aa5d6)


git checkout -b feature-settings
git add <filename>
git commit -m "suitable comment"

![feature-setting-1](https://github.com/user-attachments/assets/732170ff-2d4e-4146-a633-e50b254ee09a)

![feature-setting-2](https://github.com/user-attachments/assets/6d1988be-7688-48c8-b8ba-2563f9af8f5f)

![feature-setting-3](https://github.com/user-attachments/assets/3c7379cd-a134-433e-a69c-4f1b52ef3dcc)

![feature-setting-4](https://github.com/user-attachments/assets/443c47c0-bed4-48ae-81c5-8fdd388b6164)

