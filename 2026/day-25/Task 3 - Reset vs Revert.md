| | git reset | git revert |
|---|---|---|
| **What it does** | Moves branch pointer backward; rewrites history | Creates new commit that undoes changes |
| **Removes commit from history?** | Yes — commits are erased | No — original commit remains |
| **Safe for shared/pushed branches?** | No — causes history conflicts | Yes — keeps history linear |
| **When to use** | Local, unpublished commits | Shared/published commits |
