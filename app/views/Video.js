import React from 'react';
import { Text, View, FlatList, Image, TouchableWithoutFeedback } from 'react-native';

export class Video extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { listLoaded: false };
    }

    componentDidMount() {
        return fetch(
            'https://www.googleapis.com/youtube/v3/search?part=snippet&q=react-native&type=video&key=AIzaSyAYYs0r5BsLNsg_raWBgUdAQmq5QwNEMfM'
        ).then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                listLoaded: true,
                videoList: Array.from(responseJson.items)
            })
        })
        .catch((errorCaught) => {
            console.error(errorCaught);
        });
    }

    render() {
        return(
            <View>
                { this.state.listLoaded && (
                    <View style ={{ paddingTop: 30}}>
                        <FlatList
                            data={ this.state.videoList }
                            renderItem = {({item}) => 
                            <TubeItem 
                                id = { item.id.videoId }
                                title = { item.snippet.title }
                                imageSrc = { item.snippet.thumbnails.high.url }
                            />
                        }    
                        />
                    </View>
                )}
                { !this.state.listLoaded && (
                    <View style = {{ paddingTop: 30 }}>
                        <Text> CURRENTLY LOADING ... </Text>
                    </View>
                )}
            </View>
        );
    }
}

export class TubeItem extends React.Component {
    onPress = () => {
        console.log(this.prop.id);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress = { this.onPress }>
                <View style = {{ paddingTop: 20, alignItems: 'center' }}>
                    <Image 
                        style = {{ width: '100%', height: 200 }}
                        source = {{ uri: this.props.imageSrc }}
                    />
                    <Text >
                        {this.props.title}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}