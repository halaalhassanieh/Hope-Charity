import WalletRechargeCard from "./WalletRechargeCard"


const WalletRechargeRequests = () => {
  
  return (

    <div>
      <WalletRechargeCard request={{
        id: 'abc123',
        user: { id: 'u001', name: 'John Doe' },
        amount: 50,
        date: '2025-08-07T12:00:00Z'
      }} onAction={(id) => console.log('Handled:', id)} />
    </div>
  )
}

export default WalletRechargeRequests
