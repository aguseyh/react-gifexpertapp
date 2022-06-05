import { useEffect, useState } from "react";
import { getGifs } from "../components/utils/getGifs";

export const useFetch = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category).then((imgs) =>
            setState({
                data: imgs,
                loading: false,
            })
        );
    }, [category]);

    return state;
};
