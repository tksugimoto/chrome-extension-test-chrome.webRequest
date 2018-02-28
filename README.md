# chrome-extension-test-chrome.webRequest
chrome.webRequest.* の動作確認用

## 公式ドキュメント
[chrome.webRequest - Google Chrome](https://developer.chrome.com/extensions/webRequest)

## 対象URL
`*://*.example.com/*`

※ [manifest.json](./chrome-extension/manifest.json) ではなく、[background.js](./chrome-extension/background.js) で制限している

## 対象イベント
* onBeforeRequest
* onBeforeSendHeaders
* onSendHeaders
* onHeadersReceived
* onAuthRequired
* onResponseStarted
* onBeforeRedirect
* onCompleted
* onErrorOccurred
