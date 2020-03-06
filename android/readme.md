# Trash Panda Android APK

The Trash Panda apk is built using the llama-pack cli package from NPM. Since we are using a PWA, the android app automatically updates when a new version is deployed to [https://thetrashpanda.com](https://thetrashpanda.com).

The only time you should need to rebuild the apk is if the icons or title of the app need to be changed.

## Setting up the Environment

### Get the Java Development Kit (JDK) 8.

The Android Command line tools requires the correct version of the JDK to run. To prevent version conflicts with a JDK version that is already installed, llama-pack uses a JDK that can unzipped in a separate folder.

Download a version of JDK 8 that is compatible with your OS from [AdoptOpenJDK](https://adoptopenjdk.net/releases.html?variant=openjdk8&jvmVariant=hotspot) and extract it in its own folder.

Warning: Using a version lower than 8 will make it impossible to compile the project and higher versions are incompatible with the Android command line tools.

### Get the Android command line tools

Download a version of Android command line tools that is compatible with your OS from [https://developer.android.com/studio#command-tools](https://developer.android.com/studio#command-tools). Create a folder and extract the downloaded file into it.

Tell llama-pack where the JDK and Android command line tools are
When running llama-pack for the first time, it will ask where it can find the JDK and Android command line tools. So, take note of the location where both were decompressed.

### Sign the apk

1. Update the local files for the apk make process.

   - `npm run update`

2. Build the new apk

   - `npm run build`
   - Input the keystore password and key password
     - These can be found in the teams lastpass

3. Deploy the new apk to google play

### Common Issues

1. Error when attempting to build: "Warning: Could not create settings java.lang.IllegalArgumentException at com.android.sdklib.tool.sdkmanager.SdkManagerCliSettings."

This is caused by the android command line tools not having the full build package. This can be fixed by updating the tools on the command line.

Navigate to the location you extracted the android command line tools and run the following command from the "tools" folder.

`./sdkmanager --sdk_root="../../" "tools"`
