import React, { Component, useState } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { NativeBaseProvider, Text, Box, Image, View, VStack, Divider, Heading, Button, ScrollView } from 'native-base';
import { width } from 'styled-system';


const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);
const windowHeight = Dimensions.get('window').height;



const Details = ({ route, navigation }) => {


    const { url } = route.params;
    let urls = "https://img.youtube.com/vi/" + url + "/hqdefault.jpg";
    const data = "https://www.googleapis.com/youtube/v3/videos?id="+url+"&key=AIzaSyCV1rewCvYB5HeK42KfGd8VyEU97uyu004&part=snippet";
    const [stitle, setTitle] = useState(0);
    //const [thumbs, setThumbs] = useState([]);
    
    fetch(data)
  .then(response => response.json())
  .then(data => setTitle(data['items'][0]['snippet'].title));


   //console.log(thumbs);

    return (
        <NativeBaseProvider>
            <View style={styles.container}>
            <ScrollView>
                <Box>
            <Box border={1} borderRadius='md'>
                <VStack space={4} divider={<Divider />}>
                    <Box px={4} pt={4}>
                        <Heading color='white' allowFontScaling>{stitle}</Heading>
                    </Box>
                    <Box px={4} style={styles.incontain}>
                        <Image
                            source={{
                                uri: urls,
                            }}
                            resizeMode="cover"
                            alt="Alternate Text"
                            size="200"
                            style={{width:windowWidth, borderWidth:2,borderColor:'#ff8d8d'}}
                        />
                    </Box>
                    <Box px={4} pb={4}>
                      <Text mt="5" style={{fontWeight:"bold", color:'white'}}>All Downloadable Quality Available:</Text>
                        <Button mt="5">HD QUALITY</Button>
                        <Button mt="2">MID QUALITY</Button>
                        <Button mt="2">LOW QUALITY</Button>
                        
                    </Box>
                </VStack>
            </Box>
            </Box>
            </ScrollView>
            </View>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#434343',
        padding: 10,
        color:'white'

    },
    incontain: {

        justifyContent: 'center',
        alignItems: 'center'
    },
});


export default Details;
