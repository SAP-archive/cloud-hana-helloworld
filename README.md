#Hello World!
#Source Code for the SAP HANA Cloud Platform "Hello World" Tutorials for SAP HANA

*Author: Thomas Bieser, Britta Varwig (SAP SE)*

This repository provides the full source code for the "Hello World" tutorials on [https://hcp.sap.com](https://hcp.sap.com). In this tutorials you can learn how to make your very first steps on SAP HANA by developing a very simple "Hello World" application using the SAP HANA web-based Development Workbench on the SAP HANA Cloud Platform.

These are the respective tutorials:

- [Hello World! Develop your first SAP HANA Application using the SAP HANA Web-based Development Workbench](http://hcp.sap.com/developers/nat200_1_native_hana_hello_world_with_web_ide.html) 
- [Hello Data! Access your first Data from a native SAP HANA Application using the SAP HANA Web-based Development Workbench](http://hcp.sap.com/developers/NAT200-2.html)
- [Hello User! Authorize your first User to access a SAP HANA Application using the SAP HANA Web-based Development Workbench](http://hcp.sap.com/developers/nat200-3.html)
- [Hello UI5! Develop your first UI5 Application on SAP HANA using the SAP HANA Web-based Development Workbench](http://hcp.sap.com/developers/nat200-4.html)

While the tutorials are optimized for the SAP HANA web-based Development Workbench, you can run and import this code in the SAP HANA Studio following these steps:

1. Setup a HANA Studio by following the tutorial "[Getting Started with SAP HANA Studio on SAP HANA Cloud Platform](http://hcp.sap.com/developers/nat201-1.html)".
2. In your HANA Studio open `File` > `Import...`
3. In the  `Import`-dialog select `SAP HANA Content`>`Sample Applications` and press `Next`. 
4. In the `Import Sample Application - Sample Application`-dialog select the application `HelloWorld` and press `Next`.
5. In the `Import Sample Application - Target System`-dialog select your HANA System and press `Next`.
6. In the `Import Sample Application - Destination`-dialog expand `Content` and select the package named like your account and HANA Trial instance, i.e. <kbd>p1234567890.hana</kbd>. Press `Finish`.
7. An Eclipse job `Sample Application Import` will start. When this job has finished, the new created `helloworld` package is imported in your SAP HANA Repository. 
8. To import the application in your workspace, go to the `Repository` view, choose the `helloworld` package and open the context menu for the package with a right-click.
9. Choose `Check Out and Import Projects...`. 

Should you have questions or face problems then [SAP HANA Cloud Platform Developer Center](http://scn.sap.com/community/developer-center/cloud-platform/content?filterID=contentstatus%5Bpublished%5D~objecttype~objecttype%5Bthread%5D).