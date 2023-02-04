
# Installation of basic programs (HAMK BYOD) in students' personal devices (Mac Users)
The following guidelines utilize the **[brew](https://brew.sh/) package manager** for **macOS** to install several applications that are used in different modules in HAMK. 


## Step 1: Installing Apple development environment Xcode and Brew

### Requirements
* A 64-bit Intel CPU or Apple Silicon CPU 1
* macOS Catalina (10.15) (or higher) 2
* Command Line Tools (CLT) for Xcode (from xcode-select --install or https://developer.apple.com/download/all/) or Xcode 3
* Terminal emulator

#### Open a Terminal by clicking the Spotlight (magnifying glass) icon in the menu bar or press Command-Space bar

#### Install needed development environment components
```
xcode-select --install
```
#### Install Brew package manager
```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```

#### Under "==> Next steps:" Read and copy tree lines of code to terminal and execute it. Here are a examples
```
echo '# Set PATH, MANPATH, etc., for Homebrew.' >> /Users/$USER/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/$USER/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
```



## Step 2: Programs/Apps Installation
### The list of apss that you are going to install is as below: <br>
> Vscode, vmware-horizon-client, disk-inventroy, git, github, obs, vmware-fusion, google drive, google chrome, docker & zoom.
### To install the above mentioned programs run the following script
```
brew install --cask visual-studio-code; brew install --cask vmware-horizon-client; brew install --cask disk-inventory-x; brew install --cask zoom; brew install git; brew install --cask github; brew install --cask obs; brew install --cask utm; brew install --cask google-drive; brew install --cask docker; brew install --cask google-chrome; brew install --cask microsoft-teams; brew install docker
```

## Further Actions
 ***Upon successfull installation of the above mentioned programs, you will come across the following two windows:*** 


### Create GitHub Account
If you already have a **GitHub account**, you can sign in and if you don't have one, you can create a new GitHub account. Please use your personal email id to create a GitHub account. 

![GitHub account creation](assets/githubaccount.png "Please click Create your free account or Sign in to GitHUb.com depending on your situation")

### Configure Git
You need to configure Git by providing your full name and email address. Use the same email address that you used to sign up for GitHub.

![Configure Git](assets/configureGit.png "Please use your Full Name and email ")

***Congratulations, you have installed most of the required applications that you need while studying at HAMK. Over time, you will need to install additional applications.***

## All done! Here are some recommended apps for faster multitasking.

### Mac Windows manager / Windows snaping tool
* [https://www.warp.dev/](https://rectangleapp.com/)



### Per-device scrolling prefs on macOS.
* [https://github.com/pilotmoon/Scroll-Reverser](https://github.com/pilotmoon/Scroll-Reverser)


### Warp terminal 
* [Warp terminal](https://www.warp.dev/) and [New *incredible* mac OS terminal! (warp + starship + zsh)](https://www.youtube.com/watch?v=NfggT5enF4o)

### Get hidden files visible (Like .ssh folder)
* Go to Parent folder
* press Cmd + Shift + . to reveal the hidden folder and files. 
* When you no longer want to see them click Command + Shift + . again.

### Spice up your MacOS Terminal
https://www.engineeringwithutsav.com/blog/spice-up-your-macos-terminal
