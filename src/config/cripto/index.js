import md5 from 'md5';

function cryptData(){
	const ts = new Date().getTime();
	const pubKey = 'd7f5b6032d4e2340a208ab7baefe92e7';
	const pvKey = '770da22833a7f2fa2cc38ddb992f00d3d0fa7b15';
	const hash = String(ts) + String(pvKey) + String(pubKey);
	const data = {
		apiKey: pubKey,
		timestamp: ts,
		hash: md5(hash)
	};

	return data;
}

export default cryptData;