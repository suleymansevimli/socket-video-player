import React, {useEffect, useRef, useState} from 'react';
import {useSocket} from "../providers/SocketProvider";
import {Box, Grid, Text, VStack} from "@chakra-ui/react";
import {ColorModeSwitcher} from "../ColorModeSwitcher";

const Video = () => {
    const [videoStatus, setVideoStatus] = useState(false)

    const {listener} = useSocket();

    const videoRef = useRef();

    useEffect(() => {

        listener('video-on', ({play}) => {
            setVideoStatus(play)
            videoRef.current?.play()
        })

        listener('video-off', ({play}) => {
            setVideoStatus(play)
            videoRef.current?.pause()
        })

    }, [videoStatus, listener])


    return (
        <Box textAlign="center" fontSize="xl">
            <Grid minH="100vh" p={3}>
                <ColorModeSwitcher justifySelf="flex-end"/>
                <VStack spacing={8}>
                    <Text>
                        <video height={"500"} width={"500"} src={"/movie.mp4"} ref={videoRef}/>
                    </Text>
                </VStack>
            </Grid>
        </Box>
    );
}

export default Video;