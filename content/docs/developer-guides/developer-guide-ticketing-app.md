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
## Code toggle test

{{% java-kotlin-cpp 
java=`SelectionsResult selectionsResult = seSelection.processExplicitSelection(reader);
if (selectionsResult.hasActiveSelection()) {
    MatchingSe matchingSe = selectionsResult.getActiveMatchingSe();
}`  
kotlin=`val selectionsResult = seSelection.processExplicitSelection(reader)
if (selectionsResult.hasActiveSelection()) {
    val matchingSe = selectionsResult.activeMatchingSe
}` 
cpp=`if (selectionResult->hasActiveSelection()) {
    std::shared_ptr<MatchingSelection> matchingSelection =
        selectionResult->getActiveSelection();
    std::shared_ptr<CalypsoPo> calypsoPo =
        std::dynamic_pointer_cast<CalypsoPo>(
            matchingSelection->getMatchingSe());`
%}}

## Connect a plugin

## Configuring a plugin

## Retrieve a reader

## Subscribe to the events of a reader

## Receive a card event

## Make an explicit selection

## Make an implicit selection

## Preparing commands

## Sending commands

## Retrieve responses

## Open a calypso session

## Close a calypso session
