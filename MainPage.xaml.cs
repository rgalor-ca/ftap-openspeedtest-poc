using Microsoft.AspNetCore.Components.WebView;

#if ANDROID
using Android.Webkit;
#endif

namespace HybridSpeedTestPoc;

public partial class MainPage : ContentPage
{
    public MainPage()
    {
        InitializeComponent();
    }

    private void OnBlazorWebViewInitialized(object? sender, BlazorWebViewInitializedEventArgs e)
    {
#if ANDROID
        e.WebView.Settings.MixedContentMode = MixedContentHandling.AlwaysAllow;
#endif
    }
}
