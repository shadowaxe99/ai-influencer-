class Budget:
    def __init__(self, initial_budget):
        self.initial_budget = initial_budget
        self.expenses = []
        self.income = []

    def add_expense(self, amount):
        """Add an expense to the budget."""
        if amount > 0:
            self.expenses.append(amount)
        else:
            raise ValueError("Expense amount must be positive.")

    def add_income(self, amount):
        """Add income to the budget."""
        if amount > 0:
            self.income.append(amount)
        else:
            raise ValueError("Income amount must be positive.")

    def calculate_total(self):
        """Calculate the total budget."""
        total_expenses = sum(self.expenses)
        total_income = sum(self.income)
        total_budget = self.initial_budget + total_income - total_expenses
        return total_budget

    def calculate_balance(self):
        """Calculate the balance of the budget."""
        balance = self.calculate_total()
        if balance < 0:
            return "Budget is in deficit."
        elif balance == 0:
            return "Budget is balanced."
        else:
            return "Budget is in surplus."