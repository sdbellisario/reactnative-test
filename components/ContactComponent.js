import React, { Component } from 'react';
import { render } from 'react-dom';
import { ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {
    
    static navigationOptions = {
        title: 'Contact Us'
    }
    
    render() {
        return (
            <ScrollView>
                <Card
                title="Contact Information"
                /*wrapperStyle={{margin: 30}}*/
                >
                    <Divider />
                    <View style={{margin: 20}} />
                    <Text>1 Nucamp Way</Text>
                    <Text>Seattle, WA 98001</Text>
                    <Text>U.S.A</Text>
                    <Text></Text>
                    <Text>Phone: 1-206-555-1234</Text>
                    <Text>Email: campsites@nucamp.co</Text>

                </Card>
            </ScrollView>
        )
    }
}


export default Contact;