### Task 1: The Problem

- 1. What happened and why?

Ans:
- we get an error -  Unknown database 'demobd'. my data is gone.

- Why?
Ans: 
- When you remove a container, its filesystem is deleted.
- The data was stored in the container's writable layer, not persisted anywhere.
- To keep data between container restarts, we need volumes.

### Task 2: Named Volumes

- 2. Is the data still there?

Ans: Yes the data is intact.


### Task 3: Bind Mounts

- 3. What is the difference between a named volume and a bind mount?

Ans: Named volume: A named volume is storage mangaed by Docker itself.

- It store it in its own internal location
- Easier to backup, move, and reuse across containers 
- Best for Databases, Production data, Persistent app storage

- Bind Mount: A bind mount directly maps a folder file from your host machine into the container.

- It uses exact host path 
- Chanes on host appear instantly inside container.
- Less portable because path must exist on every machine.-
- Best for Development, Editing source code live, Sharing config files

### Task: Custom Networks

- 4. Why does custom networking allow name-based communication but the default bridge doesn't?

Ans: Default bridge network
- Uses basic Layer 2 bridge connectivity only
- containers get IP addresses
- No automatic DNS server for container names
- Containers must communicate using IP addresses unless links/manul hosts are used 

- Custom bridge network
- Docker create an embeded DNS service 
- Every container name becomes resolvable automatically
- Containers can discover each other by name
- Better isolation and service grouping

