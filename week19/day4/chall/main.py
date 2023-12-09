def check(text, symbol):
    result = text.lower().count(symbol)
    print(result)

check('Programming is cool!', 'o')
check('This is a great example', 'y')