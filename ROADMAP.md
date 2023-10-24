![WOWEN Tech Logo](https://github.com/WOWEN-DEV/wowen.tech/blob/main/assets/img/wowen-tech-repo-logo.svg)

<h1 align="center">Fertility Awareness [Roadmap]</h1>

![Fertility Awareness Illustration](https://app.fertilityawareness.wowen.tech/img/fertilityawareness-illustration-colored.svg)

# Table of Contents
- [FertilityAwarenessAI Roadmap](#fertilityawarenessai-roadmap)
- [Explanation of Terms in the Roadmap](#explanation-of-terms-in-the-roadmap)
  - [Alpha](#alpha)
  - [Beta](#beta)
  - [Cervix](#cervix)
  - [Iteration](#iteration)
- [AI Model – Brief Roadmap](#ai-model--brief-roadmap)
  - [Iteration 1 – `Base Model`](#iteration-1--base-model)
  - [Iteration 2 and Subsequent Versions](#iteration-2-and-subsequent-versions)
- [Web App Version](#web-app-version)
  - [`Version 1.0.0 (Alpha)` – Current Version](#version-100-alpha--current-version)
  - [`Version 2.0.0 (Alpha)` – Alpha Upgrade](#version-200-alpha--alpha-upgrade)
  - [`Version 3.0.0 (Beta)` – Beta Upgrade](#version-300-beta--beta-upgrade)
  - [`Version 4.0.0 (Beta)` – Beta Upgrade](#version-400-beta--beta-upgrade)
  - [`Version 5.0.0 (Cervix)` – Release Version](#version-500-cervix--release-version)
- [Mobile App Version](#mobile-app-version)
  - [`Version 1.0.0 (Alpha)` – Current Version](#version-100-alpha--current-version)
  - [`Version 2.0.0 (Alpha)` – Alpha Upgrade](#version-200-alpha--alpha-upgrade)
  - [`Version 3.0.0 (Beta)` – Beta Upgrade](#version-300-beta--beta-upgrade)
  - [`Version 4.0.0 (Beta)` – Beta Upgrade](#version-400-beta--beta-upgrade)
  - [`Version 5.0.0 (Cervix)` – Release Version](#version-500-cervix--release-version)

# FertilityAwarenessAI Roadmap

This resource offers a detailed look into our development roadmap, upcoming releases, and the features we have in the pipeline for FertilityAwarenessAI ([Web App](https://github.com/WOWEN-DEV/fertilityawareness), [Mobile App](https://github.com/WOWEN-DEV/fertilityawareness-app), and [Model](https://github.com/WOWEN-DEV/fertilityawareness-ai])). To review the versions we've rolled out and their respective features, visit our release history in each repo. Your interest and support are invaluable as we strive to make the platform increasingly robust and user-friendly!

# Explanation of Terms in the Roadmap

**Alpha**: This is the first, very early version of the product intended for internal testing or a very limited user group. The Alpha version is often *unstable* and contains basic functionality to test ideas and gather initial impressions.

**Beta**: This version is more developed, designed and stable than the Alpha. It is intended for a broader group of test users and includes additional features, and more robust frameworks. The goal is to identify and fix bugs, as well as to fine-tune the product, design, features and user experience based on feedback.

**Cervix**: This is the public MVP (Minimum Viable Product) version of the product. It includes all core features and is stable enough for general use. This version marks an important milestone where the product is ready for market launch.

**Iteration**: An iteration is a development cycle where the product undergoes improvements, refinements, or additions. It's a repeatable phase in the software lifecycle aimed at enhancing the product's features, performance, or design. Each iteration brings the product closer to its final version, incorporating feedback and lessons learned from previous cycles.

# [AI Model](https://github.com/WOWEN-DEV/fertilityawareness-ai) – Brief Roadmap

## Iteration 1 – `Base Model` ![Released](https://img.shields.io/badge/Status-In%20Use/Released-brightgreen)
- **Status**: In Development
- **Expected Release Date**: [October 23, 2023]

Foundational Model. In the first iteration, we focus on establishing a base model equipped with *robust* instructions. This serves as the foundation upon which subsequent iterations will build. The Base Model will be used in `Version 1.0.0 (Alpha)` for testing purposes.

## Iteration 2 and Subsequent Versions – `fertilityawareness-v1, v2, v3`, etc. ![In Development](https://img.shields.io/badge/Status-In%20Development-yellow)
- **Status**: Planned
- **Expected Release Date**: [TBD]

Data-Driven Refinement. Building on the first iteration, the `base model`, the second phase involves fine-tuning and training the `base model`, starting with `fertilityawareness-v1`, using our project defined collected data. Each successive model version in the fertilityawareness series (v1, v2, v3, etc.) builds upon its predecessor. Specifically, we fine-tune each new version using the already optimized previous version as a starting point. This iterative process ensures that each new release is more accurate, powerful, and refined than the last. 

# [Web App Version](https://github.com/WOWEN-DEV/fertilityawareness)

## `Version 1.0.0 (Alpha)` – Current Version ![Released](https://img.shields.io/badge/Status-Released-brightgreen)

> **Alpha**: This is the first, very early version of the product intended for internal testing or a very limited user group. The Alpha version is often *unstable* and contains basic functionality to test ideas and gather initial impressions.

- **Status**: In Development
- **Expected Release Date**: [October 23, 2023]
- **Initial Access**: This alpha version offers users their first glimpse to FertilityAwarenessAI, a straightforward static HTML framework. The interface and communication are currently available in Swedish.
- **Limited Testing**: At this stage, we are providing limited access to the base AI model for a select group of users, allowing us to gather initial feedback and make improvements.

This version serves as an introductory release, aimed at a smaller audience for initial testing and feedback. It lays the groundwork for future, more robust versions of FertilityAwarenessAI.

## `Version 2.0.0 (Alpha)` – Alpha Upgrade ![In Development](https://img.shields.io/badge/Status-In%20Development-yellow)

> **Alpha**: This is the first, very early version of the product intended for internal testing or a very limited user group. The Alpha version is often *unstable* and contains basic functionality to test ideas and gather initial impressions.

- **Status**: In Development
- **Expected Release Date**: [December, 2023]
- **Session Memory**: Now, the assistant can remember the full chat session, providing a more coherent and contextually aware user experience.
- **Expanding Limited Testing**: We are expanding our limited access to include testing of the new session memory feature. This will allow us to gather more targeted feedback and make further improvements.

This 2.0.0 Alpha version marks a pivotal upgrade, introducing session memory to enhance user interactions. It serves as a stepping stone for more advanced features and improvements in future releases.

## `Version 3.0.0 (Beta)` – Beta Upgrade ![Planned](https://img.shields.io/badge/Status-Planned-red)

> **Beta**: This version is more developed, designed and stable than the Alpha. It is intended for a broader group of test users and includes additional features, and more robust frameworks. The goal is to identify and fix bugs, as well as to fine-tune the product, design, features and user experience based on feedback.

- **Status**: Planned
- **Expected Release Date**: [TBD]
- **Revamped frontend**: We're focused on revamping the frontend/user interface using `Next.js` framework.

Our focus is on redesigning the main interface, login portal, account registration, and password reset functionalities to a more robust and user friendly frontend, as of now, we're committed to using `Next.js` as our frontend framework. However, we're evaluating whether to continue with One.com for domain management and Netlify for hosting and deployment—including Netlify Functions and Identity—or to transition our identity management, domain management, hosting, and deployment to Vercel or AWS. As of now, AWS services like Lambda, API Gateway, AWS Amplify (the intermediate server), and One.com will remain part of our tech stack for the foreseeable future.

## `Version 4.0.0 (Beta)` – Beta Upgrade ![Planned](https://img.shields.io/badge/Status-Planned-red)

> **Beta**: This version is more developed, designed and stable than the Alpha. It is intended for a broader group of test users and includes additional features, and more robust frameworks. The goal is to identify and fix bugs, as well as to fine-tune the product, design, features and user experience based on feedback.

- **Status**: Planned
- **Expected Release Date**: [TBD]
- **Image Upload**: Soon you will be able to upload images like menstrual cycle charts and blood tests directly onto the platform.
- **Improved UI**: The new version will include history, presets, export and import functionalities, along with a bilingual user interface.
- **Introducing trained and fine-tuned models `fertilityawareness-v1, v2, v3`, etc.**: We are excited to roll out a series of specialized AI models, starting with `fertilityawareness-v1`. These models have been meticulously trained and fine-tuned using real-world data to provide more accurate and personalized insights into fertility awareness. With each subsequent version, expect enhanced performance and adaptability to better meet your needs.

This Beta upgrade is strategically designed to elevate the overall user experience and platform functionality to new heights. It will incorporate advanced, fine-tuned AI models for more accurate and personalized fertility insights. Additionally, the upgrade will introduce a range of new features, such as the ability to upload specific images like menstrual cycle charts and blood tests, as well as a bilingual interface to cater to a broader user base.

## `Version 5.0.0 (Cervix)` – Release Version ![Planned](https://img.shields.io/badge/Status-Planned-red)

> **Cervix**: This is the public MVP (Minimum Viable Product) version of the product. It includes all core features and is stable enough for general use. This version marks an important milestone where the product is ready for market launch.

- **Status**: Planned
- **Expected Release Date**: [TBD]
- **Third-party App Integration**: Capability to integrate FertilityAwarenessAI with other tools such as Tempdrop.
- **Web App, iPhone and Android Apps**: Plus a secret feature.
- **Human Consultation**: Ability to book guidance and consultation with a real human being, directly in the app.
- **Educational Material**: Courses and tutorials.

This release version, dubbed "Cervix," is designed to be a comprehensive solution for fertility awareness, offering a range of features from third-party integrations to educational materials, all while being accessible across multiple platforms.


# [Mobile App Version](https://github.com/WOWEN-DEV/fertilityawareness-app)

## `Version 1.0.0 (Alpha)` – Current Version ![In Development](https://img.shields.io/badge/Status-In%20Development-yellow) / ![Released](https://img.shields.io/badge/Status-Released-brightgreen)

> **Alpha**: This is the first, very early version of the product intended for internal testing or a very limited user group. The Alpha version is often *unstable* and contains basic functionality to test ideas and gather initial impressions.

- **Status**: In Development
- **Expected Release Date**: [October 23, 2023]
- **Initial Access**: This alpha version offers users their first glimpse to FertilityAwarenessAI, a straightforward static HTML framework. The interface and communication are currently available in Swedish.
- **Limited Testing**: At this stage, we are providing limited access to the base AI model for a select group of users, allowing us to gather initial feedback and make improvements.

This version serves as an introductory release, aimed at a smaller audience for initial testing and feedback. It lays the groundwork for future, more robust versions of FertilityAwarenessAI.

## `Version 2.0.0 (Alpha)` – Alpha Upgrade ![In Development](https://img.shields.io/badge/Status-In%20Development-yellow)

> **Alpha**: This is the first, very early version of the product intended for internal testing or a very limited user group. The Alpha version is often *unstable* and contains basic functionality to test ideas and gather initial impressions.

- **Status**: In Development
- **Expected Release Date**: [December, 2023]
- **Session Memory**: Now, the assistant can remember the full chat session, providing a more coherent and contextually aware user experience.
- **Expanding Limited Testing**: We are expanding our limited access to include testing of the new session memory feature. This will allow us to gather more targeted feedback and make further improvements.

This 2.0.0 Alpha version marks a pivotal upgrade, introducing session memory to enhance user interactions. It serves as a stepping stone for more advanced features and improvements in future releases.

## `Version 3.0.0 (Beta)` – Beta Upgrade ![Planned](https://img.shields.io/badge/Status-Planned-red)

> **Beta**: This version is more developed, designed and stable than the Alpha. It is intended for a broader group of test users and includes additional features, and more robust frameworks. The goal is to identify and fix bugs, as well as to fine-tune the product, design, features and user experience based on feedback.

- **Status**: Planned
- **Expected Release Date**: [TBD]
- **Revamped frontend**: We're focused on revamping the frontend/user interface using `Next.js` framework.

Our focus is on redesigning the main interface, login portal, account registration, and password reset functionalities to a more robust and user friendly frontend, as of now, we're committed to using `Next.js` as our frontend framework. However, we're evaluating whether to continue with One.com for domain management and Netlify for hosting and deployment—including Netlify Functions and Identity—or to transition our identity management, domain management, hosting, and deployment to Vercel or AWS. As of now, AWS services like Lambda, API Gateway, AWS Amplify (the intermediate server), and One.com will remain part of our tech stack for the foreseeable future.

## `Version 4.0.0 (Beta)` – Beta Upgrade ![Planned](https://img.shields.io/badge/Status-Planned-red)

> **Beta**: This version is more developed, designed and stable than the Alpha. It is intended for a broader group of test users and includes additional features, and more robust frameworks. The goal is to identify and fix bugs, as well as to fine-tune the product, design, features and user experience based on feedback.

- **Status**: Planned
- **Expected Release Date**: [TBD]
- **Image Upload**: Soon you will be able to upload images like menstrual cycle charts and blood tests directly onto the platform.
- **Improved UI**: The new version will include history, presets, export and import functionalities, along with a bilingual user interface.
- **Introducing trained and fine-tuned models `fertilityawareness-v1, v2, v3`, etc.**: We are excited to roll out a series of specialized AI models, starting with `fertilityawareness-v1`. These models have been meticulously trained and fine-tuned using real-world data to provide more accurate and personalized insights into fertility awareness. With each subsequent version, expect enhanced performance and adaptability to better meet your needs.

This Beta upgrade is strategically designed to elevate the overall user experience and platform functionality to new heights. It will incorporate advanced, fine-tuned AI models for more accurate and personalized fertility insights. Additionally, the upgrade will introduce a range of new features, such as the ability to upload specific images like menstrual cycle charts and blood tests, as well as a bilingual interface to cater to a broader user base.

## `Version 5.0.0 (Cervix)` – Release Version ![Planned](https://img.shields.io/badge/Status-Planned-red)

> **Cervix**: This is the public MVP (Minimum Viable Product) version of the product. It includes all core features and is stable enough for general use. This version marks an important milestone where the product is ready for market launch.

- **Status**: Planned
- **Expected Release Date**: [TBD]
- **Third-party App Integration**: Capability to integrate FertilityAwarenessAI with other tools such as Tempdrop.
- **Web App, iPhone and Android Apps**: Plus a secret feature.
- **Human Consultation**: Ability to book guidance and consultation with a real human being, directly in the app.
- **Educational Material**: Courses and tutorials.

This release version, dubbed "Cervix," is designed to be a comprehensive solution for fertility awareness, offering a range of features from third-party integrations to educational materials, all while being accessible across multiple platforms.



---

**Note**: All features, versions, release dates, and information are subject to change.
