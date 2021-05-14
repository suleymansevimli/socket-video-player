import React, {useEffect, useState} from 'react';
import {Button, Grid} from "@chakra-ui/react";
import {useSocket} from "../providers/SocketProvider";

const Controller = () => {

    const [videoPlayOrPause, setVidePlayOrPause] = useState(false);

    const {listener, emitter} = useSocket();

    useEffect(() => {
        listener('video-on', ({play}) => {
            setVidePlayOrPause(play);
        })

        listener('video-on', ({play}) => {
            setVidePlayOrPause(play);
        })

    }, [videoPlayOrPause])

    const playOrPause = () => {
        videoPlayOrPause
            ? emitter('video-off')
            : emitter('video-on')

        setVidePlayOrPause(!videoPlayOrPause)
    }


    return (
        <Grid height={"100vh"} placeItems={"center"}>
            <Button size={"lg"} onClick={playOrPause}>
                {videoPlayOrPause ? 'Pause' : 'Play'}
            </Button>
        </Grid>
    )
}

export default Controller;