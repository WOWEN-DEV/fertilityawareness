![WOWEN Tech Logo](https://github.com/WOWEN-DEV/wowen.tech/blob/main/assets/img/wowen-tech-repo-logo.svg)

<p align="center">
  <a href="https://app.netlify.com/sites/fertilityawareness/deploys">
    <img src="https://api.netlify.com/api/v1/badges/e8c207e4-671d-42e5-acaf-4ed3e27934f0/deploy-status" alt="Netlify Status">
  </a>
  <a href="https://aws.amazon.com/">
    <img src="https://img.shields.io/badge/AWS-Services-orange?logo=amazon-aws" alt="AWS Services">
  </a>
<a href="https://www.wowen.tech/platform-version-info">
    <img src="https://img.shields.io/badge/Platform%20Version-1.0.0%20(Alpha)-yellow" alt="Platform Version: 1.0.0 (Alpha)">
</a>
<a href="https://www.wowen.tech/ai-model-base">
    <img src="https://img.shields.io/badge/AI%20Model-Base%20Model-blue" alt="AI-Model: Base Model">
</a>
  <a href="https://github.com/WOWEN-DEV">
    <img src="https://img.shields.io/badge/WOWEN-FemTech%20Dev%20Community-blueviolet" alt="WOWEN">
  </a>
</p>

<h1 align="center">Fertility Awareness [Main Repo – Frontend]</h1>

![Fertility Awareness Illustration](https://app.fertilityawareness.wowen.tech/img/fertilityawareness-illustration-colored.svg)

# Table of Contents

- [Fertility Awareness [Main Repo – Frontend]](#fertility-awareness-main-repo--frontend)
  - [About](#about)
  - [Roadmap and Releases](#roadmap-and-releases)
    - [Platform Fullstack Version](#platform-fullstack-version)
    - [AI Model](#ai-model)
  - [Developer Documentation: Technical Architecture and Stack Overview](#developer-documentation-technical-architecture-and-stack-overview)
    - [Domain Management](#domain-management)
    - [Frontend](#frontend)
    - [User Authentication](#user-authentication)
    - [Notifications](#notifications)
    - [User Consent](#user-consent)
    - [Backend](#backend)
    - [Future Plans and Considerations](#future-plans-and-considerations)
    - [Summary of Technologies](#summary-of-technologies)
  - [Contributing](#contributing)
  - [Feedback and Support](#feedback-and-support)
  - [Connect with Us](#connect-with-us)
  - [License](#license)


## About

The Fertility Awareness AI App is a digital assistant designed to democratize access to fertility understanding and women's health. Our aim is to provide reliable, quick, and easily accessible information to power women in taking control of their reproductive health. Our initial development and market focus is in 🇸🇪 Swedish, but we plan to expand into additional languages and market reach as the product evolves.

## Roadmap and Releases

[The Roadmap Document](ROADMAP.md) provides a comprehensive overview, detailing the development trajectory, upcoming releases, and features that are in the pipeline for FertilityAwarenessAI. Browse our [release history](https://github.com/WOWEN-DEV/fertilityawareness/releases) to explore the versions we've launched and the features they include. Below, you'll find a succinct summary highlighting key vitals and the current status of the project.

[Platform Fullstack Version](https://github.com/WOWEN-DEV/fertilityawareness/blob/main/ROADMAP.md#platform-fullstack-version)
- **`Version 1.0.0 (Alpha)` – Current Version:** ![In Development](https://img.shields.io/badge/Status-In%20Development-yellow)
- **`Version 2.0.0 (Alpha)` – Alpha Upgrade:** ![In Development](https://img.shields.io/badge/Status-In%20Development-yellow)
- **`Version 3.0.0 (Beta)` – Beta Upgrade:** ![Planned](https://img.shields.io/badge/Status-Planned-red)
- **`Version 4.0.0 (Beta)` – Beta Upgrade:** ![Planned](https://img.shields.io/badge/Status-Planned-red)
- **`Version 5.0.0 (Cervix)` – Release Version:** ![Planned](https://img.shields.io/badge/Status-Planned-red)

[AI Model](https://github.com/WOWEN-DEV/fertilityawareness/blob/main/ROADMAP.md#ai-model--brief-roadmap)
- **Iteration 1 – `Base Model`:** ![Released](https://img.shields.io/badge/Status-In%20Use/Released-brightgreen)
- **Iteration 2 and Subsequent Versions – `fertilityawareness-v1, v2, v3`, etc.:** ![In Development](https://img.shields.io/badge/Status-In%20Development-yellow)

## Developer Documentation: Technical Architecture and Stack Overview
Our technical infrastructure is designed to be robust and scalable, leveraging a variety of technologies and services. Below is a detailed breakdown of our current setup:

**Domain Management**
- **Registrar:** 
We have our primary domain, `wowen.tech`, along with all related subdomains—such as `app.fertilityawareness`—registered through One.com. This also includes our API domain, `fertilityawareness.ai`. As of now, we intend to continue using One.com as domain registrar and management due to its other convenient features, such as cheap PHP database support.

**Frontend:**
- **Current Version:** Our `Alpha Version (1.0.0)`, accessible at https://app.fertilityawareness.wowen.tech, is built using simple static HTML files, which you can access from this repo and deploy with Netlify.
- **Hosting and Deployment:** We have set up the DNS settings on One.com to redirect to Netlify, which serves as the platform for both our frontend hosting and deployment, as well as certain user authentication features.
- **Future Plans:** Refering to our [Roadmap](ROADMAP.md), we plan to transition to a more robust frontend framework for Beta Version, we're currently committed to adopting `Next.js` as a new robust frontend framework.

**User Authentication**
- **Service:** We utilize Netlify Identity for user authentication, registration, and password reset functionalities.
- **Emails:** Netlify Identity also handles email templates and confirmation/reset password emails.

**Notifications**
- **Webhooks:** Events like "valid," "login," and "signup" from Netlify Identity trigger email notifications via a webhook connected between Netlify and Zapier. The Zap is named "Netlify Identity Notifications."
- **Welcome Email:** When event "signup" is sent from Netlify to Zapier, new users receive a welcome email upon registration, that is sent from Zapier.

**User Consent**
- **Terms of Use:** Upon login for the first time, users are prompted to approve the Terms of Use via a form built with Tally. This form will pop up until users have consented. If user clears cookies, the consent form will show up again prompting users to consent.
- **Feedback Request:** After consenting to the terms, users receive an automated email, sent from Tally, asking for feedback.

**Backend**
We use an AWS Lambda function, accessed via Amazon API Gateway, to handle GET requests for our AI assistant; the AI model code is configured within AWS Lambda, and we also employ an [intermediate server](https://github.com/WOWEN-DEV/fertilityawareness-intermediate-server) with AWS Amplify to manage large headers and hefty function code, receiving long texts from user-side browsers via POST methods and forwarding them to the AI model server using GET methods, before ultimately relaying the server's response back to the frontend.

**Future Plans and Considerations**
Refering to our [Roadmap](ROADMAP.md), we plan to transition to a more robust frontend framework for the Beta Version, we're currently committed to adopting `Next.js` as a new robust frontend framework. We are also evaluating whether to continue with One.com for domain management and Netlify for hosting and deployment—including Netlify Functions and Identity—or to transition our identity management, domain management, hosting, and deployment to Vercel or AWS. As of now, AWS services like Lambda, API Gateway, AWS Amplify (the intermediate server), and One.com will remain part of our tech stack for the foreseeable future.

**Summary of Technologies**
- One.com (Domain management + database possibilities)
- Netlify (Hosting, frontend deployment, authentication)
- AWS Services (Lambda, API Gateway, AWS Amplify)
- Zapier (Webhooks, email notifications)
- Tally (Form builder, user consent)

## Contributing

We welcome contributions from the FemTech Dev Community. If you'd like to contribute to our projects, please follow our [Contributing Guidelines](CONTRIBUTING.md).

## Feedback and Support

Have feedback or need support? Feel free to reach out! If want, you can ask a question in [Issues](https://github.com/WOWEN-DEV/fertilityawareness/issues) or use [Discussions](https://github.com/WOWEN-DEV/fertilityawareness/discussions). 

## Connect with Us

- **Website:** [wowen.tech](https://wowen.tech)
- **First Contact Email:** emma@wowen.tech

## License

This project is licensed under the Creative Commons Attribution-NonCommercial-NoDerivs 4.0 International (CC BY-NC-ND 4.0) license. This means you are free to share (copy and redistribute the material in any medium or format) under the following conditions:

- **Attribution** — You must give appropriate credit to WOWEN (Emma Hager), provide a link to the license, and indicate if changes were made.

- **Non-Commercial** — You may not use the material for commercial purposes.

- **No Derivatives** — If you remix, transform, or build upon the material, you may not distribute the modified material.

For more information, visit [Creative Commons BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/).

---

**Note**: All features, versions, release dates, and information are subject to change.

Thank you for your interest in WOWEN. Together, we're making FemTech innovative, creative, and powering. 💪 

Copyright © 2019-2023, WOWEN. All rights reserved.

