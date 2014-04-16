#cloud-hana-helloworld

 #cloud-hana-sample=HelloWorld

## Importing the "Hello World" source code to a Trial SAP HANA Instance with Eclipse

This is based on the Step by Step tutorial at [help.hana.ondemand.com -> Creating an SAP HANA XS Application](https://help.hana.ondemand.com/help/frameset.htm?3762b229a4074fc59ac6a9ee7404f8c9.html).

The tutorial explains how to create a simple SAP HANA XS application that is written in server-side JavaScript and displays the "Hello World" message together with a string extracted from a table in the SAP HANA database.

### Requirements

- You have an Eclipse IDE with HANA Tools installed. A detailed description can be found at [Setting Up the Tools](https://help.hana.ondemand.com/help/frameset.htm?b0e351ada628458cb8906f55bcac4755.html).
- You have [created a Trial SAP HANA Instance](https://help.hana.ondemand.com/help/frameset.htm?1a597a4505fc4178acf2232ee0fda081.html), e.g. with the name `myhanaxs`.

## Add HANA System

In the `SAP HANA Development` perspective go to `Systems` tab, right click and choose `Add cloud System`. A detailed description can be found at [Connecting to a Productive SAP HANA Instance via the Eclipse IDE](https://help.hana.ondemand.com/help/frameset.htm?4efc124a0ccc42b3b502ad3a3908d23d.html).

## Create a package
Create a package with name <kbd>helloworld</kbd>. A detailed description can found be at **TODO**

## Add HANA repository workspace
In the `SAP HANA Development` perspective go to `Repositories` tab, right click and choose `Create repository workspace`.

- Enter <kbd>cloud-hana-helloworld</kbd> as workspace name.
- Enter <kbd>C:\hanaxsws</kbd> as workspace root.
- Click `Finish` button.

The final workspace location is `C:\hanaxsws\cloud-hana-helloworld`.

## Check Out the Project
    Warning: The `p1940xxtrial` account we use in the following is just an example of a
    name of the trial account. You need to replace it with your actual trial account name.
    In addition, replace `p1940xx` with your actual SAP HANA Cloud Platform user.

- In the `Repositories` tab, expand your repository workspace e.g. `p1940xxtrial` and right click on it.
- Click `Check Out`.

- Now you have a local folder like `C:\hanaxsws\cloud-hana-helloworld\p1940xxtrial\myhanaxs\helloworld`

## Get the example code
- Download [https://github.com/SAP/cloud-hana-helloworld/archive/master.zip](https://github.com/SAP/cloud-hana-helloworld/archive/master.zip).

- The zip file contains a subfolder `cloud-hana-helloworld-master/helloworld`. Extract its content to the folder `C:\hanaxsws\cloud-hana-helloworld\p1940xxtrial\myhanaxs\helloworld` we created in the last step.

## Import the sample project
- In the `SAP HANA Development` perspective go to `Project Explorer` tab, right click and choose `Import->Import->General->Existing Projects into Workspace`.
Select root directory by browsing for the folder, e.g. `C:\hanaxsws\cloud-hana-helloworld\p1940xxtrial\myhanaxs\helloworld`.
- Click `Finish` button.
The project `hello` is listed in the Project Explorer.

- change `model_access.hdbrole` file content from

        role {{PACKAGE_NAME}}::model_access {
            application privilege: {{PACKAGE_NAME}}::Basic;
        }
    e.g. to

        role p1940xxtrial.myhanaxs.helloworld::model_access {
            application privilege: p1940xxtrial.myhanaxs.helloworld::Basic;
        }


### 7. Share the project
- Right click on the `helloworld` project and choose `Team->Share Project-SAP HANA Repository`.
- Click `Next` and then `Finish` button.

### 8. Activate
- Right click on the `hello` project and choose `Team->Activate`.

### 9. Run
- Log onto the [cockpit on the trial landscape](https://account.hanatrial.ondemand.com/cockpit) and choose `HANA XS Applications`.
- In the HANA XS Applications table, click the `application URL` link to launch the application.

A detailed description can be found at [Launching SAP HANA XS Applications](https://help.hana.ondemand.com/help/frameset.htm?46623ae2a51149df93bda2ed325892c6.html).


## TODO
Add a link to the Step by step guide for the Web IDE scenario.
