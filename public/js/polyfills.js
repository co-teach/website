/* Polyfill for CSS variables. Check if IE11 is used prior to loading file. */
if (window.MSInputMethodContext && document.documentMode) {
  document.write(
    '<script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"><\x2fscript>'
  );
  document.write(
    '<div style="position: relative; background: #B33A3A; z-index: 1000; color: white; text-align: center; font-weight: bold; padding: 10px;">Let op: je gebruikt Internet Explorer, <a style="color: rgba(71, 0, 0, 1); text-decoration: none;" href="https://docs.microsoft.com/nl-nl/lifecycle/faq/internet-explorer-microsoft-edge">een verouderde browser</a>. Deze site ziet er beter uit in een moderne browser, zoals Edge, Firefox, Chrome of Safari.<\x2fdiv>'
  );
}
