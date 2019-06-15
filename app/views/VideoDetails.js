import React from 'react';
import { Text, View, WebView } from 'react-native';

export class VideoDetail extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let tubeId = this.props.navigation.getParam('ytubeId', 'NO VIDEO');
        let tubeUrl = `https://www.youtube.com/embed/${tubeId}`;
        return(
            <WebView 
                style = {{ marginTop: 20 }}
                javaScriptEnabled = { true }
                source = {{ uri: tubeUrl }}
            />
            // <View style = {{ paddingTop: 40}}>
            //     <Text>{ tubeId }</Text>
            // </View> only for testing to display tubeID if video fails, debug with console.
        );
    }
}