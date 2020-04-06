const validateCommandInput = ((urls, domain, slashtags) => {
    if(!urls) {
        return new Error('No URL found in the message');
    }
    if(Array.isArray(domain)) {
        return new Error('Multiple domains found. Please specify only one domain');
    }
    if(Array.isArray(slashtags) && slashtags.length > urls.length) {
        return new Error('URLs/Slashtags mismatch: you specified more slashtags than URLs');
    }
    if(urls.length > 5) {
        return new Error('You cannot shorten more than 5 URLs at the same time');
    }
});

module.exports = validateCommandInput;