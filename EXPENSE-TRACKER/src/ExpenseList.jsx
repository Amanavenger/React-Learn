import ExpenseItem from "./ExpenseItem"

export default function ExpenseLists({ expenses, onDelete }) {

    if (expenses.length === 0) {
        return <p className="no-expense">No Expenses Yet!!</p>
    }

    return (
        <div class="expense-list">

            {expenses.map((item) => (
                <ExpenseItem key ={item.id} item={item} onDelete = {onDelete}/>
            ))}

            
        </div>
    )
}