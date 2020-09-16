#!/bin/bash

# This script gets all latest javadocs (SNAPSHOT)
pwd
./get_javadoc.sh keyple-java-core
./get_javadoc.sh keyple-java-calypso
./get_javadoc.sh keyple-java-plugin-pcsc
./get_javadoc.sh keyple-java-plugin-remotese
./get_javadoc.sh keyple-java-plugin-stub
./get_javadoc.sh keyple-java-plugin-remotese
./get_javadoc.sh keyple-android-plugin-nfc
./get_javadoc.sh keyple-android-plugin-omapi

