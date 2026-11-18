# SamplePage-Static

A version of [SamplePage](https://github.com/xlukacs/SamplePage) served by Static Site. Try the counter, greeting, and dark-mode toggle.

## MadRent

Select **GitHub repository** and **Dedicated VM**, then choose this repository's `main` branch.

Choose **Static Site**. Set **Publish directory** to `public`, clear the install and build commands, and enable **SPA routing** to test its fallback. Use the default port 8080.

Open `/about.html` to check a static asset. Open `/sample/deep-link` to check the fallback, then turn it off and verify the path returns 404.

## Run locally

```sh
python3 -m http.server 8080 --directory public
```
