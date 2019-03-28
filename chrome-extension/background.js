
const filter = {
	urls: [
		'*://*.example.com/*',
	],
};

[
	['onBeforeRequest', ['blocking', 'requestBody']],
	['onBeforeSendHeaders', ['requestHeaders', 'blocking', 'extraHeaders']],
	['onSendHeaders', ['requestHeaders', 'extraHeaders']],
	['onHeadersReceived', ['blocking', 'responseHeaders', 'extraHeaders']],
	['onAuthRequired', ['responseHeaders', 'blocking', 'extraHeaders']],
	['onResponseStarted', ['responseHeaders', 'extraHeaders']],
	['onBeforeRedirect', ['responseHeaders', 'extraHeaders']],
	['onCompleted', ['responseHeaders', 'extraHeaders']],
	['onErrorOccurred'],
].forEach(([eventName, opts]) => {
	const callback = (details) => {
		console.log(eventName, details);
	};
	const args = [callback, filter, opts].filter(_ => typeof _ !== 'undefined');

	console.log(eventName, args);

	chrome.webRequest[eventName].addListener(...args);
});
