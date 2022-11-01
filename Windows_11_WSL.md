{% include topnav.html %}
# How to install WSL2 to your computer  (Windows 11) ?

### Installation Process (with PowerShell)
* Start Powershell with Administrator rights (Run as Administrator)

* WSL will be installed to your computer and in the default setting it will download latest Ubuntu
> If you already have wsl installed you should make sure that it is updated. Use command wsl --update to update it.

```
wsl --install
```
![Installing WSL](assets/wslupdate.png "WSL --install")


### Set default WSL version and check installed distributions
```
wsl --set-default-version 2
wsl --list --verbose
```
![Installing WSL](assets/WSL_status.png "WSL status")



###  See a list of the Linux distributions available through the online store.


![Installing Debian to WSL](assets/WSL_Debian.png "WSL Debian")


###  Lets install Ubuntu 20.04 and Debian Distripution. We will use Ubuntu as main platform and Debian for testing.
```
wsl --install --distribution Ubuntu-20.04

wsl --install --distribution Debian

wsl --setdefault Ubuntu-20.04
```

###  Updating WSL distripution using Powershell



```
wsl -d Ubuntu -u root bash -c 'apt update ; apt upgrade -y'
wsl -d Ubuntu-20.04 -u root bash -c 'apt update ; apt upgrade -y'
```

### Uninstalling command is --unregister
```
wsl --unregister Ubuntu-20.04

wsl --unregister Debian

```

### Export and import a Ubuntu distribution to a TAR file


```
wsl --export Ubuntu "G:\My Drive\Ubuntu_wsl_backup.tar"
```

* Import a new distribution

```
wsl --import Ubuntu-backup "c:\temp\" "G:\My Drive\Ubuntu_wsl_backup.tar"

```

![Installing Debian to WSL](assets/WSL_export_inport.png "WSL Debian")


### Problem Solving / Windows updates

Update Windows computer and WSL. Start Powershell with Administrator rights

```
# Install Windows update module
Install-Module PSWindowsUpdate -Confirm
Get-WindowsUpdate
Install-WindowsUpdate
# Reboot as needed 
```

Update WSL kernel
```
# WSL kernel updates
wsl --update

```

Convert WSL 1 to WSL 2
```
# List all installed Ubuntu WSL intance
wsl --list --verbose

# Find what WSL install is running in 1 and convert it to 2
wsl --set-version Ubuntu 2
wsl --set-version Ubuntu-20.04 2

![WSL1to2](https://user-images.githubusercontent.com/29271631/199265350-b757d808-06cb-47df-bc93-b3e1c3f84a8d.png)

# Fix the default 
wsl --set-default-version 2


```



More command can be found https://docs.microsoft.com/en-us/windows/wsl/basic-commands

