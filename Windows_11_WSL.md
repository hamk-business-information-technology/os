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

wsl --setdefault Ubuntu-20.04
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



More command can be found https://docs.microsoft.com/en-us/windows/wsl/basic-commands

