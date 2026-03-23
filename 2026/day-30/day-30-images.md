### Task 1: Docker Images

![Docker pull nginx](./images/Docker-pull-nginx.png)

![Docker pull ubuntu](./images/Docker-pull-ubuntu.png)

![Docker pull alpine](./images/Docker-pull-alpine.png)

![Docker images list](./images/Docker-images.png)

- 1 Compare ubuntu vs alpine- Why is one much smaller

Ans:

- Alpine is tiny(13.1MB) Vs Ubuntu(119MB) because it uses musl libc, BusyBox, and includes minimal tools designed for containers. 

- Ubuntu ships with full GNU tools, glibc and extras for general use.

![Docker inspect](./images/Docker-inspect.png)

![Docker remove image](./images/Docker-images.png)

### Task: Image Layers

![Docker image history](./images/Docker-image-history.png)

- 2 What do you see?

Ans: 
- The base layer is debian:trixie (87.4MB)
- Followed by RUN and COPY commands adding config/scripts
- Final layers set env vars, expose port 80, and set entrypoint
- Most layers are small (KB), except the base OS layer
- This helps you optimize images — e.g., combine RUN commands or remove unnecessary files to reduce size.

