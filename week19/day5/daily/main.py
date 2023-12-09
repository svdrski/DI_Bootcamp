#1
def funcc(*words):
    return ', '.join(list(sorted(words)))
print(funcc('without','hello','bag','world'))

#2
def longest_word(sent):
   return sorted(sent.split(' '), key=len)[-1]
print(longest_word("Margaret's toy is a pretty doll."))
print(longest_word("A thing of beauty is a joy forever."))
print(longest_word("Forgetfulness is by all means powerless!"))