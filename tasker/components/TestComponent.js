import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const TestComponent=()=>{
    return(
        <ScrollView>
            <View style={{marginTop:32,paddingHorizontal:55}}>
                <Card>
                    <Card.Title>This is a test card</Card.Title>
                    <Card.Divider/>
                    <Text>This is the content of a card</Text>
                </Card>
            </View>
        </ScrollView>
    )
}
export default TestComponent;