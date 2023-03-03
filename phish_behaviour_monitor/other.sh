#!/usr/bin/env bash

sudo apt update && sudo apt upgrade
ostype=$(uname)

# Check for curl
if ! command -v curl &> /dev/null
then
    if [[ "$ostype" == "linux" ]] 
    then
        sudo apt install curl
    fi

    echo "Curl Version " `curl --version` " Installed"
fi

# Install NVM
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm

source ~/.zshrc && source ~/.bash_profile && source ~/.zprofile &> /dev/null

# Check for NVM
if ! command -v nvm &> /dev/null
then
    echo "NVM could not be found. Please check your installation and try again."
    exit
fi

# Define the Node.js and Angular CLI versions
node_version="16.14.0"
angular_version="10.0.1"

# Install Node.js and the Angular CLI
nvm install $node_version
nvm use $node_version

if ! command -v node &> /dev/null
then
    echo "Node.js could not be found. Please check your installation and try again."
    exit
fi

npm install -g npm
npm install -g @angular/cli@$angular_version

if ! command -v ng &> /dev/null
then
    echo "The Angular CLI could not be found. Please check your installation and try again."
    exit
fi

source ~/.zshrc && source ~/.bash_profile && source ~/.zprofile &> /dev/null

echo 'Installing Project Dependencies...'
npm install

echo "Done!"