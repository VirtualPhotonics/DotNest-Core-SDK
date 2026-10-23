This is the custom theme for the Virtual Photonics website. The theme includes custom layouts, styles, and components specific to the Virtual Photonics project.

It uses the DotNest's MediaTheme to apply the custom style to the Virtual Photonics DotNest site.

The recipes in the Recipes folder are used to build the website content and apply the custom style to the Virtual Photonics site.

The VirtualPhotonics.MediaTheme.Setup recipe calls the VirtualPhotonics.Common recipe to create a blank version of the website with the Virtual Phonics theme. To use this recipe, set the RecipeName value in the `appsettings.Development.json` file.
```
          "RecipeName": "VirtualPhotonics.MediaTheme.Setup"
```

The VirtualPhotonics.Setup recipe calls the VirtualPhotonics.Content.Export recipe to create an exact copy of the Virtual Photonics Website.  To use this recipe, set the RecipeName value in the `appsettings.Development.json` file.
```
          "RecipeName": "VirtualPhotonics.Setup"
```

To update the content, run the Full Export Deployment Plan from the admin on the DotNest site: 

`Tools > Deployments > Plans > Full Export - Click Execute and select File Download`

From the generated zip file (FullExport.zip), copy any images that are not already in the Recipes/Images folder and make the following changes to the recipe.json file before pasting the contents into the VirtualPhotonics.Content.Export.recipe.json file.

Remove all the Azure features, we are not using Azure 
```json
    {
      "name": "Feature",
      "enable": [
...
        "Lombiq.Hosting.Azure.ApplicationInsights", <- remove
...
        "OrchardCore.DataProtection.Azure", <- remove
...
        "OrchardCore.Media.Azure.Storage", <- remove
...
      ]
    },
```

At the end of the list of features, add the Virtual Photonics theme (don't forget the comma after the last item):
```json
	{
	  "name": "Feature",
	  "enable": [
...
		"TheBlogTheme",
		"VirtualPhotonics.Theme" <-- add this line
	  ]
	}
```

Under themes, make sure you change Site from Lombiq.Hosting.MediaTheme to VirtualPhotonics.Theme:
```json
    {
      "name": "Themes",
      "Site": "Lombiq.Hosting.MediaTheme",
      "Admin": "TheAdmin"
    },
```
change to:
```json
	{
	  "name": "Themes",
	  "Site": "VirtualPhotonics.Theme",
	  "Admin": "TheAdmin"
	},
```
**Before running the site locally, if there is an App_Data folder in the `\DotNest-Core-SDK\src\DotNest.Core.SDK.Web\` folder, delete it (this is where the current site data is stored).**

Run IISExpress and it should bring up a duplicate site locally containing all the hosted content.
