![WOWEN Tech Logo](https://github.com/WOWEN-DEV/wowen.tech/blob/main/assets/img/wowen-tech-repo-logo.svg)

<h1 align="center">Fertility Awareness Web App [Roadmap]</h1>

![Fertility Awareness Illustration](https://fertilityawareness.wowen.tech/img/fertilityawareness-illustration-colored.svg)

# Table of Contents

1. [Overview](#overview)
2. [Explanation of Terms in the Roadmap](#explanation-of-terms-in-the-roadmap)
3. [Web App Version](#web-app-version)
    - [v1.0.0-alpha > v1.1.0-alpha – Current Version](#v100-alpha--v110-alpha--current-version)
    - [v2.0.0-alpha – Alpha Upgrade](#v200-alpha--alpha-upgrade)
    - [v3.0.0-beta – Beta Upgrade](#v300-beta--beta-upgrade)
    - [v4.0.0-beta – Beta Upgrade](#v400-beta--beta-upgrade)
    - [v5.0.0-cervix – Release Version](#v500-cervix--release-version)

# Overview
This is the roadmap for Web App, to see respective roadmaps for [Mobile App (iOS)](https://github.com/WOWEN-DEV/fertilityawareness-ios), [Mobile App (Android)](https://github.com/WOWEN-DEV/fertilityawareness-android) and our [Web App Server/AI Model](https://github.com/WOWEN-DEV/fertilityawareness-ai), see their respective repos.
This resource offers a detailed look into our development roadmap, upcoming releases, and the features we have in the pipeline. Note, this document only outlines the bigger milestones, to review the versions we've rolled out and their respective features, visit our release history and changelogs in each repo. 

# Explanation of Terms in the Roadmap
**Alpha**: This is the first, very early version of the product intended for internal testing or a very limited user group. The Alpha version is often *unstable* and contains basic functionality to test ideas and gather initial impressions.

**Beta**: This version is more developed, designed and stable than the Alpha. It is intended for a broader group of test users and includes additional features, and more robust frameworks. The goal is to identify and fix bugs, as well as to fine-tune the product, design, features and user experience based on feedback.

**Cervix**: This is the public MVP (Minimum Viable Product) version of the product. It includes all core features and is stable enough for general use. This version marks an important milestone where the product is ready for market launch.

**Iteration**: An iteration is a development cycle where the product undergoes improvements, refinements, or additions. It's a repeatable phase in the software lifecycle aimed at enhancing the product's features, performance, or design. Each iteration brings the product closer to its final version, incorporating feedback and lessons learned from previous cycles.


# [Web App Version](https://github.com/WOWEN-DEV/fertilityawareness)

## `v1.0.0-alpha` > `v1.1.0-alpha` – Current Version ![Released](https://img.shields.io/badge/Status-Released-brightgreen)

> **Alpha**: This is the first, very early version of the product intended for internal testing or a very limited user group. The Alpha version is often *unstable* and contains basic functionality to test ideas and gather initial impressions.

- **Status**: In Development
- **Expected Release Date**: [October 23, 2023]
- **Initial Access**: This alpha version offers users their first glimpse, a straightforward static HTML framework. The interface and communication are currently available in Swedish.
- **Limited Testing**: At this stage, we are providing limited access to the base AI model for a select group of users, allowing us to gather initial feedback and make improvements.

This version serves as an introductory release, aimed at a smaller audience for initial testing and feedback. It lays the groundwork for future, more robust versions of Fertility Awareness.

## `v2.0.0-alpha` – Alpha Upgrade ![Planned](https://img.shields.io/badge/Status-Planned-red)

> **Alpha**: This is the first, very early version of the product intended for internal testing or a very limited user group. The Alpha version is often *unstable* and contains basic functionality to test ideas and gather initial impressions.

- **Status**: Planned
- **Expected Release Date**: [December, 2023]
- **Session Memory**: Now, the assistant can remember the full chat session, providing a more coherent and contextually aware user experience.
- **Expanding Limited Testing**: We are expanding our limited access to include testing of the new session memory feature. This will allow us to gather more targeted feedback and make further improvements.

This 2.0.0 Alpha version marks a pivotal upgrade, introducing session memory to enhance user interactions. It serves as a stepping stone for more advanced features and improvements in future releases.

## `v3.0.0-beta` – Beta Upgrade ![Planned](https://img.shields.io/badge/Status-Planned-red)

> **Beta**: This version is more developed, designed and stable than the Alpha. It is intended for a broader group of test users and includes additional features, and more robust frameworks. The goal is to identify and fix bugs, as well as to fine-tune the product, design, features and user experience based on feedback.

- **Status**: Planned
- **Expected Release Date**: [TBD]
- **Revamped frontend**: We're focused on revamping the frontend/user interface using `Next.js` framework.

Our focus is on redesigning the main interface, login portal, account registration, and password reset functionalities to a more robust and user friendly frontend, as of now, we're committed to using `Next.js` as our frontend framework. However, we're evaluating whether to continue with One.com for domain management and Netlify for hosting and deployment—including Netlify Functions and Identity—or to transition our identity management, domain management, hosting, and deployment to Vercel or AWS. As of now, AWS services like Lambda, API Gateway, AWS Amplify (the intermediate server), and One.com will remain part of our tech stack for the foreseeable future.

## `v4.0.0-beta` – Beta Upgrade ![Planned](https://img.shields.io/badge/Status-Planned-red)

> **Beta**: This version is more developed, designed and stable than the Alpha. It is intended for a broader group of test users and includes additional features, and more robust frameworks. The goal is to identify and fix bugs, as well as to fine-tune the product, design, features and user experience based on feedback.

- **Status**: Planned
- **Expected Release Date**: [TBD]
- **Image Upload**: Soon you will be able to upload images like menstrual cycle charts and blood tests directly onto the platform.
- **Improved UI**: The new version will include history, presets, export and import functionalities, along with a bilingual user interface.
- **Introducing trained and fine-tuned models `fertilityawareness-v1, v2, v3`, etc.**: We are excited to roll out a series of specialized AI models, starting with `fertilityawareness-v1`. These models have been meticulously trained and fine-tuned using real-world data to provide more accurate and personalized insights into fertility awareness. With each subsequent version, expect enhanced performance and adaptability to better meet your needs.

This Beta upgrade is strategically designed to elevate the overall user experience and platform functionality to new heights. It will incorporate advanced, fine-tuned AI models for more accurate and personalized fertility insights. Additionally, the upgrade will introduce a range of new features, such as the ability to upload specific images like menstrual cycle charts and blood tests, as well as a bilingual interface to cater to a broader user base.

## `v5.0.0-cervix` – Release Version ![Planned](https://img.shields.io/badge/Status-Planned-red)

> **Cervix**: This is the public MVP (Minimum Viable Product) version of the product. It includes all core features and is stable enough for general use. This version marks an important milestone where the product is ready for market launch.

- **Status**: Planned
- **Expected Release Date**: [TBD]
- **Third-party App Integration**: Capability to integrate Fertility Awareness with other tools such as Tempdrop.
- **Web App, iPhone and Android Apps**: Plus a secret feature.
- **Human Consultation**: Ability to book guidance and consultation with a real human being, directly in the app.
- **Educational Material**: Courses and tutorials.

This release version, dubbed "Cervix," is designed to be a comprehensive solution for fertility awareness, offering a range of features from third-party integrations to educational materials, all while being accessible across multiple platforms.


---

**Note**: All features, versions, release dates, and information are subject to change.
