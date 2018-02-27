
const filter = {
	urls: [
		'*://*.example.com/*',
	],
};

[
	['onBeforeRequest', ['blocking', 'requestBody']],
	['onBeforeSendHeaders', ['requestHeaders', 'blocking']],
	['onSendHeaders', ['requestHeaders']],
	['onHeadersReceived', ['blocking', 'responseHeaders']],
	['onAuthRequired', ['responseHeaders', 'blocking']],
	['onResponseStarted', ['responseHeaders']],
	['onBeforeRedirect', ['responseHeaders']],
	['onCompleted', ['responseHeaders']],
	['onErrorOccurred'],
].forEach(([eventName, opts]) => {
	const callback = (details) => {
		console.log(eventName, details);
	};
	const args = [callback, filter, opts].filter(_ => typeof _ !== 'undefined');

	console.log(eventName, args);

	chrome.webRequest[eventName].addListener(...args);
});
