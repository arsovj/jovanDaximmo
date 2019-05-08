
using System.Linq;
using System.Web.Mvc;
using System.Web.Optimization;
using Umbraco.Core;
using Umbraco.Core.Composing;
using Umbraco.Core.Events;
using Umbraco.Core.Services;
using Umbraco.Core.Services.Implement;

namespace EverNearCms
{
    [RuntimeLevel(MinLevel = RuntimeLevel.Run)]
    public class SubscribeToContentServiceSavingComposer : IUserComposer
    {
        public void Compose(Composition composition)
        {
            // Append our component to the collection of Components
            // It will be the last one to be run
            composition.Components().Append<SubscribeToContentServiceSavingComponent>();
        }
    }

    public class SubscribeToContentServiceSavingComponent : IComponent
    {
        public SubscribeToContentServiceSavingComponent()
        {

        }

        public void Initialize()
        {
            BundleConfig.RegisterBundles(BundleTable.Bundles);
            BundleTable.EnableOptimizations = true;

        }

        public class BundleConfig
        {
            public static void RegisterBundles(BundleCollection bundles)
            {
                bundles.Add(new StyleBundle("~/bundles/siteMaster.css").Include(
                    "~/css/bootstrap.css",
                    "~/css/template.css",
                    "~/css/bootstrap-responsive.css",
                    "~/css/template-responsive.css",
                    "~/css/megamenu.css",
                    "~/css/megamenu-responsive.css",
                    "~/css/off-canvas.css",
                    "~/css/home.css",
                    "~/css/home-responsive.css",
                    "~/css/style.css",
                    "~/css/mod_jaquickcontact.css"
                    ));
                bundles.Add(new ScriptBundle("~/bundles/scriptMaster.js").Include(
                        "~/scripts/jquery.min.js",
                       "~/scripts/jquery-noconflict.js",
                       "~/scripts/jquery-migrate.min.js",
                       "~/scripts/caption.js",
                       "~/scripts/bootstrap.js",
                       "~/scripts/jquery.tap.min.js",
                       "~/scripts/off-canvas.js",
                       "~/scripts/script.js",
                       "~/scripts/menu.js",
                       "~/scripts/responsive.js",
                       "~/scripts/jquery.easing.1.3.js",
                       "~/scripts/TemplateScripts.js",
                       "~/scripts/mootools-core.js",
                       "~/scripts/core.js",
                       "~/scripts/mootools-more.js",
                       "~/scripts/JCaption.js"
                    ));
                
                    bundles.IgnoreList.Clear();
            }
        }

        public void Terminate()
        {
        }


    }
}

