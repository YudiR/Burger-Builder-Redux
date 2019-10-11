import React, {Component} from 'react'
import axios from '../../axios/axios'
import Error from '../../hoc/error/error'
import Order from '../../components/order/order'

class Orders extends Component {

    state = {
        orders: []
    }

componentDidMount ()  {
    axios.get('/orders.json')
    .then(res => {
        console.log(res.data)
        const fetchedOrders = []
        for (let key in res.data ){
            fetchedOrders.push({
                ...res.data[key], id: key
            })
        this.setState({loading:false, orders: fetchedOrders})
        console.log(fetchedOrders,"fetched orders!!")
        }
    })
    .catch(err => {
        this.setState({loading: false})
    })
}
    render() {
        return (
<div>
    {this.state.orders.map(order => (
        <Order
        key ={order.id}
        ingredients = {order.ingredients}
        price= {order.price}/>
    ))}
    </div>
        )
    }
}

export default Error(Orders, axios)