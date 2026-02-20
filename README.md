# PWA Template

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=flat-square&logo=pwa&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)

> **Note:** This repository is a fork of [muhammadsalif/Demo-PWA](https://github.com/muhammadsalif/Demo-PWA).

A minimal Progressive Web App template that meets all minimum PWA requirements. Use this as a starting point to quickly enable PWA capabilities on any existing website hosted on a LAMP server.

## Overview

This template provides the essential files needed to convert any website into an installable Progressive Web App. It includes a service worker for offline caching, a web app manifest for installability, and app icons. A one-liner bash command is provided to deploy the PWA files to your existing web server.

## Features

- Meets all minimum PWA requirements for Lighthouse compliance
- Service worker with install, activate, and fetch event handling
- Cache-first offline strategy for the app shell
- Web app manifest with 192x192 and 512x512 icons
- One-command deployment script for LAMP servers
- Drop-in template that works with any existing HTML website

## Prerequisites

- A LAMP server (Linux, Apache, MySQL, PHP) or any web server
- Your website hosted at `/var/www/html` (or adjust paths accordingly)
- HTTPS certificates configured for your domain (free via [Let's Encrypt / Certbot](https://certbot.eff.org/))
- SSH access to your server

## Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/danielcregg/pwa-template.git
   cd pwa-template
   ```

2. **Quick Deploy to LAMP Server** -- SSH into your server and run:
   ```bash
   cd /var/www/html &&
   sudo wget https://github.com/danielcregg/pwa-template/archive/refs/heads/master.zip -P /var/www/html/ &&
   sudo apt install unzip &&
   sudo unzip /var/www/html/master.zip &&
   find pwa-template-master -type f ! -name 'index.*' -print0 | xargs -0 sudo cp -t /var/www/html/ &&
   sudo rm -rf master.zip pwa-template-master/ &&
   sudo sed -i 's|\s*</head>|\t\t<link rel="manifest" href="./manifest.webmanifest">\n\t\t<script>\n\t\t\tif ("serviceWorker" in navigator) {\n\t\t\t\tnavigator.serviceWorker.register("./serviceWorker.js"); \n\t\t\t}\n\t\t</script>\n\t\t<meta name="viewport" content="width=device-width, initial-scale=1">\n\t\t<meta name="theme-color" content="#FFF"/>\n&|' /var/www/html/index.*
   ```

### Usage

1. Open your website in a modern browser using your **domain name** (not your IP address).
2. You should see a PWA install icon in the browser address bar.
3. Run a Lighthouse audit in Chrome DevTools to verify PWA compliance.
4. Users can install the app to their home screen via the browser prompt.

## Tech Stack

- **HTML5** -- Minimal page structure with PWA meta tags
- **JavaScript** -- Service worker with cache-first strategy
- **Web App Manifest** -- PWA configuration and icon definitions

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
