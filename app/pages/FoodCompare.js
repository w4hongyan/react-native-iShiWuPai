/**
 * Created by ljunb on 16/6/5.
 */
import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    InteractionManager,
    ListView,
} from 'react-native';
import Header from '../components/Header';
import Common from '../common/constants';
import SearchContainer from '../containers/SearchContainer';

export default class FoodCompare extends React.Component {
    
    render() {
        return (
            <View style={{backgroundColor: 'white'}}>
                <Header
                    leftIcon='angle-left'
                    leftIconAction={()=>this.props.navigator.pop()}
                    title='对比详情'
                />
                <View style={styles.compareHeader}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={()=>{
                            InteractionManager.runAfterInteractions(()=>{
                                this.props.navigator.push({
                                    name: 'SearchContainer',
                                    component: SearchContainer,
                                    passProps: {
                                        type: 'compare'
                                    }
                                })
                            })
                        }}
                    >
                        <Image style={styles.compareFoodDefault} source={{uri: 'img_analyze_bg'}}>
                            <Image style={styles.addIcon} source={{uri: 'ic_analyze_search_red'}}/>
                        </Image>
                    </TouchableOpacity>
                    <View style={styles.vsContainer}>
                        <Text style={styles.vsFont}>VS</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={()=>{
                            InteractionManager.runAfterInteractions(()=>{
                                this.props.navigator.push({
                                    name: 'SearchContainer',
                                    component: SearchContainer,
                                })
                            })
                        }}
                    >
                        <Image style={styles.compareFoodDefault} source={{uri: 'img_analyze_bg'}}>
                            <Image style={styles.addIcon} source={{uri: 'ic_analyze_search_red'}}/>
                        </Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.header}><Text>营养元素</Text></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    compareHeader: {
        flex: 1,
        flexDirection: 'row',
        height: 150,
        backgroundColor: 'rgb(241, 241, 241)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    compareFoodDefault: {
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },

    addIcon: {
        width: 20,
        height: 20,
    },

    vsContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Common.colors.themeColor,
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
    },

    vsFont: {
        color: Common.colors.themeColor,
        fontSize: 20,
    },

    header: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    }
})