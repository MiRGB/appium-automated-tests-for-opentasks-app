# 🚀 Automated Tests for OpenTasks Mobile App - WebDriverIO and Appium

This project contains a set of automated tests for the OpenTasks mobile app, using WebDriverIO and Appium. The tests are written in JavaScript and can be run both locally on an emulator and in the cloud using BrowserStack.

The OpenTasks app (version **1.4.2**) can be downloaded from [F-Droid](https://f-droid.org/packages/org.dmfs.tasks/).

## 🎬 Demo

You can view the most recent test results in the **Allure Report** hosted on GitHub Pages:  
👉 [View Allure Test Report](https://mirgb.github.io/appium-automated-tests-for-opentasks-app/)

## 🛠️ Technologies and Tools

- **WebDriverIO** - Test automation framework  
- **Appium** - Tool for automating mobile applications  
- **Allure** - Test report generation  
- **BrowserStack** - Cloud platform for running tests on real mobile devices  
- **GitHub Actions** - CI/CD automation  
- **ESLint** - Static code analysis tool for JavaScript

## ✅ Prerequisites

### 🖥️ Local Setup

To run tests locally, you will need:

1. **Android Studio** with an Android emulator set up  
2. **Node.js** installed (preferably LTS version)  
3. **Appium** installed

### ☁️ Running Tests on BrowserStack

To run tests on real devices in the cloud, you need a [BrowserStack](https://www.browserstack.com/) account and need to configure your credentials in the `config/wdio.bs.conf.js` file.

### 📦 Installing Dependencies

To install all required dependencies, run:

`npm install`

## ⚙️ Configuration

### 🧪 Running Tests Locally

To run the tests locally, use the following command. Note that you need Android Studio and an emulator set up:

`npx wdio run config/wdio.conf.js`

### ☁️ Running Tests on BrowserStack

To run the tests on BrowserStack, use the following command:

`npx wdio run config/wdio.bs.conf.js`

### 🤖 Running Tests with GitHub Actions

The repository contains configuration for automatically running tests using GitHub Actions. After each push to the main branch (e.g., `main`), the tests will automatically run on selected devices.

> 🔧 **Note:** During the initial setup, one of the test runs failed due to a timeout issue when executing Appium tests on BrowserStack. The timeout was too short for the cloud environment to fully initialize and run the tests. This was resolved by increasing the timeout in the next commit. Since then, all GitHub Actions runs have passed consistently.

### ⚙️ Advanced Configuration

Environment Variables  
You can configure your environment variables for BrowserStack and Appium via a .env file. Ensure you have the necessary credentials and device configurations:

`BROWSERSTACK_USERNAME=your-username`  
`BROWSERSTACK_ACCESS_KEY=your-access-key`

### 📊 Allure Reports

Allure reports are generated automatically after each test session. Once the tests are completed, the Allure reporter creates a new report and deletes any old ones to ensure that only the latest results are kept.

To view the generated Allure report, you can open it in your browser by running the following command:

`npx allure open`

This command will open the most recent Allure report in your default browser. The reports contain detailed information about your test sessions.

### 🔗 Demo Link

Make sure to check the Allure report on GitHub Pages for detailed test results:

👉 [View Allure Test Report](https://mirgb.github.io/appium-automated-tests-for-opentasks-app/)

### 📄 License

⚠️ This project is not open source. All rights reserved.  
For review purposes only. See the [LICENSE](./LICENSE) file for full terms.
