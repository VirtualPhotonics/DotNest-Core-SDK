using Lombiq.Hosting.MediaTheme.Bridge.Constants;
using OrchardCore.DisplayManagement.Manifest;

[assembly: Theme(
    Name = "VirtualPhotonics",
    Author = "Virtual Photonics Technology Initiative",
    Website = "https://virtualphotonics.org",
    Version = "1.0.0",
    Description = "Custom theme for the Virtual Photonics Technology Initiative",
    Tags = ["VP, Custom"],
    Dependencies =
    [
        FeatureNames.MediaThemeBridge,
    ]
)]
