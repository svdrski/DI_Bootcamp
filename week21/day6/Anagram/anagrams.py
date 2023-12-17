import re
from  anagram_checker import  AnagramChecker
def showMenu():
    while True:
        value = input('Welcome, (s)Search word (q)Exit')
        if value.lower() == 'q': break
        if value.lower() == 's':
            word = input('Enter word')
            if re.match("^[a-zA-Z]+$", word.strip()) is not None:
                obj = AnagramChecker()
                print(', '.join(obj.get_anagrams(word)))

showMenu()