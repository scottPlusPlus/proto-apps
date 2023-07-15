export async function submitEmail(
    email: string,
    data: string,
    domain: string,
): Promise<void> {
    if (skipSendingData()){
        return;
    }
    const bodyData = {
        email: email,
        data: data,
        domain: domain
    };
    const endpoint = "/api/submitEmail";
    await sendJson(endpoint, JSON.stringify(bodyData));
}

export async function submitAnalytics(
    event: string,
    data: string
): Promise<void> {
    if (skipSendingData()){
        return;
    }
    const bodyData = {
        event: event,
        data: data,
    };
    const endpoint = "/api/submitAnalytics";
    await sendJson(endpoint, JSON.stringify(bodyData));
}

async function sendJson(endpoint: string, jsonString: string): Promise<void> {
    console.log("send: " + endpoint);
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: jsonString,
    };
    fetch(endpoint, options);
}


var firstLocalWarning = false;

function skipSendingData(){
    const local = window.location.href.includes("localhost");
    if (local){
        if (!firstLocalWarning){
            console.log("WARN: skipping sending data since we're on localhost");
            firstLocalWarning = true;
        }
    }
    return local;
}
