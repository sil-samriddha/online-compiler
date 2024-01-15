const url = import.meta.env.VITE_API_URL;

const execution = async (code, language, input) => {
    const req = {
        code : code,
        language : language,
        input : input
    }

    try {
        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(req)
        }
    
        const res = await fetch (url, config);

        if (res.status != 200) {
            return {
                error : 'Service Not Available'
            }
        }
        const json = await res.json();

        if (json.error == 'CodeX API Timed Out. Your code took too long to execute, over 30 seconds. Make sure you are sending input as payload if your code expects an input.'){
            return {
                error : 'Input Required: Your code expects user input - use the designated input field to insert.'
            }
        }

        return json;
    }

    catch (e) {
        return {
            error : e
        }

    }
}

export default execution
