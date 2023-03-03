# User Behaviour Monitor using Angular

## Installation

- Clone this repository: `git clone https://github.com/kimberleyvella/PhishBehaviourMonitor.git`.
- Download **[Visual Studio Code](https://code.visualstudio.com/#alt-downloads)**.

### Windows

1. Download **[NodeJS](https://nodejs.org/download/release/v16.14.0/)** version **16.14.0**.
   Verify installation using `node -v`.
2. Write the following commands in the **CMD** to download Angular version **10.0.1**:
    ```
    npm install -g npm
    npm install -g @angular/cli@10.0.1
    ```
    Verify installation using `ng version`.
3. Go to the `src` folder using
   `cd PhishBehaviourMonitor/phish_behaviour_monitor/src`.
4. Install node dependencies with `npm install`.

### Mac/Linux

1. Go to the `phish_behaviour_monitor` folder using
   `cd PhishBehaviourMonitor/phish_behaviour_monitor`.
2. For Ubuntu run: `sudo apt update && sudo apt upgrade`
3. To install curl: `sudo apt install curl`
4. Verify installation using `curl --version`
5. Run the installation script for mac/linux (other.sh) using `./other.sh`

### Running the Prototype

To run the project write: `npm start` or `ng serve --open`
