## Task 1

1)What authentication methods does gh support?

Ans: GitHub CLI (gh) supports multiple authentication methods:

Browser-based login: Automatically opens a browser for OAuth authentication, ideal for most users.

Authentication token: You can paste a personal access token (PAT) manually if browser login isn’t available.

SSH key: If you’ve configured SSH keys for Git operations, gh can use them for authentication, especially when you select SSH as your preferred protocol during setup.

You can switch or re-authenticate anytime using gh auth login 

