
## How to install WSL2 to your computer  (Windows 11) ?

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


### Enabling systemd to your default WSL distribution Ubuntu-20.04
We are starting to use systemd, which brings WSL Linux closer to a virtual machine or physical installation

```
wsl -u root -d Ubuntu-20.04 bash -c "touch /etc/wsl.conf"
wsl -u root -d Ubuntu-20.04 bash -c "echo [boot] >> /etc/wsl.conf" 
wsl -u root -d Ubuntu-20.04 bash -c "echo systemd=true >> /etc/wsl.conf" 
wsl -t Ubuntu-20.04
```
### Limiting amount of memory and cpu WSL can use. Change values as needed
Start Powershell with **NORMAL** user rights and copy all command in to it. 

```
$contentToAdd = @"
[wsl2]
memory=4GB # Limits VM memory in WSL 2 to 4 GB
processors=2 # Makes the WSL 2 VM use two virtual processors
"@

New-Item $home\.wslconfig
Add-Content $home\.wslconfig $contentToAdd
notepad++ $home\.wslconfig 
```

# How to backup WSL and remove it from the machine to save space

### Export and import a Ubuntu distribution to a TAR file

```
wsl --export Ubuntu "G:\My Drive\Ubuntu_wsl_backup.tar"
```

Import a new distribution

```
wsl --import Ubuntu-backup "c:\temp\" "G:\My Drive\Ubuntu_wsl_backup.tar"

```

![Installing Debian to WSL](assets/WSL_export_inport.png "WSL Debian")


### Uninstalling command is --unregister
No need to remove WSL distribution if everything is working

```
wsl --unregister Ubuntu-20.04
wsl --unregister Debian
```

# Problem Solving
Update Windows computer and WSL. Start Powershell with Administrator rights as many times is needed. Go through repairs in order and test regularly.

```
# Install Windows update modules
Install-Module PSWindowsUpdate -Confirm
Set-ExecutionPolicy -Scope Process -ExecutionPolicy unrestricted
Import-Module PSWindowsUpdate
Get-WindowsUpdate
Install-WindowsUpdate
# Reboot as needed 
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

### [Hyper-V still not working? Jump to "Hyper-V still not working?"](#hyper-v-still-not-working) otherwise, move on with WSL install

```
# Let's check that WSL is installed
wsl --install
```

Update WSL kernel
```
# WSL kernel updates
wsl --update
```

Reinstall Ubuntu, Debian and Docker images. THIS WILL RESULT IN LOST DATA if you have not save data on your host machine!
```
Stop-Process -Name "Docker Desktop" -Force
wsl --unregister Ubuntu-20.04
wsl --unregister Ubuntu
wsl --unregister Debian
wsl --unregister docker-desktop-data
wsl --unregister docker-desktop
wsl --set-default-version 2
wsl --install --distribution Ubuntu-20.04
wsl --install --distribution Debian
Start-Sleep -Seconds 10 #Waiting WSL to activate
wsl -d Ubuntu-20.04 -u root bash -c 'apt update ; apt upgrade -y'
wsl --setdefault Ubuntu-20.04
```

Convert WSL 1 to WSL 2
```
# List all installed Ubuntu WSL intance
wsl --list --verbose

# Find what WSL install is running in 1 and convert it to 2
wsl --set-version Ubuntu 2
wsl --set-version Ubuntu-20.04 2

# Fix the default 
wsl --set-default-version 2

```
![WSL1to2](assets/WSL_WSL1to2.png "WSL1to2")


#### Hyper-V still not working?

Forcing Hyper-v to start using Windows bootloader. 

* Start Powershell with Adminitrator rights (Run as Administrator)

```
bcdedit /set hypervisorlaunchtype auto
```

More command can be found https://docs.microsoft.com/en-us/windows/wsl/basic-commands
