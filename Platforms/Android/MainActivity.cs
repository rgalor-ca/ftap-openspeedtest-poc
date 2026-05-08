using Android.App;
using Android.Content.PM;
using Android.OS;

namespace HybridSpeedTestPoc;

[Activity(Theme = "@style/Maui.SplashTheme", MainLauncher = true, ConfigurationChanges = ConfigChanges.ScreenSize | ConfigChanges.Orientation | ConfigChanges.UiMode | ConfigChanges.ScreenLayout | ConfigChanges.SmallestScreenSize | ConfigChanges.Density)]
public class MainActivity : MauiAppCompatActivity
{
    protected override void OnCreate(Bundle? savedInstanceState)
    {
        base.OnCreate(savedInstanceState);

        if (Window is null)
        {
            return;
        }

#pragma warning disable CA1416, CA1422
        Window.SetStatusBarColor(Android.Graphics.Color.ParseColor("#0f172a"));
        Window.SetNavigationBarColor(Android.Graphics.Color.ParseColor("#0f172a"));
        if (Build.VERSION.SdkInt >= BuildVersionCodes.R)
        {
            Window.SetDecorFitsSystemWindows(true);
        }
#pragma warning restore CA1416, CA1422
    }
}
