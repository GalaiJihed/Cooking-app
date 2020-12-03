import React ,{Component}  from "react";
import {Text, View} from "react-native";
import AnimatedSplash from "./AnimatedSplash";

export default class SplashScreen extends Component
{
    state: { loaded: boolean } ={
        loaded: false,

    }
    static navigationOptions = {
        header: null
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({loaded: true});
            setTimeout(()=>this.props.navigation.navigate('SigninScreen'),4000)
        }, 4000);
    }


    render(){
        return(
            <AnimatedSplash
                logoWidht={150}
                logoHeight={150}
                isLoaded={this.state.loaded}
                backgroundColor={"rgba(73,182,77,0.9)"}
                logoImage={require("../../Assets/Images/splash.png")}
            >
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "#262626",
                    }}

                >
                    <Text style={{ color: "#fdfdfd", fontSize: 30 }}>Hello</Text>
                </View>
            </AnimatedSplash>
        )
    }
}
