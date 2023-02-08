
# Installation of basic programs (HAMK BYOD) in students' personal devices (Windows). 

The following guidelines utilizes the **chocolatey package manager** for **Windows** to install several applications that are used in different modules in HAMK. 

## Step 1: Install CHOCOLATEY

### Requirements
* Windows 7 or newer version of Windows Operating System (Recommended Windows 10 or 11)
* PowerShell v2+
* .NET Framework 4+ 

### Installation Process (with PowerShell)
* Start Powershell with Administrator rights (Run as Administrator)
> If you already have choco installed in your device, run the following command in your powershell 
```
rm C:\ProgramData\chocolatey -erroraction 'silentlycontinue'
```
* Run the following command in Powershell to install CHOCOLATEY

```
Set-ExecutionPolicy Bypass -Scope Process -Force; iwr https://community.chocolatey.org/install.ps1 -UseBasicParsing | iex
```

## Step 2: Programs/Apps Installation
### The list of apss that you are going to install is as below: <br>
> powershell-core, git, vscode, putty,firefox, greenshot,google-drive-file-stream, googlechrome notepadplusplus, winscp, 7zip,  paint.net, windirstat, zoom, sudo, vmrc, vmware-horizon-client, github-desktop, docker-desktop & obs-studio
### To install the above mentioned programs run the following script

```
choco install powershell-core git vscode putty greenshot notepadplusplus winscp 7zip paint.net windirstat zoom sudo vmrc vmware-horizon-client github-desktop obs-studio docker-desktop google-drive-file-stream googlechrome curl -y

```
## Step 3: Installing some useful VScode addons 

* Restart your Powershell session 
* Run the following commands 

```
code --install-extension ms-vscode.powershell
code --install-extension vsls-contrib.gistfs
code --install-extension hashicorp.terraform
code --install-extension ms-vscode-remote.remote-containers
code --install-extension ms-azuretools.vscode-docker
code --install-extension ms-vscode-remote.vscode-remote-extensionpack

```
# Git and Github
### Create GitHub Account
If you already have a **GitHub account**, you can sign in and if you don't have one, you can create a new GitHub account. 

1) Please use your personal email id to create a GitHub account. 
2) Go to [https://github.com/settings/emails](https://github.com/settings/emails) and add your student HAMK email
3) Activate [https://education.github.com/pack](https://education.github.com/pack). HAMK email needs to be added before activation. Depending of the situation you will maybe need to be verified. Use your mobile student card to verify yourself.

### Configure Git
You need to configure Git by providing your full name and email address. Use the same email address that you used to sign up for GitHub.

![GitHub account creation](assets/githubaccount.png "Please click Create your free account or Sign in to GitHUb.com depending on your situation")
![Configure Git](assets/configureGit.png "Please use your Full Name and email ")

***Congratulations, you have installed most of the required applications that you need while studying at HAMK. Over time, you will need to install additional applications.***
