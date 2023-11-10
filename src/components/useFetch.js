
import { useEffect, useState } from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null);
    const [controler, setControler] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        setControler(abortController)
        setLoading(true);

        fetch(url, { signal: abortController.signal })
            .then((response) => response.json())
            .then((data) => setData(data.results))
            .catch((error) => {
                if (error.name == "AbortError") {
                    console.log("Request cancelled");
                } else {
                    setError(error)
                }
            })
            .finally(() => setLoading(false))

        return () => abortController.abort();
    }, [])
    const handleCancelRequest = () => {
        if (controler) {
            controler.abort();
            setError("Request cancelled");
        }
        abortController.abort()
    }
    return { data, loading, error, handleCancelRequest };


}

