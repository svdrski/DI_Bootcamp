action = input('Crypt or decrypt ?')
text = input('Enter word')

cypher_text =''
for letter in text:
    if action.lower() == 'decrypt':
        cypher_text += chr(ord(letter) - 3)
    elif action.lower() == 'crypt':
        cypher_text += chr(ord(letter) + 3)
    else:
        print('Wrond command')
print(cypher_text)


