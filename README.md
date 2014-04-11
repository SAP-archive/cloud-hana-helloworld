cloud-xs-getting-started-hello
==============================

 #cloud-hana-native-sample
# Importing the "Getting Started Hello" source code to a Trial SAP HANA Instance with Eclipse

This is based on the Step by Step tutorial at  "[help.hana.ondemand.com -> Creating an SAP HANA XS Application](https://help.hana.ondemand.com/help/frameset.htm?3762b229a4074fc59ac6a9ee7404f8c9.html)".

The tutorial explains how to create a simple SAP HANA XS application that is written in server-side JavaScript and displays the "Hello World" message together with a string extracted from a table in the SAP HANA database.

### 1. Prerequisites   
     
- You have an Eclipse IDE with HANA Tools installed. A detailed description can be found at "[Setting Up the Tools](https://help.hana.ondemand.com/help/frameset.htm?b0e351ada628458cb8906f55bcac4755.html)".
- You have [created a Trial SAP HANA Instance](https://help.hana.ondemand.com/help/frameset.htm?1a597a4505fc4178acf2232ee0fda081.html), e.g "dev".

### 2. Add HANA System

In the "SAP HANA Development" perspective go to "Repositories" tab, right click and choose "Add cloud System". A detailed description can be found at "[Connecting to a Productive SAP HANA Instance via the Eclipse IDE](https://help.hana.ondemand.com/help/frameset.htm?4efc124a0ccc42b3b502ad3a3908d23d.html)"

### 3. Add HANA repository workspace
In the "SAP HANA Development" perspective go to "Repositories" tab, right click and choose "Create repository workspace"... 

- Choose "cloud-hana-getting-started-hello" as workspace name
- Choose "C:\\HANAXSws"
- Click Finish button.

The final workspace location is "C:\\HANAXSws\\cloud-hana-getting-started-hello"

### 4. Create package folders
- Create a subfolder with your trial account name e.g. "C:\\HANAXSws\\cloud-hana-getting-started-hello\\p1940523533trial"
- Inside this folder create a subfolder with the name of your Trial SAP HANA Instance, e.g. "C:\\HANAXSws\\cloud-hana-getting-started-hello\\p1940523533trial\\dev"

### 5. Get the example code
- Download [https://github.com/SAP/cloud-hana-getting-started-hello/archive/master.zip](https://github.com/SAP/cloud-hana-getting-started-hello/archive/master.zip). 
- Create a new folder "hello",e.g "C:\\HANAXSws\\cloud-hana-getting-started-hello\\p1940523533trial\\dev\\hello"
- The zip file contains a subfolder "cloud-hana-getting-started-hello-master". Extract its content to the "hello" folder you just created.
 
### 6. Import the sample project
- In the "SAP HANA Development" perspective go to "Project Explorer" tab, right  - Click and choose "Import->Import->General->Existing Projects into Workspace".
Select root directory by browsing for the hello folder: "C:\\HANAXSws\\cloud-hana-getting-started-hello\\p1940523533trial\\dev\\hello" 
- Click Finsh button.
The project hello is listed in the Project Explorer

- change "model_access.hdbrole" file content from
	
	    role {{PACKAGE_NAME}}::model_access {
	    	application privilege: {{PACKAGE_NAME}}::Basic;
	    }
    e.g. to

	    role p1940523533trial.dev.hello::model_access {
	    	application privilege: p1940523533trial.dev.hello::Basic;
	    }


### 7. Share the project
- Right click on the "hello" project and choose "Team->Share Project-SAP HANA Repository"
- Click Next and then Finsh button.

### 8. Activate
- Right click on the "hello" project and choose "Team->Activate"

### 9. Run
- Log onto the [cockpit on the trial landscape](https://account.hanatrial.ondemand.com/cockpit) and choose HANA XS Applications.
- In the HANA XS Applications table, click the application URL link to launch the application.

A detailed description can be found at "[Launching SAP HANA XS Applications](https://help.hana.ondemand.com/help/frameset.htm?46623ae2a51149df93bda2ed325892c6.html)"


## TODO
Add a link to the Step by step guide for the Web IDE scenario.
