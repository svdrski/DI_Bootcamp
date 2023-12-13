class BankAccount():
    def __init__(self, username, password, balance=0, authenticated=False):
        if balance < 0: raise ValueError('Enter positive value'); return
        self.balance = balance
        self.username = username
        self.password = password
        self.authenticated = authenticated

    def authenticate(self, username, password):
        if username == self.username and self.password == password:
            self.authenticated = True
            return  True
    def deposit(self, value):
        if not self.authenticated: raise ValueError('Auth ERROR')
        if value < 0: raise ValueError('Enter positive value'); return
        self.balance += value

    def withdraw(self, value):
        if not self.authenticated: raise ValueError('Auth ERROR')
        if value < 0: raise ValueError('Enter positive value'); return
        self.balance -= value


class MinimumBalanceAccount(BankAccount):
    def __init__(self,username, password, minbalance=0):
        super().__init__(balance = minbalance, username=username, password=password)

    def withdraw(self,value):
        if value < 0: raise ValueError('Enter positive value'); return
        if value > self.balance: raise ValueError('Not enough money'); return
        self.balance -= value


mywal = BankAccount('lev', '1')
wallet = MinimumBalanceAccount('hleb', '123')
wallet.authenticate('hleb', '123')
print(wallet.balance)
wallet.deposit(100)
print(wallet.balance)
# wallet.withdraw(20)
print(wallet.balance)


class ATM():
    def __init__(self, account_list, try_limit):
        self.account_list = account_list

        if all(isinstance(i, BankAccount) or isinstance(i, MinimumBalanceAccount) for i in account_list):
            print('Alle')
        else:raise ValueError('NOT INSTASES'); return

        self.try_limit = try_limit
        self.current_tries = 0

        try:
            if try_limit < 0:
                 raise ValueError('LIMIT < 0')
        except ValueError:
            self.try_limit = 2

    def show_main_menu(self):
        while True:
            choice = input('Menu - Enter "Log in" or "Exit": ').lower()

            if choice == 'log in':
                username = input('Enter your username: ')
                password = input('Enter your password: ')
                self.log_in(username, password)
            elif choice == 'exit':
                break
            else:
                print('Invalid choice. Please enter "Log in" or "Exit".')

    def log_in(self, username, password):
        for account in self.account_list:
            if account.authenticate(username, password):
                self.show_account_menu(account)
                break
        else:
            self.current_tries += 1
            print(f'Invalid username or password. Attempts left: {self.try_limit - self.current_tries}')

            if self.current_tries >= self.try_limit:
                print('Max attempts reached. Exiting...')


    def show_account_menu(self, account):
        while True:
            print(f'Welcome, {account.username}!')
            choice = input('Account Menu - Enter "Deposit", "Withdraw", or "Exit": ').lower()

            if choice == 'deposit':
                amount = float(input('Enter the amount to deposit: '))
                account.deposit(amount)
                print(f'Deposit successful. New balance: {account.balance}')
            elif choice == 'withdraw':
                amount = float(input('Enter the amount to withdraw: '))
                try:
                    account.withdraw(amount)
                    print(f'Withdrawal successful. New balance: {account.balance}')
                except ValueError as e:
                    print(f'Error: {e}')
            elif choice == 'exit':
                break
            else:
                print('Invalid choice. Please enter "Deposit", "Withdraw", or "Exit".')



tmlist = ATM([mywal, wallet], 5)

print(tmlist.try_limit, "FFFF")

tmlist.show_main_menu()
# tmlist.show_account_menu(wallet)