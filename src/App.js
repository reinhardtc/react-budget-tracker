import { Stack, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import AddBudgetModal from './Components/AddBudgetModal';
import BudgetCard from './Components/BudgetCard';

function App() {
	return (
		<>
			<Container>
				<Stack direction="horizontal" gap="2" className="mb-4">
					<h1 className="me-auto">Budgets</h1>
					<Button variant="primary">Add Budget</Button>
					<Button variant="outline-primary">Add Expense</Button>
				</Stack>
				<div
					className="budgetCard"
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
						gap: '1rem',
						alignItems: 'flex-start',
					}}
				>
					<BudgetCard name="Food" amount={1000} max={1000}></BudgetCard>
				</div>
			</Container>
			<AddBudgetModal show />
		</>
	);
}

export default App;
