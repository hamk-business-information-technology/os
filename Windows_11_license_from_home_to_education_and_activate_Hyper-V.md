{% include topnav.html %}
# How to update Windows 11 license from home to education and activate Hyper-V

#### 1) Backup Windows license
* Start Powershell or CMD 
* Run a command
```
wmic path SoftwareLicensingService get OA3xOriginalProductKey
```
* Save it in a safe place 😊

#### 2) Getting a new Windows 11 Education license
Log in to https://azureforeducation.microsoft.com/devtools
Find Windows 11

![Windows 11 key](assets/MS_portal_windows11.png "View Key on Windows 11 Educational version")

* View Key ja save it to your computer
* Click start menu and type Windows activation


![activation](assets/windows11_activation.png "View Key on Windows 11 Educational version")

* Choose Change product key and input your License key for Windows 11
Windows license update will end in strange error THAT IS A NORMAL MICROSOFT WAY TO SAY “JOB WELL DONE”. 
Restart your computer and Windows will activate new license in 1-3 minute 

#### 3) TMP / Virtualization ON
https://www.isumsoft.com/computer/enable-virtualization-technology-vt-x-in-bios-or-uefi.html
https://2nwiki.2n.cz/pages/viewpage.action?pageId=75202968


#### 4) Activate Hyper-V

* Start Powershell with Adminitrator rights (Run as Administrator)

```
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

![hyper-v_on](assets/hyper-v_on.png "View Key on Windows 11 Educational version")


* Restart your computer finalize the changes to your operating system





***Congratulations, you have updated your Windows 11 licence and activated Hyper-v***
