import React from "react";
import styles from "./Mortgage.module.css";


const Mortgage: React.FC = () => {
  const [loanAmount,setLoanAmount] = React.useState<number>(10000)
  const [interestRate, setInterestRate] = React.useState<number>(3);
  const [loanTerm, setLoanTerm] = React.useState<number>(30);

  const handleInterestRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterestRate(Number(event.target.value));
  };

  const handleLoanTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoanTerm(Number(event.target.value));
  };

  const handleLoanAmountChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setLoanAmount(Number(event.target.value))
  }

  const monthlyPayment =
    (loanAmount *
      (interestRate / 1200) *
      Math.pow(1 + interestRate / 1200, loanTerm * 12)) /
    (Math.pow(1 + interestRate / 1200, loanTerm * 12) - 1);

  return (
    <div className={styles.mortgage}>
      <div className={styles.inner}>
      <div className={styles.project_name}>Mortgage Calculator</div>
      <div className={styles.input}>
        <label htmlFor="loanAmount">Loan Amount:</label>
        <input
          type="number"
          id="loanAmount"
          name="loanAmount"
          min="0"
          max="5000000"
          value={loanAmount}
          onChange={handleLoanAmountChange}
        />
        <div className={styles.range}>
          <input
            type="range"
            min="0"
            max="1000000"
            step="1000"
            value={loanAmount}
            onChange={handleLoanAmountChange}
          />
        </div>
      </div>
      <div className={styles.input}>
        <label htmlFor="interestRate">Interest Rate:</label>
        <input
          type="number"
          id="interestRate"
          name="interestRate"
          min="0"
          max="100"
          step="0.1"
          value={interestRate}
          onChange={handleInterestRateChange}
        />
        <span>%</span>
      </div>
      <div className={styles.input}>
        <label htmlFor="loanTerm">Loan Term:</label>
        {/* <select id="loanTerm" name="loanTerm" value={loanTerm} onChange={handleLoanTermChange}>
          <option value="10">10 years</option>
          <option value="15">15 years</option>
          <option value="20">20 years</option>
          <option value="30">30 years</option>
        </select> */}
        <input 
            type="number"
            value={loanTerm}
            min="1"
            max="30"
            onChange={handleLoanTermChange}
        />
        <span>years</span>
        <div>
          <input className="style.range"
          type="range" 
          min="1"
          max="30"
          value={loanTerm}
          onChange={handleLoanTermChange}
          />
        </div>
      </div>
      <div className={styles.output}>
        <h3>Monthly Payment:</h3>
        <p className={styles.p}>${monthlyPayment.toFixed(2)}</p>
      </div>
      </div>
    </div>
  );
};

export default Mortgage;
