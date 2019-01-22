import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './index-v1.scss'

export default class Index extends Component {
    config = {
        navigationBarTitleText: '首页'
    }

    state = {
        list: [
            "get up",
            "coding",
            "sleep"
        ],
        inputVal: ''
    }

    componentWillMount(){}

    componentDidMount(){}

    componentWillUnmount(){}

    componentDidShow(){}

    componentDidHide(){}

    onChange = (e) => this.inputVal = e.target.value

    addItem = () => {
        let { list } = this.state
        const inputVal = this.inputVal
        if (inputVal == '') return
        else {
            list.push(inputVal)
        }
        this.setState({
            list,
            inputVal: ''
        })
    }

    delItem(index) {
        let { list } = this.state
        list.splice(index, 1)
        this.setState({
            list
        })
    }

    render () {
        let { list, inputVal } = this.state
        return (
            <View className='index'>
                <Input 
                    className='input' 
                    type='text' 
                    value={inputVal} 
                    // 不参与渲染的变量可不使用state储存，提高性能
                    onInput={this.onChange} 
                />
                <Text className='add' onClick={this.addItem}>添加</Text>
                <View className='list_wrap'>
                    <Text>Todo list</Text>
                    {
                        list.map((item, index) => {
                            return <View className='list'>
                                <Text>{index + 1}.{item}</Text>
                                <Text className='del' onClick={this.delItem.bind(this, index)}>删除</Text>
                            </View>
                        })
                    }
                </View>
            </View>
        )
    }
}

