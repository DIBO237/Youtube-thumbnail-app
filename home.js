import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { NativeBaseProvider, Text, Box, View, Center, Input, Heading, Button, Alert  } from 'native-base';
import { alignContent, style } from 'styled-system';
import { AntDesign } from '@expo/vector-icons';
import getVideoId from 'get-video-id';




const Home = ({ navigation }) => {
    const [count, setCount] = useState(0);

    function sends() {

        try{

            console.log(getVideoId(count));
            const { id, service } = getVideoId(count);
            if (id != null && id != "" && service == "youtube") {
                navigation.navigate('Details', {
                    url: id,
                });
            } else {
    
                alert("ERROR INVALID URL DETECTED !!")
            }

        }
        catch(err){
            console.log(err);
            alert("SOMETHING WENT WRONG !! ")

        }
       
    }

    return (
        <NativeBaseProvider>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={styles.container}>

                    <Box style={styles.incontain} safeArea>
                        <AntDesign style={{ marginTop: 50 }} allowFontScaling name="youtube" size={160} color="red" />
                        <Heading color='white' fontWeight="bold" allowFontScaling  >YouTube Thumbnail Downloader</Heading>
                        <Input color='white' fontWeight='bold' fontSize='18' mt="10" placeholder="Paste the YouTube URL" onChangeText={setCount} w={{ base: "100%", md: "25%", }} />
                        <Button mt='5' colorScheme="danger" onPress={sends} >Search</Button>
                    </Box>

                </View>
            </TouchableWithoutFeedback>

        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#434343',
        padding: 10,

    },
    incontain: {

        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default Home;
