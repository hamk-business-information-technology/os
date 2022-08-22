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

```
wsl --install --distribution Debian
```
![Installing Debian to WSL](assets/WSL_Debian.png "WSL Debian")


* Uninstalling command is --unregister
```
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



More command can be found https://docs.microsoft.com/en-us/windows/wsl/basic-commands


