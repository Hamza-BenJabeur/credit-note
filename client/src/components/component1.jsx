// import array from '../../fakedata.js'
import Display from './component2.jsx'
import axios from 'axios';
// import {request} from 'https'
// import $ from 'jquery'

// import List from './List.jsx'

class Start extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            date: '',
            bool: false,
            obj: {},
            delete: '',
            alluser: [],
            select: ''

        }

        this.price = this.price.bind(this)
        this.name = this.name.bind(this)
        this.date = this.date.bind(this)
        this.condition = this.condition.bind(this)
        this.delete = this.delete.bind(this)

    }


    componentDidMount() {
        axios.get(`/user`).then(res => {
            const alluser = res.data
            this.setState({alluser});
            console.log(this.state.alluser)
        })
        .catch(e => {
            console.log(e)
        })
    }

    shouldComponentUpdate(){
        return true
    }

    price(e) {
        this.state.price = e.target.value
        this.setState({price: this.state.price})
        console.log(this.state.price)
    }

    name(e) {
        this.setState({name: e.target.value})
        console.log(this.state.name)
    }

    date(e) {
        this.setState({date: e.target.value})
        console.log(this.state.date)
    }

    condition() {
        this.setState({
            bool: !this.state.bool
        })
    }

    // addAndUpdate() {
    // console.log(this.state.price)
    //    this.state.obj={
    //       name: this.state.name,
    //       price: this.state.price,
    //       date: this.state.date
    // }
    //     this.setState({
    //          obj:this.state.obj
    //     })

    //     console.log(this.state.obj)

    //    const alluser = this.state.alluser.map((elem, i) => {

    //         if (this.state.name === elem.name) {
    //            elem.price = parseInt(this.state.alluser[i].price, 10) + parseInt(this.state.price, 10)
    //             elem.date = this.state.date
    //             axios.post('/user',elem)
    //             return elem
    //              }


    //     });
    //     this.setState({alluser});
    //     // if (! bo && Object.keys(this.state.obj).length !== 0) {

    //     //     this.state.alluser.push(this.state.obj)
    //     // }

    // }
    handleclick() {
        const {name, price, date} = this.state
        let newPrice;
        let newDate;

        this.state.alluser.forEach((item, key) => {
            if (name === item.name) {
                console.log(price)
                newPrice = Number(price) + Number(item.price)
                newDate = date
                console.log(newPrice);
                return false;
            }
          
        })

        newPrice = newPrice || price
        newDate = newDate || date
        console.log(name, newPrice, date)
        axios.post('/user', {
            name,
            price: newPrice,
            date: newDate
        }).then(()=>{
            this.componentDidMount()
        })
        

    }

    selectOption(e) {
        this.setState({select:e.target.value},()=>console.log(this.state.select))
        // console.log(this.state.select)
        
    }
    delete(){
        console.log(this.state.select)
    axios.post('/del', this.state.select)
  
}
    

    render() {
        return (<div id="enter">

            <label>Enter Full Name</label>
            <br></br>

            <input type="text" required
                onChange={
                    this.name
                }/>
            <br></br>

            <label>Enter the Price</label>
            <br></br>

            <input type="number" required
                onChange={
                    this.price
                }/>
            <br></br>

            <label>Enter the Date</label>
            <br></br>

            <input type="date" required
                onChange={
                    this.date
                }/>
            <br></br>
            <label >delete Name:</label><br></br>
            <select onChange={
                this.selectOption.bind(this)
            }> {
                this.state.alluser.map((lists, key) => <option key={key}
                    value={
                        lists.name
                }> {
                    lists.name
                } </option>)
            } </select>
                <br></br>
            <button onClick={
                this.handleclick.bind(this)
            }>Update</button>
            <button onClick={
                this.delete
            }>Delete</button>
            <button onClick={
                this.condition
            }>Show client</button>
              {
            this.state.bool ? <Display array={
                this.state.alluser
            }/> : null
        } </div>)
    }
}
export default Start;
