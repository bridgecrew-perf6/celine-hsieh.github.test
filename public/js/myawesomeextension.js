class MyAwesomeExtension extends Autodesk.Viewing.Extension {
    constructor(viewer, options) {
        super(viewer, options);
        this._group = null;
        this._button = null;
    }

    load() {
        console.log('MyAwesomeExtensions has been loaded');
        return true;
    }

    unload() {
        // Clean our UI elements if we added any
        if (this._group) {
            this._group.removeControl(this._button);
            if (this._group.getNumberOfControls() === 0) {
                this.viewer.toolbar.removeControl(this._group);
            }
        }
        console.log('MyAwesomeExtensions has been unloaded');
        return true;
    }

    onToolbarCreated() {
        // Create a new toolbar group if it doesn't exist
        this._group = this.viewer.toolbar.getControl('allMyAwesomeExtensionsToolbar');
        if (!this._group) {
            this._group = new Autodesk.Viewing.UI.ControlGroup('allMyAwesomeExtensionsToolbar');
            this.viewer.toolbar.addControl(this._group);
        }

        // Add a new button to the toolbar group
        this._button = new Autodesk.Viewing.UI.Button('myAwesomeExtensionButton');
        this._button.onClick = (ev) => {
           /* // name of model to download
            const name = 'MyForgeModel'

            // URN of model to download
            const urn = 'dXGhsujdj .... '

            // Get Forge service
            const forgeSvc = ServiceManager.getService(
            'ForgeSvc')

            // getToken async function
            const getToken = () => forgeSvc.get2LeggedToken()

            // Get Extractor service
            const extractorSvc = ServiceManager.getService(
            'ExtractorSvc')

            // target path to download SVF
            const dir = path.resolve(__dirname, `${name}`)

            // perform download
            const files = await extractorSvc.download(
            getToken, urn, dir)

            // target zipfile
            const zipfile = dir + '.zip'

            // zip all files
            await extractorSvc.createZip(
            dir, zipfile, name, files)

            // remove downloaded resources directory
            rmdir(dir)*/
            };
            this._button.setToolTip('My Awesome Extension');
            this._button.addClass('myAwesomeExtensionIcon');
            this._group.addControl(this._button);
        }
    }

Autodesk.Viewing.theExtensionManager.registerExtension('MyAwesomeExtension', MyAwesomeExtension);
