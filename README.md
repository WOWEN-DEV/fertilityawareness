![WOWEN Tech Logo](https://github.com/WOWEN-DEV/wowen.tech/blob/main/assets/img/wowen-tech-repo-logo.svg)

<p align="center">
  <a href="https://app.netlify.com/sites/fertilityawareness/deploys">
    <img src="https://api.netlify.com/api/v1/badges/e8c207e4-671d-42e5-acaf-4ed3e27934f0/deploy-status" alt="Netlify">
  </a>
  <a href="https://aws.amazon.com/">
    <img src="https://img.shields.io/badge/AWS-Services-orange?logo=amazon-aws" alt="AWS Services">
  </a>
<a href="https://fertilityawareness.wowen.tech/">
    <img src="https://img.shields.io/badge/Web%20App%20Version-v1.1.0--alpha-yellow" alt="Web App Version: v1.1.0-alpha">
</a>
<a href="#">
    <img src="https://img.shields.io/badge/AI%20Model-Base%20Model-blue" alt="AI-Model: Base Model">
</a>
  <a href="https://github.com/WOWEN-DEV">
    <img src="https://img.shields.io/badge/WOWEN-FemTech%20Dev%20Community-blueviolet" alt="WOWEN">
  </a>
</p>

<h1 align="center">Fertility Awareness Web App [Frontend]</h1>
<h3 align="center">Fertility Awareness Project Repos:</h3>
<p align="center">
<p align="center">
😀 You are here: Web App Frontend
  <br>
  👉 <a href="https://github.com/WOWEN-DEV/fertilityawareness-ai">Web App Server and Model</a>
  👉 <a href="https://github.com/WOWEN-DEV/fertilityawareness-ios">Mobile App (iOS)</a>
  👉 <a href="https://github.com/WOWEN-DEV/fertilityawareness-android">Mobile App (Android)</a>
</p>

![Fertility Awareness Illustration](https://fertilityawareness.wowen.tech/img/fertilityawareness-illustration-colored.svg)

# Table of Contents

1. [About](#about)
2. [Deployment and Staging](#deployment-and-staging)
    - [Never deploy and commit directly to main branch](#never-deploy-and-commit-directly-to-main-branch)
    - [Branches and deploy contexts](#branches-and-deploy-contexts)
    - [Current settings and deploy contexts in Netlify](#current-settings-and-deploy-contexts-in-netlify)
3. [Changelog](#changelog)
    - [Web App Changelog](#web-app-changelog)
4. [Roadmap](#roadmap)
    - [Web App Version](#web-app-version)
5. [Developer Documentation: Technical Architecture and Stack Overview](#developer-documentation-technical-architecture-and-stack-overview)
    - [Domain Management](#domain-management)
    - [Frontend](#frontend)
    - [User Authentication](#user-authentication)
    - [Notifications](#notifications)
    - [User Consent](#user-consent)
    - [Backend/DevOps](#backend-devops)
    - [Future Plans and Considerations](#future-plans-and-considerations)
    - [Summary of Technologies](#summary-of-technologies)
6. [Contributing](#contributing)
7. [Feedback and Support](#feedback-and-support)
8. [Connect with Us](#connect-with-us)
9. [License](#license)


<br>

# About

The Fertility Awareness App is a digital assistant designed to democratize access to fertility understanding and women's health. Our aim is to provide reliable, quick, and easily accessible information to power women in taking control of their reproductive health. Our initial development and market focus is in 🇸🇪 Swedish, but we plan to expand into additional languages and market reach as the product evolves.

<br>

# Deployment and Staging

Our Web App is hosted and deployed with Netlify. Production site [fertilityawareness.wowen.tech](https://fertilityawareness.wowen.tech/) is `main` branch, staging site [staging--fertilityawareness.netlify.app](https://staging--fertilityawareness.netlify.app/) is `staging` branch.

## Never deploy and commit directly to main branch
In most cases, changes should never be directly deployed to our `main` branch, which serves as the production environment/main branch/site. Instead, commit and deploy your changes to our staging branch first, and if approved it will be merged and synced into our `main` branch. For the Web App ([fertilityawareness.wowen.tech](https://fertilityawareness.wowen.tech/)), the staging branch is named `staging` and can be accessed at [https://staging--fertilityawareness.netlify.app/](https://staging--fertilityawareness.netlify.app/).

## Branches and deploy contexts

For those who are new with the terms:
- **Branch:** A branch is like a version of our code, our `main` branch is our Web App/production site [https://fertilityawareness.wowen.tech](https://fertilityawareness.wowen.tech) and our `staging` branch is our staging site [https://staging--fertilityawareness.netlify.app/](https://staging--fertilityawareness.netlify.app/) where we stage/test updates before they end up on our production site, the `main` branch. This is a way to work on updates or new features without affecting the publicly known and used live website. Once you're satisfied with the updates on `staging`, you can combine ("merge") the `staging` branch into the `main` branch, the main version of the code, our production site. 
- **Staging:** Is a separate test version of our site. Our branch `staging` is our staging enviroment. Current branch update/status/deployment is always accessed live at [https://staging--fertilityawareness.netlify.app/](https://staging--fertilityawareness.netlify.app/).
- **Pull Request:** Is a proposal to update some part of our website's code, if the proposal is good, it will be "merged" into `main` branch, our production site [https://fertilityawareness.wowen.tech](https://fertilityawareness.wowen.tech).
- **Merging:** Merging is the process of taking the changes from one branch (version) of our code and combining them with another branch, usually the `main` one. This allows us to update the official version of our project with new features, fixes, or improvements that we've been working on separately on staging. Once merged, those changes become part of the `main` or target branch and are reflected on [https://fertilityawareness.wowen.tech](https://fertilityawareness.wowen.tech).
- **Deploy Contexts:** Are settings that tell Netlify how to handle our different branches when turning them into live websites.
- **Deploy Previews:** Are temporary websites that Netlify creates to show you what these changes will look like if they go live. When someone suggests changes to our code, they often make a "pull request." With this setting, Netlify will automatically create a temporary, live version of our site incorporating those suggested changes. This is called a "Deploy Preview." This allows you to preview changes before they go live on our main site (`main` branch).
- **Branch Deploys:** The `main`branch is our production branch, branch deploys are all other branches we create here and say should be included as "Branch Deploys".

## Current settings and deploy contexts in Netlify
- **Production Branch:** `main`
- **Branch Deploys:** `staging` *Note: Netlify is with this setting ignoring any other branches we create in this repo; it won't make websites from them*.
- **Deploy Previews:** `Any pull request against your production branch / branch deploy branches`

<br>

# Changelog
This changelog provide a high-level overview of the changes made in each version of the software:
- [Web App Changelog](https://github.com/WOWEN-DEV/fertilityawareness/blob/main/CHANGELOG.md)

<br>

# Roadmap

[The Roadmap Document](https://github.com/WOWEN-DEV/fertilityawareness/blob/main/ROADMAP.md) provides a comprehensive overview, detailing the development trajectory, upcoming releases, and features that are in the pipeline. Below, you'll find a succinct summary highlighting key vitals and the current status.

[Web App Version](https://github.com/WOWEN-DEV/fertilityawareness)
- **`v1.0.0-alpha` > `v1.1.0-alpha` – Current Version:** ![Released](https://img.shields.io/badge/Status-Released-brightgreen)
- **`v2.0.0-alpha` – Alpha Upgrade:** ![Planned](https://img.shields.io/badge/Status-Planned-red)
- **`v3.0.0-beta` – Beta Upgrade:** ![Planned](https://img.shields.io/badge/Status-Planned-red)
- **`v4.0.0-beta` – Beta Upgrade:** ![Planned](https://img.shields.io/badge/Status-Planned-red)
- **`v5.0.0-cervix` – Release Version:** ![Planned](https://img.shields.io/badge/Status-Planned-red)

<br>

# Developer Documentation: Technical Architecture and Stack Overview
Our technical infrastructure is designed to be robust and scalable, leveraging a variety of technologies and services. Below is a detailed breakdown of our current setup:

## Domain Management
- **Registrar:** 
We have our primary domain, `wowen.tech`, along with all related subdomains such as `fertilityawareness` and `app.fertilityawareness` registered through One.com. This also includes our API base URL, `fertilityawareness.ai` (see GitHub repo [fertilityawareness_ai](https://github.com/WOWEN-DEV/fertilityawareness-ai)) for more information). As of now, we intend to continue using One.com as domain registrar and domain management due to its other convenient features, such as cheap PHP database support.

## Frontend
- **Current Version:** Our `web-v1.0.0-alpha`, accessible at https://fertilityawareness.wowen.tech, is built using simple static HTML files, which you can access from this repo and deploy with Netlify.
- **Hosting and Deployment:** We have set up the DNS settings on One.com to redirect to Netlify, which serves as the platform for both our frontend hosting and deployment, as well as certain user authentication features.
- **Future Plans:** Refering to our [Roadmap](ROADMAP.md), we plan to transition to a more robust frontend framework for Beta Version, we're currently committed to adopting `Next.js` as a new robust frontend framework.

## User Authentication
- **Service:** We utilize Netlify Identity for user authentication, registration, and password reset functionalities.
- **Emails:** Netlify Identity also handles email templates and confirmation/reset password emails.

## Notifications
- **Webhooks:** Events like "valid," "login," and "signup" from Netlify Identity trigger email notifications via a webhook connected between Netlify and Zapier. The Zap is named "Netlify Identity Notifications."
- **Welcome Email:** When event "signup" is sent from Netlify to Zapier, new users receive a welcome email upon registration, that is sent from Zapier.

## User Consent
- **Terms of Use:** Upon login for the first time, users are prompted to approve the Terms of Use via a form built with Tally. This form will pop up until users have consented. If user clears cookies, the consent form will show up again prompting users to consent.
- **Feedback Request:** After consenting to the terms, users receive an automated email, sent from Tally, asking for feedback.

## Backend/DevOps
The Web App repository is integrated with our AWS EC2 Server Instance (GitHub repo: [fertilityawareness_ai](https://github.com/WOWEN-DEV/fertilityawareness-ai)). All files from [fertilityawareness_ai](https://github.com/WOWEN-DEV/fertilityawareness-ai) repo are cloned to the EC2 server. The frontend (this repo) is hosted at `app.fertilityawareness.wowen.tech` (trough Netlify) and communicates with the EC2 server via POST requests, here `https://fertilityawareness.ai` serves as the API endpoint to which the client is making a POST request, specifically, it is the `fertilityawareness.ai` URL of the server that will handle the API call to execute a query. For DNS, we use our domain registrar/manager One.com to `A Record`-point `fertilityawareness.ai` to our EC2 server's IP (16.171.241.12). To update the backend/EC2 server files and configurations, do a commit to [fertilityawareness_ai](https://github.com/WOWEN-DEV/fertilityawareness-ai) repo, and then manually execute a `git pull origin main` to the EC2 server in terminal. For full documentation, and updates, see our [fertilityawareness_ai](https://github.com/WOWEN-DEV/fertilityawareness-ai) repo. 

## Future Plans and Considerations
Refering to our [Roadmap](ROADMAP.md), we plan to transition to a more robust frontend framework for the Beta Version, we're currently committed to adopting `Next.js` as a new robust frontend framework. We are also evaluating whether to continue with One.com for domain management and Netlify for hosting and deployment—including Netlify Functions and Identity—or to transition our identity management, domain management, hosting, and deployment to Vercel or AWS. As of now, AWS Services like EC2 Server Instance, and One.com will remain part of our tech stack for the foreseeable future.

## Summary of Technologies
- One.com (Domain management + database possibilities)
- Netlify (Hosting, frontend deployment, authentication)
- AWS Services (EC2 Server Instance)
- Zapier (Webhooks, email notifications)
- Tally (Form builder, user consent)

<br>

# Contributing

We welcome contributions from the FemTech Dev Community. If you'd like to contribute to our projects, please follow our [Contributing Guidelines](CONTRIBUTING.md).

<br>

# Feedback and Support

Have feedback or need support? Feel free to reach out!

<br>

# Connect with Us

- **Website:** [wowen.tech](https://wowen.tech)
- **First Contact Email:** emma@wowen.tech

<br>

# License

This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International (CC BY-NC-ND 4.0) license. This means you are free to share (copy and redistribute the material in any medium or format) under the following conditions:

- **Attribution** — You must give appropriate credit to WOWEN (Emma Hager), provide a link to the license, and indicate if changes were made.

- **Non-Commercial** — You may not use the material for commercial purposes.

- **No Derivatives** — If you remix, transform, or build upon the material, you may not distribute the modified material.

For more information, visit [Creative Commons BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).

<br>

---

**Note**: All features, versions, release dates, and information are subject to change.

Thank you for your interest in WOWEN. Together, we're making FemTech innovative, creative, and powering. 💪 

Copyright © 2019-2023, WOWEN. All rights reserved.

