import React from 'react';
import '../Styles/VipTable.css';
import logo from "../images/logo.png"

const VipTable = () => {
  const data = [
    { level: 'Experience Level', depositAmt: '--', dailyIncome: ' 6 - 8', monthlyIncome: '7Days Trail' },
    { level: 'VIP 1', depositAmt: 'R300', dailyIncome: '6 - 8', monthlyIncome: '400 - 550' },
    { level: 'VIP 2', depositAmt: 'R800', dailyIncome: '22 - 28', monthlyIncome: '1400 - 1600' },
    { level: 'VIP 3', depositAmt: 'R2000', dailyIncome: '63 - 70', monthlyIncome: '4200 - 4500' },
    { level: 'VIP 4', depositAmt: 'R5000', dailyIncome: '150 - 190', monthlyIncome: '12000 - 19000'},
    { level: 'VIP 5', depositAmt: 'R20000', dailyIncome: '760 - 900', monthlyIncome: '63000 - 68000' },
    { level: 'VIP 6', depositAmt: 'R50000', dailyIncome: '2400 - 2800', monthlyIncome: '220000 - 270000' },
    { level: 'VIP 7', depositAmt: 'R120000', dailyIncome: '7500 - 8500', monthlyIncome: '800K - 1M' },
    { level: 'VIP 8', depositAmt: 'R200000', dailyIncome: '14000 - 17000', monthlyIncome: '2M - 2.5M' },
    { level: 'VIP 9', depositAmt: 'R400000', dailyIncome: '34000 - 40000', monthlyIncome: '8M - 9M' },
  ];

  return (
    <div className="vip-table-container">
      <div className='logo-container'>
      <img src={logo} alt="Logo" className="logo" />
      </div>
      <table className="vip-table">
        <thead>
          <tr>
            <th>VIP Level</th>
            <th>Deposit Amount</th>
            <th>Daily Income</th>
            <th>Monthly Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.level}>
              <td>{item.level}</td>
              <td>{item.depositAmt}</td>
              <td>{item.dailyIncome}</td>
              <td>{item.monthlyIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default VipTable;
