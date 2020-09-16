#!/bin/bash

ls -lrt

# This script gets the latest javadoc JAR (SNAPSHOT) for the module provided in argument (e.g. keyple-java-core)

# get the lastest SNAPSHOT version, put it in a variable named LATEST_SNAPSHOT_VERSION
BASE_URL="/dev/null https://oss.sonatype.org/content/repositories/snapshots/org/eclipse/keyple"
LATEST_SNAPSHOT=$(wget -O - -o $BASE_URL/$1/maven-metadata.xml | grep -Po '(?<=<version>)([0-9\.]+(-SNAPSHOT)?)' | sort --version-sort -r | head -n 1)

# get the lastest published SNAPSHOT for this version
LATEST_UPLOADED_SNAPSHOT=$(wget -O - -o $BASE_URL/$1/$LATEST_SNAPSHOT/maven-metadata.xml | grep -oPm1 "(?<=<value>)[^<]+")

# get the Javadoc jar
wget $BASE_URL/$1/$LATEST_SNAPSHOT/$1"-"$LATEST_UPLOADED_SNAPSHOT"-javadoc.jar"

unzip $1"-"$LATEST_UPLOADED_SNAPSHOT"-javadoc.jar" -d reference/$1
