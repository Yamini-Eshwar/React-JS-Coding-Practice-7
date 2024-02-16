import './index.css'

const   CashWithdrawal= (props) => {

    const {DenominationDetails,withdrawAmount}= props
    const {value} =DenominationDetails

    const onButtonClick =() => {
         withdrawAmount(value)
    }

    return(
        <button className='card1' onClick={onButtonClick}><h1> {value} </h1></button>
    )
}

export default CashWithdrawal