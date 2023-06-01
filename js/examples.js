console.log('--------------------Example 1---------------------');

{
    /**Example 1 - Основи об'єктів
 * Напиши скрипт, який для об'єкта user, послідовно:
 * 
 * Додає поле mood зі значенням "happy"
 * Замінює значення "hobby" на "skydiving"
 * Замінює значення "premium" на "false"
 * Виводить вміст об'єкта user у форматі 
 * ключ:значення, використовуючи Object.keys() та for...of    
 */

const user = {
    name: 'mango',
    age: 20,
    hobby: 'html',
    premium: true,
}
console.log(user);

user.skills = {
    run:true
}
user.mood = 'happy';
user.hobby = 'skydiving';
// user['premium'] = false;
const key = 'premium';
user[key] = false;

console.table(user);

for (const key in user) {
   console.log(user[key]);
   
}

// const keys = Object.keys(user)
// for (const key of keys) {
//     console.log(user[key]);
// }

// console.log(keys);
}
console.log('--------------------Example 2---------------------');
{
    /**Example 2 метод Object.values()
     * У нас є об'єкт, де зберігаються зарплати нашої команди.
     * Напишіть код для підсумовування всіх зарплат і збережіть результат 
     * у змінній sum.
     * 
     * Повинно вийти 390. Якщо об'єкт salaries порожній, 
     * то результат має бути 0 */ 

    const salaries = {
        John: 100,
        Ann: 160,
        Pete: 130,
    }

    let sum = 0;

    // for (const key in salaries) {
    //     console.log(salaries[key]);
    //     sum += salaries[key]
    // }

    const values = Object.values(salaries);
    console.log(values);

    for (const value of values) {
        // console.log(value);
        sum += value
    }

    console.log(sum);
}
console.log('--------------------Example 3---------------------');
{
    /** Масив об'єктів
     * 
     * Напишіть функцію calkTotalPrice(stones, stoneName),
     * яка приймає масив об'єктів та рядок з назвою каменю.
     * Функція рахує і повертає загальну вартість каміння з таким ім'ям, 
     * ціною та кількістю об'єкта.
    */

    const stones = [{
        name: 'Смарагд',
        price: 1300,
        quantity: 4, 
    },
    {
        name: 'Діамант',
        price: 2700,
        quantity: 3, 
    },
    {
        name: 'Сапфір',
        price: 400,
        quantity: 7, 
    },
    {
        name: 'Щебінь',
        price: 200,
        quantity: 2, 
    }
];

function calkTotalPrice(stones, stoneName) {

    for (const stone of stones) {
        // console.log(stone);
        if (stone.name === stoneName) {
            return result = stone.price * stone.quantity 
        }
    }
            return 'Empty'



}

console.log(calkTotalPrice(stones, 'Смарагд'));
console.log(calkTotalPrice(stones, 'Діамант'));
console.log(calkTotalPrice(stones, 'Сапфір'));
console.log(calkTotalPrice(stones, 'Щебінь'));
console.log(calkTotalPrice(stones, 'фувсціусв'));
}
console.log('--------------------Example 4---------------------');
{
    /**Компдлексні завдання 
     * 
     * Напиши скрипт управління особистим кабінетом інтернет банку.
     * Є Об'єкт account в якому необхідно реалізувати методи для 
     * роботи з балансом та історією транзакцій.
     * 
     * Типів транзакцій всього два
     * Можна покласти чи зняти гроші з рахунку. 
     * 
     * const Transaction = {
     *    DEPOSIT: 'deposit',
     *    WITHDRAW: 'withdraw',   
     * }
     * 
     * Кожна транзакція це об'єкт із властивостями: id, type та amount
     */

    const Transaction = {
        DEPOSIT: 'deposit',
        WITHDRAW: 'withdraw',
    }

    // Object.freeze(Transaction)
    // Transaction.DEPOSIT = 'sdfcsdcsdfccs'
    // console.log(Transaction);

    const account = {
        // Поточний баланс рахунку 
        balance: 0,

        //Історія транзакцій
        transactions: [{id: 16, amount: 300, type: 'deposit'}],

        /**Метод створює та повертає об'єкт транзакцій
         * Приймає суму та тип транзакцій.
         */
        createTransaction(amount, type) {
            return {
                id: Date.now(),
                amount,
                type,
            }
        },

        /** Метод, що відповідає за додавання суми до балансую
         * Приймає суму транзакційю
         * Викликає createTransaction для створення об'єкта транзакції
         * після чого додає його до історії транзакцій
         */

        deposit(amount) {
            if(amount <= 0) {
                return 'Error!!!';
            } 
            const item = this.createTransaction(amount, Transaction.DEPOSIT)
            // console.log(item);
            this.balance += amount
            this.transactions.push(item)
        },

        /**Метод, що відповідає за зняття суми з балансу.
         * Приймає суму транзакції.
         * Викликає createTransaction для створення об'єкта транзакції
         * після чого додає його до історії транзакцій.
         * 
         * Якщо amount більше ніж поточний баланс, виводить повідомлення 
         * про те, що зняття такої суми не можливе, недостатньо коштів 
         */

        withdraw(amount) {
            if (amount > this.balance || amount <= 0) {
                return 'There is not enough money!'
            }
            const item = this.createTransaction(amount, Transaction.WITHDRAW)
            // console.log(item);
            this.transactions.push(item);
            this.balance -= amount
        },

        /**Метод повертає поточний баланс */

        getBalance() {
            return this.balance 
        },

        /**Метод шукає та повертає об'єкт транзакції по ІД */
        
        getTransactionDetails(id) {
            for (const transaction of this.transactions) {
                if (transaction.id === id) {
                    return transaction
                }
                return 'Empty';
            }
        },

        /**Метод повертає кількість коштів
         * певного типу транзакції з усієї історії транзакцій
         */

        getTransactionTotal(type) {
            let sum = 0;

            for (const transaction of this.transactions) {
                if (transaction.type === type) {
                    sum += transaction.amount
                }
            }
            return sum
        }
    }

account.deposit(1000);
account.deposit(300);
account.deposit(1200);
account.withdraw(500);
account.withdraw(1000);
// console.log(account.getBalance(), 'Balance');
// console.log(account.getTransactionDetails(1), 'Transaction Details');
console.log(account.getTransactionTotal(Transaction.DEPOSIT));
console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// console.log(account.withdraw(2600));

console.table(account);
console.table(account.transactions);

    // console.log(account.createTransaction(1000, 'deposit'));
}
