import Header from "../Header"; // Import Header component
import Container from "./Container";
import IncomeContainer from "./IncomeContainer";
import ExpenseContainer from "./ExpenseContainer";
import Form from './Form'
import VariablesContext from "../CustomHooks/VariablesContext";
import Transactions from "./Transactions";
const Home = ()=>{    
    return (
        <div>
            <Header /> 
            <VariablesContext>
            <div className="container">
                <div className="child" >
                <Container />
                <div className="inc-exp-container">
                    <IncomeContainer />
                    <ExpenseContainer />
                </div>
                <h3>Add New Transaction</h3>
                <Form />
                </div>
                <div className="child">
                <h3>History</h3>
                <Transactions />
                </div> 
            </div>
            </VariablesContext>
      </div>
    )
}


export default Home; 