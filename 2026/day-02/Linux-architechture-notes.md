1. The core components of Linux (kernel, userspace, init/systemd)?

Ans: The Linux is open-source operating system developed by Linus Torvals in 1991. 90 percent of applications are built and runs on Linux.
It is an open-source software that is most popular and widely used in the industry as well as on personal use basis.
a)Linux kernel: It is heart of operating system. it provides platform for programs and various services to run on top of it.
the Linux operating system and kernel together provides user-friendly platform. kernel is the middle layer.
which virtualizes the computers common hardware resources to provide each process its own virtual resources.
b)User-space: user-space is unprivileged territory where user mode applications get to play. 
each application gets its private space, ensuring that it cannot interfere with others or kernel.
this separation safeguards systems integrity and facilitates efficient task management.
c)init/systemd: systemd is an system and service manager for Linux operating system. 
When runs as first process on boot (as PID 1), it acts as init system that brings up and maintain userspace services. 
separate instances are started for logged-in users to start their services. it cannot be directly invoked by the user. it has 11 different types units.

2. How processes are created and managed?

Ans:  A process is simply a program that is currently running on your system. 
whenever you execute a command in Linux the operating system creates a process to run that commands process ID (PID) helps the system track and manage process. 
no two processes can have the same process ID at the same time. once the process ends its PID may be reused late. 
"ps" command list the running process on screen. "Ctrl + c" will exit command, for process running in background "kill" command can be used if its PID is known.

3. Explain process states?

Ans: a)Running state: Process is either running on the CPU or is ready to run. It moves to this state after creation, when resources are available, or when it is scheduled.
The scheduler is responsible for controlling which process runs next and when, to allocate CPU time equally to all processes.
b)Sleeping state: Process chooses to temporarily halt execution and wait for an event to occur: 
Interruptible Sleep (S):Can be interrupted by signals to wake up and handle I/O or resource requests 
Uninterruptible Sleep (D): Cannot be interrupted by signals; usually waiting for critical I/O operations to finish.
Stopped state:Process is temporarily stopped by a user or a debugger using signals such as SIGSTOP. 
The process is halted for debugging purposes or observation but is not terminated. The process can be resumed later.
c)Zombie State: Process has completed execution but still occupies a slot in the process table. 
It is waiting for its parent process to read its exit status using the `wait()` system call. 
Once the parent process has obtained this information, the zombie process is removed. 
Too many zombie processes are a sign of inefficient process management.

4. Five commnads that can be should daily are as follows:

1 Top: Top command displays a list of processes that are running in real-time along with their memory and CPU usage.
2 Ps : ps is short for ‘Process Status’. It displays the currently-running processes.
However,unlike the top command, the output generated is not in realtime.
3 kill : To stop a process in Linux, use the 'kill’ command. kill command sends a signal to the process.
4 DF : This utility reports the free disk space(Hard Disk) on all the file systems.
5 Free : This command shows the free and used memory (RAM) on the Linux system.

5. What systemd does and why it matters?

Ans: Systemd is a system that is specifically designed for the Linux kernel.
It replaces the sysvinit process to become the first process with PID = 1,
which gets executed in user space during the Linux startup process. It manages the services with systemd:
Bleow is the list of some useful systemd utilities:
a) Systemctl: systemctl may be used to introspect and control the state of the "systemd" system and service manager.
b) journalctl:  journalctl is used to print the log entries stored in the journal by systemd-journald.service(8)
and systemd-journal-remote.service(8).If called without parameters,
it will show the contents of the journal accessible to the calling user, starting with theoldest entry collected.
c) hostnamectl: hostnamectl may be used to query and change the system hostname and related settings.
d) localectl may be used to query and change the system locale and keyboard layout settings
e) timedatectl: Used to Set time and date.
f) systemd-Cgls: systemd-cgls recursively shows the contents of the selected Linux control group hierarchy in a tree.
g) systemadm: It is a Front-end for systemctl command


