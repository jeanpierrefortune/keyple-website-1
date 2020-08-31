---
title: (WIP)Developer guide - Develop a ticketing application
linktitle: (WIP)Develop a ticketing application
toc: true
type: docs
date: "2020-02-24T00:00:00+01:00"
draft: false
menu:
  docs:
    parent: Developer Guide
    weight: 200

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 200
---
This guide is intended for developers of ticketing applications.
It shows, based on sample code, the different operations that can constitute a Calypso card-based transaction application.
In this guide the card readers are PC/SC type but the principles would be the same with other types of readers.

## Imports 

The application imports the keyple-core (base), keyple-plugin-pcsc (PC/SC reader access) and keyple-calyspo (Calypso card operations) modules. 

```gradle
implementation "org.eclipse.keyple:keyple-java-core:$keyple_version"
implementation "org.eclipse.keyple:keyple-java-calypso:$keyple_version"
implementation "org.eclipse.keyple:keyple-java-plugin-pcsc:$keyple_version"
```