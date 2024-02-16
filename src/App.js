import CashWithdrawal from './components/CashWthdrawal/index'
import {Component} from 'react'
import './App.css'

const denominationsList = [
  {
    id: 1,
    value: 50,
  },
  {
    id: 2,
    value: 100,
  },
  {
    id: 3,
    value: 200,
  },
  {
    id: 4,
    value: 500,
  },
]

class App extends Component{

    state= {balance: 2000}
 
    withdrawAmount = (amount)=>{
        this.setState(prevState => ({balance: prevState.balance-amount}))
    }

    render(){
        const {balance} = this.state
        return(
            <div className='body-container'>
                <div className='card-container'>
                   <div className='card-header'>
                      <div className='profile-circle'>
                          <h1>S</h1>
                      </div>
                      <div className='personName'>
                         <h1>Sarah Williams</h1>
                      </div>
                   </div>
                   <div className='card-balance'>
                       <div><h2>Your Balance</h2></div>
                       <div><h1>   {balance}  </h1> <p>In Rupees</p></div>
                   </div>
                   <div className='withdraw-container'>
                      <div><h1>Withdraw</h1></div>
                      <div><h2>choose sum (in rupees)</h2></div>
                      <div className='card-gallery'>
                           {
                              denominationsList.map(eachValue =>(
                                <CashWithdrawal withdrawAmount={this.withdrawAmount} DenominationDetails={eachValue}  key={eachValue.id}/>
                              ))
                           }
                           
                      </div>
                   </div>
                </div>
            </div>
        )
    }
    }

export default App
