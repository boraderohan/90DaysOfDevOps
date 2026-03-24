### Task 1: Your First Dockerfile

## Task 3: CMD VS ENTRYPOINT

- 1. When would you use CMD vs ENTRYPOINT?

Ans: 
- Use CMD when:
- You want a default command that users can easily override.
- Building a general-purpose image where run the command might change.
- You need flexibility - users can run docker run image custom-command to replace it entirely.

- Use ENTRYPOINT when:
- You want do define a specific executable that always runs.
- Building a container that acts like a standalone program
- You want to prevent accidental command changes - users can't override it without --entrypoint.


## Task 6: Build Optimization

- 2. Why does layer order matter for Docker build 

Ans: Docker builds images layer by layer and caches each layer. When we build:
- if a layer has not changed, Docker reuses it 
- if a layer changes, Docker rebuilds it and all layers after it
- place frequently changing instructions at the bottom of the Dockerfile.

